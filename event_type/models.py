from django.db import models
from django.db.models import permalink
from django.template.defaultfilters import slugify


class EventType(models.Model):
    title = models.CharField(max_length=64, unique=True)
    slug = models.SlugField(max_length=64, default="")
    description = models.TextField(max_length=512, blank=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.id:
            self.slug = slugify(self.title)
        super(EventType, self).save(*args, **kwargs)

    @permalink
    def get_absolute_url(self):
        return ('view_event_type', None, {'slug': self.slug})

    class Meta:
        verbose_name_plural = "event_types"
