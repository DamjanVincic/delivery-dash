from .models import Order
from .serializers import OrderSerializer
from rest_framework import views
from rest_framework.response import Response
from drf_spectacular.utils import extend_schema


class OrderList(views.APIView):
    @extend_schema(responses=OrderSerializer(many=True))
    def get(self, request):
        orders = Order.objects.all()
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)
