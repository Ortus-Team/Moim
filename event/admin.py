from django.contrib import admin

from .models import Event, AccessLevel


class EventAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',), }
    search_fields = ['title','body', 'org', 'location','event_date','access_level']
    list_display = ("title", "body", "org", "event_date", "access_level", "location")

class AccessLevelAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',), }
    search_fields = ['title']
    list_display = ['title', 'description']
admin.site.register(Event, EventAdmin)
admin.site.register(AccessLevel, AccessLevelAdmin)
