from rest_framework import mixins, viewsets
from rest_framework.pagination import LimitOffsetPagination

from .filters import UserFilter
from .models import User
from .serializers import UserSerializer


class UserLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class UserViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, viewsets.GenericViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    pagination_class = UserLimitOffsetPagination
    filterset_class = UserFilter
