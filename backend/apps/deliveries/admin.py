from django.contrib import admin
from .models import Delivery
from ..orders.models import Order


class OrderInLine(admin.StackedInline):
    model = Order
    extra = 0


class DeliveryAdmin(admin.ModelAdmin):
    inlines = [OrderInLine]


admin.site.register(Delivery, DeliveryAdmin)
