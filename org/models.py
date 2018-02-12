from django.db import models
from django.conf import settings
import datetime
from django.db import models
from django.db.models import permalink


# Create your models here.
class Org(models.Model):
    name = models.CharField(max_length=50, unique=True)
    created_date = models.DateTimeField(auto_now_add=True, null=True)
    description = models.CharField(max_length=60000)
    categories = models.ManyToManyField('category.Category',
                                        related_name="categories",
                                        blank=True)
    members = models.ManyToManyField(settings.AUTH_USER_MODEL)
    officers = models.ManyToManyField('officer.Officer',
                                      related_name="officers")

    def __str__(self):
        return self.name

    def save(self, slug="", *args, **kwargs):
        if not self.id:
            self.pub_date = datetime.datetime.now()

        return super(Org, self).save(*args, **kwargs)

    @permalink
    def get_absolute_url(self):
        self.get_absolute_url()
