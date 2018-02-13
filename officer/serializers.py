from rest_framework import serializers

from officer.models import Officer
from org.models import Org


class OfficerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Officer
        fields = (
            'user',
            'title',
            'year',
            'categories',
            'tags',
            'members',
            'officers'
        )
