from rest_framework import mixins, viewsets
from rest_framework.pagination import LimitOffsetPagination

from .filters import UserFilter
from .models import User
from .serializers import UserSerializer, UserSerializerV2


class UserLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class UserViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, viewsets.GenericViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    pagination_class = UserLimitOffsetPagination
    filterset_class = UserFilter

    def get_serializer_class(self):
        if self.request.version == "2.0":
            return UserSerializerV2
        return UserSerializer
