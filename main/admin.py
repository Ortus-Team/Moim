from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User

from main.models import (
    Member
)


# Define an inline admin descriptor for Member model
# which acts a bit like a singleton
class MemberInline(admin.StackedInline):
    model = Member
    can_delete = True
    verbose_name_plural = 'member'

# Define a new User admin
class UserAdmin(BaseUserAdmin):
    inlines = (MemberInline, )
#
# class OrgAdmin(admin.ModelAdmin):
#     model = Org
#     list_display = ("name", "description", "join_date")
#     search_fields = ("name", "description")
#
# class FollowerToOrgAdmin(admin.ModelAdmin):
#     model = FollowerToOrg
#     list_display = ("follower", "org", "following_date")
#     search_fields = ("follower", "org")
#
# class UserToOrgAdmin(admin.ModelAdmin):
#     model = UserToOrg
#     list_display = ("user", "org", "join_date")
#     search_fields = ("user", "org")
#
# class PostToOrgAdmin(admin.ModelAdmin):
#     model = PostToOrg
#     list_display = ("org", "post")
#     search_fields = ("org", "post")
#
# class PostToUserAdmin(admin.ModelAdmin):
#     model = PostToUser
#     list_display = ("post", "user")
#     search_fields = ("post", "user")
#
# class EventAdmin(admin.ModelAdmin):
#     model = Event
#     list_display = ("name", "description", "event_date", "access_level", "location")
#     search_fields = ("name", "description", "location", "access_level")
#
# class PostAdmin(admin.ModelAdmin):
#     model = Post
#     list_display = ("name", "description")
#     search_fields = ("name", "description")
#
# class PhotoToPostAdmin(admin.ModelAdmin):
#     model = PhotoToPost
#     list_display = ("post", "photo")
#     search_fields = ("post", "photo")
# #
# # class EventToPostAdmin(admin.ModelAdmin):
# #     model = EventToPost
# #     list_display = ("event", "post")
# #     search_fields = ("event", "post")
#
# class UserToPostAdmin(admin.ModelAdmin):
#     model = UserToPost
#     list_display = ("user", "post")
#     search_fields = ("user", "post")
#
# class OrgToPostAdmin(admin.ModelAdmin):
#     model = OrgToPost
#     list_display = ("org", "post")
#     search_fields = ("org", "post")
#
# class PhotoToEventAdmin(admin.ModelAdmin):
#     model = PhotoToEvent
#     list_display = ("photo", "event")
#     search_fields = ("photo", "event")
#
# class EventToOrgAdmin(admin.ModelAdmin):
#     model = EventToOrg
#     list_display = ("event", "org")
#     search_fields = ("event", "org")
#
# class OfficerToOrgAdmin(admin.ModelAdmin):
#     model = OfficerToOrg
#     list_display = ("officer", "org")
#     search_fields = ("officer", "org")

# Re-register UserAdmin
admin.site.unregister(User)
admin.site.register(User, UserAdmin)
# # Register all the models
# admin.site.register(Org, OrgAdmin)
# admin.site.register(FollowerToOrg, FollowerToOrgAdmin)
# admin.site.register(UserToOrg, UserToOrgAdmin)
# admin.site.register(PostToOrg, PostToOrgAdmin)
# admin.site.register(PostToUser, PostToUserAdmin)
# admin.site.register(Event, EventAdmin)
# admin.site.register(Post, PostAdmin)
# admin.site.register(PhotoToPost, PhotoToPostAdmin)
# admin.site.register(EventToPost, EventToPostAdmin)
# admin.site.register(UserToPost, UserToPostAdmin)
# admin.site.register(OrgToPost, OrgToPostAdmin)
# admin.site.register(PhotoToEvent, PhotoToEventAdmin)
# admin.site.register(EventToOrg, EventToOrgAdmin)
# admin.site.register(OfficerToOrg, OfficerToOrgAdmin)
