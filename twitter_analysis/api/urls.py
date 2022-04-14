from django.urls import path
#from twitter_analysis.api.models import Room
from .views import  GetTwitterUser, GetUserTweets, getSentimentAnalysis

urlpatterns = [
    path('get-twitter-user', GetTwitterUser.as_view()),
    path('get-user-tweets', GetUserTweets.as_view()),
    path('get-sentiment', getSentimentAnalysis.as_view())
]
