from django.conf.urls import url

from tag.views import TagListCreate, TagRetrieveUpdateDestroy

urlpatterns = [
    # Create or remove tag
    url(r'^tags/$', TagListCreate.as_view(), name='tag_list'),
    url(r'tag/(?P<slug>[^\.]+)/$', TagRetrieveUpdateDestroy.as_view(), name='tag_detail')
]
