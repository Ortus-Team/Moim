import uuid
import datetime
from django.template.defaultfilters import slugify
from django.db import models
from django.db.models import permalink
from django.conf import settings


# Unique slug generator for events
def unique_slug(title):
    uniqueid = uuid.uuid1().hex[:5]
    slug = slugify(title) + "-" + str(uniqueid)

    if not Event.objects.filter(slug=slug).exists():
        # Slug generated is unique and doesn't already exist
        return slug
    else:
        # Slug generated already exists - regenerate
        return unique_slug(title)


class Event(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=256, default="")
    event_date = models.DateTimeField(blank=True, null=True)
    pub_date = models.DateTimeField(auto_now_add=True, null=True)
    access_level = models.ForeignKey('AccessLevel',
                                     blank=True, null=True)
    location = models.CharField(max_length=200)
    body = models.TextField(default="", null=True, blank=True)
    event_types = models.ManyToManyField('event_type.EventType',
                                         related_name="event_types",
                                         blank=True)
    tags = models.ManyToManyField('tag.Tag',
                                  related_name="tags",
                                  blank=True)
    publisher = models.ForeignKey(settings.AUTH_USER_MODEL,
                                  on_delete=models.CASCADE, related_name="publisher", null=True)

    org = models.ForeignKey('org.Org',
                            related_name="org",
                            null=True)

    def __str__(self):
        return self.title + " hosted by " + self.org.name

    def save(self, slug="", *args, **kwargs):
        if not self.id:
            self.pub_date = datetime.datetime.now()
            self.slug = unique_slug(self.title)

        return super(Event, self).save(*args, **kwargs)

    @permalink
    def get_absolute_url(self):
        return ('event_detail', None, {'slug': self.slug})

    class Meta:
        ordering = ('-pub_date',)


class AccessLevel(models.Model):
    title = models.CharField(max_length=64)
    slug = models.SlugField(max_length=64, default="")
    description = models.TextField(max_length=512, blank=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(AccessLevel, self).save(*args, **kwargs)

    @permalink
    def get_absolute_url(self):
        return ('view_access_level', None, {'slug': self.slug})
