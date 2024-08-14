from django import forms

from apps.orders.models import Order
from apps.users.models import User

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

    def save(self, *args, **kwargs):
        delivery = super().save(commit=False)
        delivery.save()
        self.cleaned_data['orders'].update(delivery=delivery)
        return delivery
