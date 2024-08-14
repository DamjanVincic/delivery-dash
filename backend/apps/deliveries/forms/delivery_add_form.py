from django import forms

from ..models import Delivery


class DeliveryAddForm(forms.ModelForm):
    class Meta:
        model = Delivery
        fields = ['driver']
