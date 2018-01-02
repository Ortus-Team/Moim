from django.contrib import admin

from .models import Category

class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',), }
    search_fields = ['title']

admin.site.register(Category, CategoryAdmin)
