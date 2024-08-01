from rest_framework import permissions

from ..models import User


class IsDriver(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.role == User.DRIVER
