from django.contrib.auth.models import User
from rest_framework.generics import ListAPIView
from django.template.defaultfilters import slugify
from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import permission_classes
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from category.models import Category
from main.models import Member
from officer.models import Officer
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
            print('category %s not found' % category_title)
    return org


def remove_members(org, members_to_remove):
    members = members_to_remove.split(",")
    for member in members:
        email = member.strip()
        try:
            user = User.objects.get(email=email)
            mem = Member.objects.get(user=user)
            org.members.remove(mem)
        except:
            print('member %s not found' % email)
    return org


def add_members(org, members_to_add):
    members = members_to_add.split(",")
    for member in members:
        email = member.strip()
        try:
            user = User.objects.get(email=email)
            mem = Member.objects.get(user=user)
            org.members.add(mem)
        except:
            print('member %s not found' % email)
    return org


def remove_members(org, members_to_remove):
    members = members_to_remove.split(",")
    for member in members:
        email = member.strip()
        try:
            user = User.objects.get(email=email)
            mem = Member.objects.get(user=user)
            org.members.remove(mem)
        except:
            print('member %s not found' % email)
    return org


def remove_officers(org, officers_to_remove):
    officers = officers_to_remove.split(",")
    for officer in officers:
        email = officer.strip()
        try:
            user = User.objects.get(email=email)
            offi = Officer.objects.get(user=user)
            org.members.remove(offi)
        except:
            print('member %s not found' % email)
    return org


def add_officers(org, officers_to_add):
    officers = officers_to_add.split(",")
    for officer in officers:
        email = officer.strip()
        try:
            user = User.objects.get(email=email)
            offi = Officer.objects.get(user=user)
            org.members.add(offi)
        except:
            print('member %s not found' % email)
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

        # Remove member
        try:
            members_to_remove = str(self.request.data['members_to_remove'])
        except:
            members_to_remove = ""
        if members_to_remove:
            org = remove_members(org, members_to_remove)

        # Add member
        try:
            members_to_add = str(self.request.data['members_to_add'])
        except:
            members_to_add = ""
        if members_to_add:
            org = add_members(org, members_to_add)

        # Remove officer
        try:
            officers_to_remove = str(self.request.data['officers_to_remove'])
        except:
            officers_to_remove = ""
        if members_to_remove:
            org = remove_officers(org, officers_to_remove)

        # add officer
        try:
            officers_to_add = str(self.request.data['officers_to_add'])
        except:
            officers_to_add = ""
        if officers_to_add:
            org = add_officers(org, officers_to_add)
        org.save()
