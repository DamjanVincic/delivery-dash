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

    list_display = (
        'username',
        'email',
        'first_name',
        'last_name',
        'role',
        'phone_number',
    )
    list_filter = ('role', 'is_staff', 'is_superuser', 'is_active')
    search_fields = ('username', 'email', 'first_name', 'last_name', 'phone_number')


admin.site.register(User, CustomUserAdmin)
