from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from rest_framework import generics
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer

from oauth2_provider.models import AccessToken

from oauth.permissions import IsAuthenticatedOrCreate
from oauth.serializers import *
from main.models import *

from django.core.mail import send_mail, EmailMultiAlternatives
import requests

@csrf_exempt
def user_pk(request, access_token):
    try:
        user_id = AccessToken.objects.get(token=access_token).user.pk
        return JsonResponse({"user_id":user_id}, status=201)
    except AccessToken.DoesNotExist:
        print("Token Does Not exists, Exception caught")
        return HttpResponse(status=404)

@csrf_exempt
def get_fbevent_detail(request, event_id):
    return HttpResponse(requests.get("https://graph.facebook.com/v2.11/" + event_id + "?access_token=110760716216901|1Ur5eg8Jb07Oglk0Io4HICV8feA"))

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
def check_email(request, pk):
    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return HttpResponse(status=404)

    if user.email == '':
        return JsonResponse({"registered":False, "userpk":pk}, status=201)
    else:
        return JsonResponse({"registered":True, "userpk":pk}, status=201)

class SignUp(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = SignUpSerializer
    permission_classes = (IsAuthenticatedOrCreate,)
