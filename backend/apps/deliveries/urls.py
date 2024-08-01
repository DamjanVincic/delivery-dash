from django.urls import path

from .views import DeliveryList, DeliveryDetail, DriverDeliveryList

driver_urlpatterns = [
    path('deliveries/', DriverDeliveryList.as_view()),
]

urlpatterns = [
    path('', DeliveryList.as_view()),
    path('<int:pk>/', DeliveryDetail.as_view()),
]
