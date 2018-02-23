from django.conf.urls import url

from common.utils import views

urlpatterns = [
    url(r'^inviteofficer$', views.send_email_to_users),
    url(r'^inviteuser$', views.send_email_invite_for_officer),
]