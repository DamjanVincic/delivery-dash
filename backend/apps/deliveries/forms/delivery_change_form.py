from django import forms

from ..models import Delivery


class DeliveryChangeForm(forms.ModelForm):
    class Meta:
        model = Delivery
        fields = ['driver', 'status']
