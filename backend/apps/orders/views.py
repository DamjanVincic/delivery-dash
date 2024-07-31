from .models import Order
from .serializers import OrderSerializer
from rest_framework import views
from rest_framework.response import Response


class OrderList(views.APIView):
    def get(self, request):
        orders = Order.objects.all()
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)
