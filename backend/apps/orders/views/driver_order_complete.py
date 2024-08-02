from django.utils import timezone
from drf_spectacular.utils import extend_schema
from rest_framework import views, status
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from apps.users.permissions import IsDriver
from ..models import Order
from ..serializers import OrderSerializer


class DriverOrderComplete(views.APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated, IsDriver]

    # TODO: let driver only complete the orders that are assigned to him
    @extend_schema(responses={200: OrderSerializer, 404: None})
    def patch(self, request, pk):
        try:
            order = Order.objects.get(pk=pk)
        except Order.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        order.status = Order.DELIVERED
        order.delivered_at = timezone.now()
        order.save()
        return Response(OrderSerializer(order).data)
