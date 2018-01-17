from django.contrib import admin
from org.models import Org

class OrgAdmin(admin.ModelAdmin):
    search_fields = ['name','description', 'category', 'tags']
    list_display = ("name", "created_date", "category")

admin.site.register(Org, OrgAdmin)
