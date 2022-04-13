from django.urls import path
#from twitter_analysis.api.models import Room
from .views import  GetTwitterUser, GetUserTweets

urlpatterns = [
    path('get-twitter-user', GetTwitterUser.as_view()),
    path('get-user-tweets', GetUserTweets.as_view())
]
