#!/bin/bash

# Apply migrations
python manage.py migrate || exit 1

exec "$@"
