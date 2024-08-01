"""
URL configuration for delivery_dash project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView

from apps.users.urls import urlpatterns as user_urlpatterns
from apps.deliveries.urls import (
    urlpatterns as delivery_urlpatterns,
    driver_urlpatterns as driver_delivery_urlpatterns,
    dispatcher_urlpatterns as dispatcher_delivery_urlpatterns
)

schema_urlpatterns = [
    path('', SpectacularAPIView.as_view(), name='schema'),
    path('swagger-ui/', SpectacularSwaggerView.as_view(url_name='schema')),
    path('redoc/', SpectacularRedocView.as_view(url_name='schema')),
]

driver_urlpatterns = [
    path('deliveries/', include(driver_delivery_urlpatterns)),
]

dispatcher_urlpatterns = [
    path('deliveries/', include(dispatcher_delivery_urlpatterns)),
]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('schema/', include(schema_urlpatterns)),
    path('orders/', include('apps.orders.urls')),
    path('deliveries/', include(delivery_urlpatterns)),
    *user_urlpatterns,
    path('driver/', include(driver_urlpatterns)),
    path('dispatcher/', include(dispatcher_urlpatterns)),
]

urlpatterns = [
    path('api/v1/', include(urlpatterns)),
]
