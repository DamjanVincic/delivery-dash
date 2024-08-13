from django.contrib import admin

from .forms import OrderAddForm, OrderChangeForm
from .models import Order


class OrderAdmin(admin.ModelAdmin):
    list_display = [
        'details',
        'customer',
        'deliver_at',
        'delivered_at',
        'address',
        'phone_number',
        'price',
        'payment_method',
        'status',
        'delivery',
    ]
    list_filter = ['status', 'delivery', 'payment_method']

    def get_form(self, request, obj=None, **kwargs):
        if obj:
            return OrderChangeForm
        return OrderAddForm

    def details(self, obj):
        return f'Order #{obj.id}'

    def customer(self, obj):
        return f'{obj.buyer_firstname} {obj.buyer_lastname}'


admin.site.register(Order, OrderAdmin)
