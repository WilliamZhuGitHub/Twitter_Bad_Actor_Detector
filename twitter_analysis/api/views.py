#from types import GenericAlias
from cgitb import lookup
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
import requests
import json
import pandas as pd
import json
from joblib import load
import requests
import cloudpickle
from sklearn.feature_extraction.text import TfidfVectorizer
import keras
from keras.preprocessing import sequence

# Create your views here.

class GetUserTweets(APIView):
    def post(self, request, *args, **kwargs):
        code = request.data.get('code')
        url = "https://api.twitter.com/2/users/"+str(code)+"/tweets?max_results=100"
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

class getSentimentAnalysis(APIView):
    def post(self, request,  *args, **kwargs):
        tweets = request.data.get('code')
        # t = pd.json_normalize(tweets, record_path='data')
        # model = keras.models.load_model(requests.get("https://github.com/WilliamZhuGitHub/Twitter_Bad_Actor_Detector/blob/main/twitter_analysis/twitter_analysis/models/sentiment.keras", allow_redirects=True))
        # token = cloudpickle.load("https://github.com/WilliamZhuGitHub/Twitter_Bad_Actor_Detector/blob/main/twitter_analysis/twitter_analysis/models/token.pk")
        # tally = 0
        # for tweet in t['text']:
        #     temp = sequence.pad_sequences(token.texts_to_sequences(tweet), maxlen=50)
        #     tally += model.predict(temp)
        # #return Response(tally / t.shape[0], status=status.HTTP_200_OK)
        return Response(tweets, status=status.HTTP_200_OK)

