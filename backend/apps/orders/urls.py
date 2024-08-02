from django.urls import path

from .views import OrderList, OrderDetail, DriverOrderComplete, DriverOrderFail, DispatcherOrderList

driver_urlpatterns = [
    path('<int:pk>/complete/', DriverOrderComplete.as_view()),
    path('<int:pk>/fail/', DriverOrderFail.as_view()),
]

dispatcher_urlpatterns = [
    path('', DispatcherOrderList.as_view()),
]

urlpatterns = [
    path('', OrderList.as_view()),
    path('<int:pk>/', OrderDetail.as_view()),
]