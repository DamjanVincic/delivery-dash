from ..models import Order
from ..serializers import OrderSerializer
from rest_framework import views
from rest_framework.response import Response
from drf_spectacular.utils import extend_schema
from rest_framework import status


class OrderDetail(views.APIView):
    @extend_schema(responses={200: OrderSerializer, 404: None})
    def get(self, request, pk):
        try:
            order = Order.objects.get(pk=pk)
        except Order.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = OrderSerializer(order)
        return Response(serializer.data)

    @extend_schema(request=OrderSerializer, responses={200: OrderSerializer, 400: None, 404: None})
    def put(self, request, pk):
        try:
            order = Order.objects.get(pk=pk)
        except Order.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = OrderSerializer(order, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @extend_schema(request=OrderSerializer, responses={204: None})
    def delete(self, request, pk):
        try:
            order = Order.objects.get(pk=pk)
            order.delete()
        except Order.DoesNotExist:
            pass
        return Response(status=status.HTTP_204_NO_CONTENT)
