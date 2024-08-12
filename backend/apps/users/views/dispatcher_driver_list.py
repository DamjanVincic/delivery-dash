from drf_spectacular.utils import extend_schema
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics

from ..serializers import UserSerializer
from ..models import User
from ..permissions import IsDispatcher


@extend_schema(summary="Get all drivers")
class DispatcherDriverList(generics.ListAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated, IsDispatcher]

    def get_queryset(self):
        return User.objects.filter(role=User.DRIVER)
        
