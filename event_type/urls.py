from django.conf.urls import url

from .views import EventTypeList

urlpatterns = [
    # List eventtypes
    url(r'^eventtypes/$', EventTypeList.as_view()),
]
