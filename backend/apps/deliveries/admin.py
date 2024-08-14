from django.contrib import admin

from apps.users.models import User

from .models import Delivery
from .forms import DeliveryAddForm, DeliveryChangeForm


class DriverFilter(admin.SimpleListFilter):
    title = 'Driver'
    parameter_name = 'driver'

    def lookups(self, request, model_admin):
        drivers = User.objects.filter(role=User.DRIVER)
        return [(driver.pk, driver) for driver in drivers]

    def queryset(self, request, queryset):
        if self.value():
            return queryset.filter(driver=self.value())
        return queryset


class DeliveryAdmin(admin.ModelAdmin):
    list_display = ['delivery', 'driver', 'status']
    list_filter = ['status', DriverFilter]

    def get_form(self, request, obj=None, **kwargs):
        if obj:
            return DeliveryChangeForm
        return DeliveryAddForm

    def delivery(self, obj):
        return f'Delivery #{obj.pk}'


admin.site.register(Delivery, DeliveryAdmin)
