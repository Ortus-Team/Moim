from django.conf.urls import url

from .views import EventTypeList

urlpatterns = [
    # List categories
    url(r'^categories/$', EventTypeList.as_view()),
]
