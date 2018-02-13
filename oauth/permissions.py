from rest_framework import permissions


class IsStaffOrTargetUser(permissions.BasePermission):
    def has_permission(self, request, view):
        # allow user to list all users if logged in user is staff
        return view.action == 'retrieve' or request.user.is_staff
 
    def has_object_permission(self, request, view, obj):
        # allow logged in user to view own details, allows staff to view all records
        return request.user.is_staff or obj == request.user

class IsAuthenticatedOrCreate(permissions.IsAuthenticated):
	def has_permission(self, request, view):
		if request.method == 'POST':
			return True
		return super(IsAuthenticatedOrCreate, self).has_permission(request, view)


#curl -X POST -d "grant_type=password&username=<user_name>&password=<password>" http://<client_id>:<client_secret>@localhost:8000/o/token/
