from django import forms
from django.contrib.auth.forms import UserCreationForm

from ..models import User


class UserAddForm(UserCreationForm):
    class Meta:
        model = User
        fields = [
            'username',
            'email',
            'first_name',
            'last_name',
            'phone_number',
            'role',
        ]

    def clean_phone_number(self):
        phone_number = self.cleaned_data['phone_number']
        if not phone_number.isdigit():
            raise forms.ValidationError('Phone number can only contain digits.')
        return phone_number
