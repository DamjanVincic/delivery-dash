from apps.users.permissions import IsDriver
from django.utils import timezone
from drf_spectacular.utils import extend_schema
from rest_framework import status, views
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from ..models import Order
from ..serializers import OrderSerializer


class DriverOrderComplete(views.APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated, IsDriver]

    @extend_schema(
        responses={200: OrderSerializer, 400: None, 403: None, 404: None},
        summary="Mark order as completed",
    )
    def patch(self, request, pk):
        try:
            order = Order.objects.get(pk=pk)
        except Order.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if (
            not order.delivery
            or not order.delivery.driver
            or order.delivery.driver != request.user
        ):
            return Response(
                {'error': 'You are not the assigned driver'},
                status=status.HTTP_403_FORBIDDEN,
            )

        if order.status != Order.PENDING:
            return Response(
                {'error': 'The order isn\'t pending'},
                status=status.HTTP_400_BAD_REQUEST,
            )

        order.status = Order.DELIVERED
        order.delivered_at = timezone.now()
        order.save()
        return Response(OrderSerializer(order).data)
