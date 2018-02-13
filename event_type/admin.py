from django.contrib import admin

from .models import EventType


class EventTypeAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',), }
    search_fields = ['title']


admin.site.register(EventType, EventTypeAdmin)
