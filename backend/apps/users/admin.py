from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import User


class CustomUserAdmin(UserAdmin):
    model = User
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        (
            'Personal info',
            {'fields': ('first_name', 'last_name', 'email', 'phone_number', 'role')},
        ),
        (
            'Permissions',
            {
                'fields': (
                    'is_active',
                    'is_staff',
                    'is_superuser',
                )
            },
        ),
    )

    add_fieldsets = (
        (
            None,
            {
                'fields': (
                    'username',
                    'password1',
                    'password2',
                    'email',
                    'first_name',
                    'last_name',
                    'phone_number',
                    'role',
                )
            },
        ),
    )


admin.site.register(User, CustomUserAdmin)
