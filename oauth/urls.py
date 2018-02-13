from django.conf.urls import include, url

from rest_framework import routers

from oauth import viewsets


# Routers define the URL mapping to views
router = routers.DefaultRouter()
# router.register(r'users', UserViewSet)

urlpatterns = [
    url(r'^', include(router.urls, namespace='rest_api')),
    url(r'^fbeventdetail/(?P<event_id>[\w{}.-]+)$', viewsets.get_fbevent_detail),
    url(r'^checkregistered/(?P<pk>[0-9]+)$', viewsets.check_email),
    url(r'^userid/(?P<access_token>[\w{}.-]+)$', viewsets.user_pk),
    url(r'^sendemail$', viewsets.send_email),
]
