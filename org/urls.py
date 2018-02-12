from django.conf.urls import url

from .views import OrgList, OrgCreate, OrgRetrieveUpdateDestroy

urlpatterns = [
    # List orgs
    url(r'^orgs', OrgList.as_view(), name='org_list'),
    # List orgs filtered by categories
    url(r'^orgs/category/(?P<category>[^\.]+)/$', OrgList.as_view()),
    # Create org
    url(r'^orgs/new$', OrgCreate.as_view(), name='org_create'),
    # Retreive/Update/Delete Org
    url(r'^orgs/(?P<name>[^\.]+)/$',
        OrgRetrieveUpdateDestroy.as_view(), name='org_detail'),
]
