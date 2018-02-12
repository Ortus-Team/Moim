from django.contrib import admin
from org.models import Org

class OrgAdmin(admin.ModelAdmin):
    search_fields = ['name','description']
    list_display = ("name", "created_date")

admin.site.register(Org, OrgAdmin)
