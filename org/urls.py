from django.conf.urls import url

from .views import OrgList

urlpatterns = [
    # List categories
    url(r'^orgs', OrgList.as_view()),
]
