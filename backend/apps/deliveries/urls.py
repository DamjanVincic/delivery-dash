from .views import DeliveryList
from django.urls import path

urlpatterns = [
    path('', DeliveryList.as_view()),
]
