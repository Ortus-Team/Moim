from django.conf.urls import url

from .views import EventList, EventCreate, EventRetrieveUpdateDestroy

urlpatterns = [
    # List events
    url(r'^events/$', EventList.as_view(), name='post_list'),
    # List events filtered by tag or category
    url(r'^events/tag/(?P<tag>[^\.]+)/$', EventList.as_view()),
    url(r'^category/(?P<category>[^\.]+)/$', EventList.as_view()),

    # Create event
    url(r'^events/new$', EventCreate.as_view(), name='post_create'),

    # Retreive/Update/Delete Event
    url(r'event/(?P<slug>[^\.]+)/$',
        EventRetrieveUpdateDestroy.as_view(),
        name='post_detail'),
]
