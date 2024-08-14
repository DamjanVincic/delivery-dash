from django.contrib import admin

from .forms import OrderAddForm, OrderChangeForm
from .models import Order


class CustomerFilter(admin.SimpleListFilter):
    title = 'Customer'
    parameter_name = 'customer'

    def lookups(self, request, model_admin):
        customers = set(
            f'{order.buyer_firstname} {order.buyer_lastname}'
            for order in Order.objects.all()
        )
        return [(customer, customer) for customer in customers]

    def queryset(self, request, queryset):
        if self.value():
            first_name, last_name = self.value().split(' ')
            return queryset.filter(buyer_firstname=first_name, buyer_lastname=last_name)
        return queryset


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
    list_filter = ['status', 'payment_method', CustomerFilter, 'delivery']

    def get_form(self, request, obj=None, **kwargs):
        if obj:
            return OrderChangeForm
        return OrderAddForm

    def details(self, obj):
        return f'Order #{obj.id}'

    def customer(self, obj):
        return f'{obj.buyer_firstname} {obj.buyer_lastname}'


admin.site.register(Order, OrderAdmin)
