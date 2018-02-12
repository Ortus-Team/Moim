from rest_framework.generics import ListAPIView
from django.template.defaultfilters import slugify
from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import permission_classes
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from category.models import Category
from org.serializers import OrgSerializer
from .models import Org


class OrgList(ListAPIView):
    queryset = Org.objects.all()
    serializer_class = OrgSerializer

    def get_queryset(self):
        qs = super(OrgList, self).get_queryset()

        # Filter by categories
        category = self.kwargs.get('category')
        if category:
            category = category.objects.get(slug=category)
            return qs.filter(categories=category)

        return qs


# Add categories to the org
def add_categories(org, org_categories_string):
    categories = org_categories_string.split(",")
    org.categories.set([])
    for category in categories:
        category_title = category.strip()
        category_slug = slugify(category_title)
        try:
            category = Category.objects.get(slug=category_slug)
            org.event_types.add(category)
        except:
            print('category not found')
    return org


@permission_classes((IsAuthenticated,))
class OrgCreate(CreateAPIView):
    queryset = Org.objects.all()
    serializer_class = OrgSerializer

    def perform_create(self, serializer):
        org = serializer.save()

        # Add categories
        try:
            category_string = self.request.data['categories']
        except:
            category_string = ""
        if category_string:
            org = add_categories(org, category_string)

        org.save()

@permission_classes((IsAuthenticated,))
class OrgRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    queryset = Org.objects.all()
    serializer_class = OrgSerializer
    lookup_field = 'name'

    def perform_update(self, serializer):
        org = serializer.save()

        # Replace categories
        try:
            categories = str(self.request.data['categories'])
        except:
            categories = ""
        if categories:
            org = add_categories(org, categories)

        org.save()
