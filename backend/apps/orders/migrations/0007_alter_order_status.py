# Generated by Django 5.0.7 on 2024-08-13 10:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("orders", "0006_order_comment_order_delivered_at"),
    ]

    operations = [
        migrations.AlterField(
            model_name="order",
            name="status",
            field=models.CharField(
                choices=[
                    ("pending", "Pending"),
                    ("delivered", "Delivered"),
                    ("cancelled", "Cancelled"),
                ],
                default="pending",
            ),
        ),
    ]
