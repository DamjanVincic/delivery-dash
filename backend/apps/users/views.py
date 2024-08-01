from drf_spectacular.utils import extend_schema
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response

from .serializers import AuthTokenResponseSerializer


class CustomAuthToken(ObtainAuthToken):
    @extend_schema(responses=AuthTokenResponseSerializer)
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response(AuthTokenResponseSerializer({
            'token': token.key,
            'user': user
        }).data)
