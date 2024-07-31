from .models import Order
from .serializers import OrderSerializer
from rest_framework import views
from rest_framework.response import Response
from drf_spectacular.utils import extend_schema
from rest_framework import status


class OrderList(views.APIView):
    @extend_schema(responses=OrderSerializer(many=True))
    def get(self, request):
        orders = Order.objects.all()
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)

    @extend_schema(request=OrderSerializer, responses={201: OrderSerializer, 400: None})
    def post(self, request):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
