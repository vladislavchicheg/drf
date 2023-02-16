from rest_framework.viewsets import ModelViewSet

from .models import TODO, Project
from .serializers import ProjectSerializer, TODOSerializer


class TODOViewSet(ModelViewSet):
    serializer_class = TODOSerializer
    queryset = TODO.objects.all()


class ProjectViewSet(ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()
