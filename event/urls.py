from django.conf.urls import url

from .views import EventList, EventCreate, EventRetrieveUpdateDestroy

urlpatterns = [
    # List events
    url(r'^events/$', EventList.as_view(), name='event_list'),
    # List events filtered by tag or event_type
    url(r'^events/tag/(?P<tag>[^\.]+)/$', EventList.as_view()),
    url(r'^event-type/(?P<event_type>[^\.]+)/$', EventList.as_view()),

    # Create event
    url(r'^events/new$', EventCreate.as_view(), name='event_create'),

    # Retreive/Update/Delete Event
    url(r'events/(?P<slug>[^\.]+)/$',
        EventRetrieveUpdateDestroy.as_view(),
        name='event_detail'),
]
