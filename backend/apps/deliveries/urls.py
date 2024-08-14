from django.urls import path

from .views import (
    DeliveryList,
    DeliveryDetail,
    DriverDeliveryList,
    DispatcherDeliveryList,
)

driver_urlpatterns = [
    path('', DriverDeliveryList.as_view()),
]

dispatcher_urlpatterns = [
    path('', DispatcherDeliveryList.as_view()),
]

urlpatterns = [
    path('', DeliveryList.as_view()),
    path('<int:pk>/', DeliveryDetail.as_view()),
]
