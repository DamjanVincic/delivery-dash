from rest_framework.permissions import IsAuthenticated
from rest_framework import generics

from ..serializers import UserSerializer
from ..models import User
from ..permissions import IsDispatcher


class DispatcherDriverList(generics.ListAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated, IsDispatcher]

    def get_queryset(self):
        return User.objects.filter(role=User.DRIVER)
        
