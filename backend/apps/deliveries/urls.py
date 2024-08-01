from django.urls import path

from .views import DeliveryList, DeliveryDetail

urlpatterns = [
    path('', DeliveryList.as_view()),
    path('<int:pk>/', DeliveryDetail.as_view()),
]
