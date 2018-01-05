from django.conf import settings
from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

from rest_framework import viewsets


class Member(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    class_standing = models.CharField(max_length=10)
    join_date = models.DateTimeField(auto_now_add=True)

    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            Member.objects.create(user=instance)

    @receiver(post_save, sender=User)
    def save_user_profile(sender, instance, created, **kwargs):
        instance.member.save()

class Token(models.Model):
    access_token = models.CharField(max_length=6000)
    user = models.ForeignKey('Member')

class Photo(models.Model):
    owner = models.ForeignKey('auth.User', related_name='image')
    image = models.ImageField(upload_to='photos', max_length=254)


class FollowerToOrg(models.Model):
    follower = models.ForeignKey('Member');
    org = models.ForeignKey('Org');
    following_date = models.DateTimeField(auto_now_add=True)


class UserToOrg(models.Model):
    user = models.ForeignKey('Member');
    org = models.ForeignKey('Org');
    join_date = models.DateTimeField(auto_now_add=True)


class Org(models.Model):
    name = models.CharField(max_length=50)
    join_date = models.DateTimeField(auto_now_add=True)
    description = models.CharField(max_length=60000)
    # logo = models.ForeignKey('Photo')
    # cover_photo = models.ForeignKey('Photo')


class PostToOrg(models.Model):
    org = models.ForeignKey('Org')
    post = models.ForeignKey('Post')


class PostToUser(models.Model):
    user = models.ForeignKey('Member')
    post = models.ForeignKey('Post')


class PhotoToOrg(models.Model):
    org = models.ForeignKey('Org')
    photo = models.ForeignKey('Photo')


class PhotoToUser(models.Model):
    user = models.ForeignKey('Member')
    photo = models.ForeignKey('Photo')


class Event(models.Model):
    name = models.CharField(max_length=100)
    event_date = models.DateTimeField()
    access_level = models.CharField(max_length=10)  # 0: open 1: member only 2: officer only
    location = models.CharField(max_length=200)
    description = models.CharField(max_length=60000)


class Post(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=60000)
    created_date = models.DateTimeField(auto_now_add=True)


class PhotoToPost(models.Model):
    post = models.ForeignKey('Post')
    photo = models.ForeignKey('Photo')


class EventToPost(models.Model):
    post = models.ForeignKey('Post')
    event = models.ForeignKey('Event')


class UserToPost(models.Model):
    post = models.ForeignKey('Post')
    user = models.ForeignKey('Member')


class OrgToPost(models.Model):
    post = models.ForeignKey('Post')
    org = models.ForeignKey('Org')


class PhotoToEvent(models.Model):
    photo = models.ForeignKey('Photo')
    event = models.ForeignKey('Event')


# class AUTH_USER_MODELtoEvent(models.Model): //rsvp

class EventToOrg(models.Model):
    event = models.ForeignKey(Event);
    org = models.ForeignKey('Org');
    created_date = models.DateTimeField(auto_now_add=True)


class OfficerToOrg(models.Model):
    officer = models.ForeignKey('Member');
    org = models.ForeignKey('Org');
    join_date = models.DateTimeField(auto_now_add=True)
