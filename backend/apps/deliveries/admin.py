from django.contrib import admin

from .models import Delivery
from .forms import DeliveryAddForm, DeliveryChangeForm
from ..orders.models import Order


class OrderInLine(admin.StackedInline):
    model = Order
    extra = 0


class DeliveryAdmin(admin.ModelAdmin):
    inlines = [OrderInLine]

    def get_form(self, request, obj=None, **kwargs):
        if obj:
            return DeliveryChangeForm
        return DeliveryAddForm


admin.site.register(Delivery, DeliveryAdmin)
