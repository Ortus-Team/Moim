from rest_framework import serializers

from api.serializers import UserSerializer
from category.serializers import CategorySerializer
from org.serializers import OrgSerializer
from tag.serializers import TagSerializer
from .models import Event, AccessLevel


class AccessLevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccessLevel
        fields = (
            'title',
            'slug',
            'description'
        )


class EventSerializer(serializers.ModelSerializer):
    tags = TagSerializer(read_only=True, many=True)
    access_level = AccessLevelSerializer(read_only=True)
    category = CategorySerializer(read_only=True)
    publisher = UserSerializer(read_only=True)
    org = OrgSerializer(read_only=True)

    class Meta:
        model = Event
        fields = (
            'title',
            'slug',
            'event_date',
            'pub_date',
            'access_level',
            'location',
            'body',
            'category',
            'tags',
            'publisher',
            'org'
        )

        lookup_field = 'slug'

