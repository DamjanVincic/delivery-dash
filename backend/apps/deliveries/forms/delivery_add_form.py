from apps.orders.models import Order
from apps.users.models import User
from django import forms

from ..models import Delivery


class DeliveryAddForm(forms.ModelForm):
    class Meta:
        model = Delivery
        fields = ['driver', 'orders']

    driver = forms.ModelChoiceField(
        queryset=User.objects.filter(role=User.DRIVER), required=False
    )

    orders = forms.ModelMultipleChoiceField(
        queryset=Order.objects.filter(delivery=None),
        widget=forms.CheckboxSelectMultiple,
        required=False,
    )

    def clean_orders(self):
        orders = self.cleaned_data['orders']
        if len(set(order.deliver_at.date() for order in orders)) > 1:
            raise forms.ValidationError('Orders must have the same delivery date')
        return orders

    def save(self, *args, **kwargs):
        delivery = super().save(commit=False)
        delivery.save()
        self.cleaned_data['orders'].update(delivery=delivery)
        return delivery
