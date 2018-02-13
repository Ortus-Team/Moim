from django.db import models
from django.db.models import permalink
from django.template.defaultfilters import slugify
from django.conf import settings
import datetime


class Officer(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL)
    title = models.CharField(max_length=64)
    year = models.IntegerField()
    slug = models.SlugField(max_length=64, default="")
    description = models.TextField(max_length=512, blank=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.id:
            self.slug = slugify(self.title)
            self.year = datetime.datetime.now().year
        super(Officer, self).save(*args, **kwargs)

    @permalink
    def get_absolute_url(self):
        return ('view_officer', None, {'slug': self.slug})
