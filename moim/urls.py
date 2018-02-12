from django.conf.urls import url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import include
from django.views.generic import TemplateView
from rest_framework.authtoken import views

import django_js_reverse.views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^jsreverse/$', django_js_reverse.views.urls_js, name='js_reverse'),
    url(r'^auth/', include('rest_framework_social_oauth2.urls')),
    url(r'^api/v1/auth/', views.obtain_auth_token),

    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api/v1/', include('event.urls', namespace='events')),
    url(r'^api/v1/', include('category.urls', namespace='categories')),
    url(r'^api/v1/', include('tag.urls', namespace='tags')),
    url(r'^api/v1/', include('event_type.urls', namespace='event_types')),
    url(r'^api/v1/', include('org.urls', namespace='orgs')),
    url(r'^$', TemplateView.as_view(template_name='exampleapp/itworks.html'), name='home'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
