from rest_framework import status
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from .filters import ProjectFilter, TODOFilter
from .models import TODO, Project
from .serializers import ProjectSerializer, TODOSerializer


class TODOLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class TODOViewSet(ModelViewSet):
    serializer_class = TODOSerializer
    queryset = TODO.objects.all()
    pagination_class = TODOLimitOffsetPagination
    filterset_class = TODOFilter

    def destroy(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            instance.is_active = False
            instance.save()
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(status=status.HTTP_204_NO_CONTENT)


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class ProjectViewSet(ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()
    pagination_class = ProjectLimitOffsetPagination
    filterset_class = ProjectFilter
