from apps.orders.models import Order
from apps.users.models import User
from django import forms
from django.db.models import Q

from ..models import Delivery


class DeliveryChangeForm(forms.ModelForm):
    class Meta:
        model = Delivery
        fields = ['driver', 'status', 'orders']

    driver = forms.ModelChoiceField(
        queryset=User.objects.filter(role=User.DRIVER), required=False
    )

    orders = forms.ModelMultipleChoiceField(
        queryset=Order.objects.all(),
        widget=forms.CheckboxSelectMultiple,
    )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['orders'].queryset = Order.objects.filter(
            Q(delivery=self.instance) | Q(delivery=None)
        )
        self.fields['orders'].initial = self.instance.orders.all()

    def save(self, *args, **kwargs):
        delivery = super().save(commit=False)
        delivery.save()
        self.fields['orders'].initial.update(delivery=None)
        self.cleaned_data['orders'].update(delivery=delivery)
        return delivery

    def clean_orders(self):
        orders = self.cleaned_data['orders']
        if len(set(order.deliver_at.date() for order in orders)) > 1:
            raise forms.ValidationError('Orders must have the same delivery date')
        return orders
