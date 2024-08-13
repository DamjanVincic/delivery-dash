from django import forms

from ..models import Order


class OrderChangeForm(forms.ModelForm):
    class Meta:
        model = Order
        fields = [
            'deliver_at',
            'buyer_firstname',
            'buyer_lastname',
            'address',
            'phone_number',
            'price',
            'payment_method',
            'delivery',
            'status',
            'comment',
        ]
