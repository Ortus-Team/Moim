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
    access_level = models.CharField(max_length=10)  # 0: open 1: member only 2: officer only
    location = models.CharField(max_length=200)
    body = models.TextField(default="", null=True, blank=True)
    category = models.ForeignKey('category.Category',
                                 related_name="categories",
                                 blank=True, null=True)
    tags = models.ManyToManyField('tag.Tag',
                                  related_name="tags",
                                  blank=True)
    publisher = models.ForeignKey(settings.AUTH_USER_MODEL,
                                  on_delete=models.CASCADE, related_name="publisher", null=True)

    # org = models.ManyToManyField('org.Org',
    #                              related_name="orgs")

    def __str__(self):
        return self.title

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
