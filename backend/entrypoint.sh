#!/bin/bash

# Apply migrations
python manage.py migrate || exit 1

# Create superuser
python manage.py createsuperuser --noinput || echo "User already exists." # If the user already exists

exec "$@"