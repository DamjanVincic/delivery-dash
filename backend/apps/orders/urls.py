from django.urls import path

from .views import OrderList, OrderDetail, DriverOrderComplete

driver_urlpatterns = [
    path('<int:pk>/complete/', DriverOrderComplete.as_view()),
]

urlpatterns = [
    path('', OrderList.as_view()),
    path('<int:pk>/', OrderDetail.as_view()),
]