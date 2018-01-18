from rest_framework import serializers

from org.models import Org


class OrgSerializer(serializers.ModelSerializer):
    class Meta:
        model = Org
        fields = (
            'name',
            'created_date',
            'description',
            'category',
            'tags',
            'members',
        )
