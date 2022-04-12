from django.urls import path
#from twitter_analysis.api.models import Room
from .views import RoomView, CreateRoomView, GetRoom, JoinRoom, GetTwitterUser, GetUserTweets

urlpatterns = [
    path('room-list', RoomView.as_view()),
    path('create-room', CreateRoomView.as_view()),
    path('get-room', GetRoom.as_view()),
    path('join-room', JoinRoom.as_view()),
    path('get-twitter-user', GetTwitterUser.as_view()),
    path('get-user-tweets', GetUserTweets.as_view())
]
