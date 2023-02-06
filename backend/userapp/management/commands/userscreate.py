from django.core.management.base import BaseCommand
from userapp.models import User


class Command(BaseCommand):
    help = "Create superuser and x users (default 5)"

    def handle(self, *args, **options):
        User.objects.all().delete()
        User.objects.create_superuser("admin", "admin@admin.ru", "123")

        user_count = options["count"] if options["count"] else options["default"]

        for i in range(user_count):
            User.objects.create_user(f"custom_user{i}", f"custom_user{i}@custom_user.ru", "123")

    def add_arguments(self, parser):
        parser.add_argument("-c", "--count", type=int, default=3, help="count of users to create")
