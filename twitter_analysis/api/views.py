#from types import GenericAlias
from cgitb import lookup
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
import requests
import json

# Create your views here.

class GetUserTweets(APIView):
    def post(self, request, *args, **kwargs):
        code = request.data.get('code')
        url = "https://api.twitter.com/2/users/"+str(code)+"/tweets?max_results=5"
        payload={}
        headers = {
        'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAACbLbAEAAAAARFEcgg5GFIacE2VO%2FYixvNshthA%3DuJs2SELVtnO7WFJJXCn2KxOOYJ7AQL95ihtOuz9HIr6FeOZz0C',
        'Cookie': 'guest_id=v1%3A164925435159756509; guest_id_ads=v1%3A164925435159756509; guest_id_marketing=v1%3A164925435159756509; personalization_id="v1_3ZaYZl09MadsKHjWX5/Zyg=="'
        }

        response = requests.request("GET", url, headers=headers, data=payload)
        responseJson = response.json()
        return Response(responseJson['data'], status=status.HTTP_200_OK)
 
class GetTwitterUser(APIView):
    lookup_url_kwarg = 'code'
    def post(self, request,  *args, **kwargs):
        code = request.data.get(self.lookup_url_kwarg)
        url = "https://api.twitter.com/2/users/by?user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,url,username,verified,public_metrics,withheld&usernames="+code

        payload={}
        headers = {
        'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAACbLbAEAAAAARFEcgg5GFIacE2VO%2FYixvNshthA%3DuJs2SELVtnO7WFJJXCn2KxOOYJ7AQL95ihtOuz9HIr6FeOZz0C',
         'Cookie': 'guest_id=v1%3A164925435159756509; guest_id_ads=v1%3A164925435159756509; guest_id_marketing=v1%3A164925435159756509; personalization_id="v1_3ZaYZl09MadsKHjWX5/Zyg=="'
    }

        response = requests.request("GET", url, headers=headers, data=payload)

        #print(response.text)
        #return Response(response.json(), status=status.HTTP_200_OK)
        responseJson = response.json()
        return Response(responseJson['data'][0], status=status.HTTP_200_OK)

