from django.contrib import admin
from officer.models import Officer

class OfficerAdmin(admin.ModelAdmin):
    search_fields = ['user','title','year','description']
    list_display = ("user", "title", "year", "description")

admin.site.register(Officer, OfficerAdmin)
