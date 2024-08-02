from drf_spectacular.utils import extend_schema
from rest_framework import status
from rest_framework import views
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from apps.users.permissions import IsDriver
from ..models import Order
from ..serializers import OrderSerializer, DriverOrderFailSerializer


class DriverOrderFail(views.APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated, IsDriver]

    # TODO: let driver only complete the orders that are assigned to him
    @extend_schema(request=DriverOrderFailSerializer, responses={200: OrderSerializer, 400: None, 404: None})
    def patch(self, request, pk):
        try:
            order = Order.objects.get(pk=pk)
        except Order.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = DriverOrderFailSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        order.status = Order.FAILED
        order.comment = serializer.validated_data.get('comment')
        order.save()
        return Response(OrderSerializer(order).data)
