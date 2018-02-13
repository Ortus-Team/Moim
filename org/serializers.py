from rest_framework import serializers

from oauth.serializers import UserSerializer
from category.serializers import CategorySerializer
from officer.serializers import OfficerSerializer
from org.models import Org


class OrgSerializer(serializers.ModelSerializer):
    officers = OfficerSerializer(read_only=True)
    categories = CategorySerializer(read_only=True)
    members = UserSerializer(read_only=True)

    class Meta:
        model = Org
        fields = (
            'name',
            'created_date',
            'description',
            'categories',
            'members',
            'officers'
        )

        lookup_field = 'name'

