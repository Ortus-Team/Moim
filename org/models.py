from django.db import models
from django.conf import settings


# Create your models here.
class Org(models.Model):
    name = models.CharField(max_length=50)
    created_date = models.DateTimeField(auto_now_add=True, null=True)
    description = models.CharField(max_length=60000)
    category = models.ForeignKey('category.Category',
                                 blank=True, null=True)
    tags = models.ManyToManyField('tag.Tag',
                                  blank=True)
    members = models.ManyToManyField(settings.AUTH_USER_MODEL)
    # TODO: Need to create officer model & officer hierarchy
