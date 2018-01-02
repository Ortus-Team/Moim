from django.contrib import admin

from .models import Event

class EventAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',), }
    search_fields = ['title','body','location','event_date','access_level']
    list_display = ("title", "body", "event_date", "access_level", "location")

admin.site.register(Event, EventAdmin)
