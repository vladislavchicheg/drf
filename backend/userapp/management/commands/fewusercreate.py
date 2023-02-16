from django.core.management.base import BaseCommand
from userapp.models import User


class Command(BaseCommand):
    help = "Create superuser and x users (default 3)"

    def handle(self, *args, **options):
        user_count = options["count"] if options["count"] else options["default"]

        for i in range(user_count):
            User.objects.create_user(f"custom_user{i+10}", f"custom_user{i+10}@custom_user.ru", "123")

    def add_arguments(self, parser):
        parser.add_argument("-c", "--count", type=int, default=3, help="count of users to create")
