from django.conf.urls import include, url

from rest_framework import routers

from api import viewsets


# Routers define the URL mapping to views
router = routers.DefaultRouter()
# router.register(r'users', UserViewSet)

urlpatterns = [
    url(r'^', include(router.urls, namespace='rest_api')),
    url(r'^members$', viewsets.member_list),
    url(r'^members/(?P<pk>[0-9]+)$', viewsets.member_detail),
    url(r'^events/(?P<pk>[0-9]+)$', viewsets.event_detail),
    url(r'^orgs/(?P<pk>[0-9]+)$', viewsets.org_detail),
    url(r'^posts/(?P<pk>[0-9]+)$', viewsets.post_detail),
    url(r'^photos/(?P<pk>[0-9]+)$', viewsets.photo_detail),
    url(r'^followerorg/(?P<pk>[0-9]+)$', viewsets.follower_org_list),
    url(r'^userorg/(?P<pk>[0-9]+)$', viewsets.user_org_list),
    url(r'^postorg/(?P<pk>[0-9]+)$', viewsets.post_org_list),
    url(r'^photoorg/(?P<pk>[0-9]+)$', viewsets.photo_org_list),
    url(r'^postuser/(?P<pk>[0-9]+)$', viewsets.post_user_list),
    url(r'^photouser/(?P<pk>[0-9]+)$', viewsets.photo_user_list),
    url(r'^photopost/(?P<pk>[0-9]+)$', viewsets.photo_post_list),
    url(r'^eventpost/(?P<pk>[0-9]+)$', viewsets.event_post_list),
    url(r'^userpost/(?P<pk>[0-9]+)$', viewsets.user_post_list),
    url(r'^orgpost/(?P<pk>[0-9]+)$', viewsets.org_post_list),
    url(r'^photoevent/(?P<pk>[0-9]+)$', viewsets.photo_event_list),
    url(r'^eventorg/(?P<pk>[0-9]+)$', viewsets.event_org_list),
    url(r'^officerorg/(?P<pk>[0-9]+)$', viewsets.officer_org_list),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
