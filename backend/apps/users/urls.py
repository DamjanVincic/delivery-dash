from django.urls import path

from .views import CustomAuthToken, DispatcherDriverList

dispatcher_urlpatterns = [
    path('drivers/', DispatcherDriverList.as_view()),
]

urlpatterns = [
    path('api-token-auth/', CustomAuthToken.as_view()),
]
