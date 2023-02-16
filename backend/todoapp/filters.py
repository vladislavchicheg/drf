from django_filters import rest_framework as filters

from .models import TODO, Project


class TODOFilter(filters.FilterSet):
    project = filters.NumberFilter()

    class Meta:
        model = TODO
        fields = [
            "project",
        ]


class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr="contains")

    class Meta:
        model = Project
        fields = [
            "name",
        ]
