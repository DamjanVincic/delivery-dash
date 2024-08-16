from django import forms
from django.utils import timezone

from ..models import Order


class OrderAddForm(forms.ModelForm):
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
        ]

    deliver_at = forms.DateTimeField(
        input_formats=['%Y-%m-%d %H:%M'],
        widget=forms.DateTimeInput(attrs={'type': 'datetime-local'}),
    )

    def clean_deliver_at(self):
        deliver_at = self.cleaned_data['deliver_at']
        if deliver_at < timezone.now():
            raise forms.ValidationError('Delivery date cannot be in the past.')
        return deliver_at

    def clean_phone_number(self):
        phone_number = self.cleaned_data['phone_number']
        if not phone_number.isdigit():
            raise forms.ValidationError('Phone number can only contain digits.')
        return phone_number

    def clean_price(self):
        price = self.cleaned_data['price']
        if price < 0:
            raise forms.ValidationError('Price cannot be negative.')
        return price

    def clean_delivery(self):
        delivery = self.cleaned_data.get('delivery')
        deliver_at = self.cleaned_data.get('deliver_at')
        if deliver_at and delivery:
            for order in delivery.orders.all():
                if order.deliver_at.date() != deliver_at.date():
                    raise forms.ValidationError(
                        'Orders in the same delivery must have the same delivery date.'
                    )
        return delivery
