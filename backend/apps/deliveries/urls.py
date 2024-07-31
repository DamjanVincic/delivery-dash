from .views import DeliveryList, DeliveryDetail
from django.urls import path

urlpatterns = [
    path('', DeliveryList.as_view()),
    path('<int:pk>/', DeliveryDetail.as_view()),
]
