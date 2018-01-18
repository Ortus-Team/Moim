from django.template.defaultfilters import slugify
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.views.decorators.csrf import csrf_exempt

from category.models import Category
from event.models import Event, AccessLevel
from event.serializers import EventSerializer
from tag.models import Tag


class EventList(ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def get_queryset(self):
        qs = super(EventList, self).get_queryset()

        # Filter by tag
        tag = self.kwargs.get('tag')
        if tag:
            tag = Tag.objects.get(slug=tag)
            return qs.filter(tags=tag)

        # Filter by category
        category = self.kwargs.get('category')
        if category:
            category = Category.objects.get(slug=category)
            return qs.filter(category=category)

        return qs


# Add tags to the post
def add_tags(event, tag_string):
    tags = tag_string.split(",")
    event.tags.set([])
    for tag in tags:
        tag_title = tag.strip()
        tag_slug = slugify(tag_title)
        try:
            tag = Tag.objects.get(slug=tag_slug)
        except:
            tag = Tag.objects.create(title=tag_title)

        event.tags.add(tag)

    return event

@permission_classes((IsAuthenticated,))
class EventCreate(CreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def perform_create(self, serializer):
        event = serializer.save()

        # Set category
        try:
            category = str(self.request.data['category'])
        except:
            category = ""
        if category:
            category = Category.objects.get(slug=category)
            event.category = category

        # Set AccessLevel
        try:
            access_level = str(self.request.data['access_level'])
        except:
            access_level = ""
        if access_level:
            access_level = AccessLevel.objects.get(slug=access_level)
            event.access_level = access_level

        # Add tags
        try:
            tag_string = self.request.data['tags']
        except:
            tag_string = ""
        if tag_string:
            event = add_tags(event, tag_string)

        event.save()


class EventRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    lookup_field = 'slug'

    def perform_update(self, serializer):
        event = serializer.save()

        # Set category
        try:
            category = str(self.request.data['category'])
        except:
            category = ""
        if category:
            category = Category.objects.get(slug=category)
            event.category = category

        # Replace tags
        try:
            tags = str(self.request.data['tags'])
        except:
            tags = ""
        if tags:
            event = add_tags(event, tags)

        event.save()
