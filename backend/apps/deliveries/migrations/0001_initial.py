# Generated by Django 5.0.7 on 2024-07-30 12:08

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Delivery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('driver', models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='delivery', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
