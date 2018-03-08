from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from rest_framework import generics
from rest_framework.parsers import JSONParser
from rest_framework.renderers import  JSONRenderer

from main.models import *
from org.models import *

from django.core.mail import send_mail, EmailMultiAlternatives
import requests

@csrf_exempt
def send_email_to_users(request):
	data = JSONParser().parse(request) # check for form data
	if data.email is None:
		return HttpResponse(status=400) # better http number?

	email_list = data.email
	send_mail("Welcome to Moim", "body here", "Moim <moim@example.com>", email_list)
	return HttpResponse(status=201)

# {
#   org: "org name",
#	candidate_email: "candidate email"
#}
@csrf_exempt
def send_email_invite_for_officer(request):
	data = JSONParser().parse(request)
	if data.org is None:
		return HttpResponse(status=400)

	org = Org.objects.get(name=data.org)
	officers = Org.officers
	officer_email_list = []
	for officer in officers:
		officer_email_list.append(officer.user.email)

	candidate_email = data.candidate_email

	codeOne = send_email_to_officer(officer_email_list)
	codeTwo = send_email_to_new_officer(candidate_email)
	
	if codeOne == 0 or codeTwo == 0:
		return HttpResponse(status=400)

	return HttpResponse(status=201)


@csrf_exempt
def send_email_to_officer(email_list):
	send_mail("Welcome to Moim", "body here", "Moim <moim@example.com>", email_list)

@csrf_exempt
def send_email_to_new_officer(email):
	send_mail("Welcome to Moim", "body here", "Moim <moim@example.com>", email)


