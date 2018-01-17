from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from rest_framework import generics
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer

from oauth2_provider.models import AccessToken

from api.permissions import IsAuthenticatedOrCreate
from api.serializers import *
from main.models import *

from django.core.mail import send_mail, EmailMultiAlternatives

@csrf_exempt
def user_pk(request, access_token):
    try:
        user_id = AccessToken.objects.get(token=access_token).user.pk
        return JsonResponse({"user_id":user_id}, status=201)
    except AccessToken.DoesNotExist:
        print("Token Does Not exists, Exception caught")
        return HttpResponse(status=404)

@csrf_exempt
def send_email(request):
    send_mail("It works!", "This will get sent through Mailgun",
              "Anymail Sender <moim@example.com>", ["joshualim.1@gmail.com"])
    return HttpResponse(status=201)

@csrf_exempt
def member_list(request):
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def org_list(request):
    if request.method == 'GET':
        orgs = Org.objects.all()
        serializer = OrgSerializer(orgs, many=True)
        return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def member_detail(request, pk):
    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = UserSerializer(user)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = UserSerializer(user, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        user.delete()
        return HttpResponse(status=204)


@csrf_exempt
def event_detail(request, pk):
    try:
        event = Event.objects.get(pk=pk)
    except Event.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = EventSerializer(event)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = EventSerializer(event, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=404)


@csrf_exempt
def org_detail(request, pk):
    try:
        org = Org.objects.get(pk=pk)
    except Org.DoesNotExist:
        return HttpResponse(status=404)
    if request.method == 'GET':
        serializer = OrgSerializer(org)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = OrgSerializer(org, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=404)


@csrf_exempt
def post_detail(request, pk):
    try:
        post = Post.objects.get(pk=pk)
    except Post.DoesNotExist:
        return HttpResponse(status=404)
    if request.method == 'GET':
        serializer = PostSerializer(post)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = PostSerializer(post, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=404)


@csrf_exempt
def photo_detail(request, pk):
    try:
        photo = Photo.objects.get(pk=pk)
    except Photo.DoesNotExist:
        return HttpResponse(status=404)
    if request.method == 'GET':
        serializer = PhotoSerializer(photo)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = PhotoSerializer(photo, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=404)


@csrf_exempt
def follower_org_list(request, pk):
    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return HttpResponse(status=404)
    if request.method == 'GET':
        org_list = FollowerToOrg.objects.filter(follower__exact=user)
        serializer = OrgSerializer(org_list, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = FollowerToOrgSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=404)


@csrf_exempt
def user_org_list(request, pk):
    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return HttpResponse(status=404)
    if request.method == 'GET':
        org_list = UserToOrg.objects.filter(user__exact=user)
        serializer = OrgSerializer(org_list, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = UserToOrgSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=404)


@csrf_exempt
def post_org_list(request, pk):
    try:
        org = Org.objects.get(pk=pk)
    except Org.DoesNotExist:
        return HttpResponse(status=404)
    if request.method == 'GET':
        post_list = PostToOrg.objects.filter(org__exact=org)
        serializer = PostSerializer(post_list, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = PostToOrgSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=404)


@csrf_exempt
def photo_org_list(request, pk):
    try:
        org = Org.objects.get(pk=pk)
    except Org.DoesNotExist:
        return HttpResponse(status=404)
    if request.method == 'GET':
        photo_list = PhotoToOrg.objects.filter(org__exact=org)
        serializer = PhotoSerializer(photo_list, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = PhotoToOrgSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=404)


@csrf_exempt
def post_user_list(request, pk):
    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return HttpResponse(status=404)
    if request.method == 'GET':
        post_list = PostToUser.objects.filter(user__exact=user)
        serializer = PostSerializer(post_list, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = PostToUserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=404)


@csrf_exempt
def photo_user_list(request, pk):
    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return HttpResponse(status=404)
    if request.method == 'GET':
        photo_list = PhotoToUser.objects.filter(user__exact=user)
        serializer = PhotoSerializer(photo_list, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = PhotoToUserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=404)


@csrf_exempt
def photo_post_list(request, pk):
    try:
        post = Post.objects.get(pk=pk)
    except Post.DoesNotExist:
        return HttpResponse(status=404)
    if request.method == 'GET':
        photo_list = PhotoToPost.objects.filter(post__exact=post)
        serializer = PhotoSerializer(photo_list, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = PhotoToPostSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=404)


@csrf_exempt
def event_post_list(request, pk):
    try:
        event = Event.objects.get(pk=pk)
    except Event.DoesNotExist:
        return HttpResponse(status=404)
    if request.method == 'GET':
        post_list = EventToPost.objects.filter(event__exact=event)
        serializer = PostSerializer(post_list, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = EventToPostSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=404)


@csrf_exempt
def user_post_list(request, pk):
    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return HttpResponse(status=404)
    if request.method == 'GET':
        post_list = UserToPost.objects.filter(user__exact=user)
        serializer = PostSerializer(post_list, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = UserToPostSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=404)


@csrf_exempt
def org_post_list(request, pk):
    try:
        org = Org.objects.get(pk=pk)
    except Org.DoesNotExist:
        return HttpResponse(status=404)
    if request.method == 'GET':
        post_list = OrgToPost.objects.filter(org__exact=org)
        serializer = PostSerializer(post_list, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = OrgToPostSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=404)


@csrf_exempt
def photo_event_list(request, pk):
    try:
        event = Event.objects.get(pk=pk)
    except Event.DoesNotExist:
        return HttpResponse(status=404)
    if request.method == 'GET':
        photo_list = PhotoToEvent.objects.filter(event__exact=event)
        serializer = PhotoSerializer(photo_list, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = PhotoToEventSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=404)


@csrf_exempt
def event_org_list(request, pk):
    try:
        org = Org.objects.get(pk=pk)
    except Org.DoesNotExist:
        return HttpResponse(status=404)
    if request.method == 'GET':
        event_list = EventToOrg.objects.filter(org__exact=org)
        serializer = EventSerializer(event_list, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = EventToOrgSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=404)


@csrf_exempt
def officer_org_list(request, pk):
    try:
        org = Org.objects.get(pk=pk)
    except Org.DoesNotExist:
        return HttpResponse(status=404)
    if request.method == 'GET':
        officer_list = OfficerToOrg.objects.filter(org__exact=org)
        serializer = UserSerializer(officer_list, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = OfficerToOrgSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=404)


class SignUp(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = SignUpSerializer
    permission_classes = (IsAuthenticatedOrCreate,)
