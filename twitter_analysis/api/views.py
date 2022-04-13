#from types import GenericAlias
from cgitb import lookup
from django.shortcuts import render
from rest_framework import generics, status
from .serializers import RoomSerializer, CreateRoomSerializer
from .models import Room
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






























class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class GetRoom(APIView):
    serializer_class = RoomSerializer
    lookup_url_kwarg = 'code'

    def get(self,request, format=None):
        code = request.GET.get(self.lookup_url_kwarg)
        if code != None:
            room = Room.objects.filter(code = code)
            if len(room) > 0:
                data = RoomSerializer(room[0]).data
                data['is_host'] = self.request.session.session_key == room[0].host
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Room Not Found: Invalid Room Code'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request: Code Parameter not found'}, status=status.HTTP_404_NOT_FOUND)

class JoinRoom(APIView):
    lookup_url_kwarg = 'code'

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        code = request.data.get(self.lookup_url_kwarg)
        if code != None:
            room_result = Room.objects.filter(code=code)
            if len(room_result) > 0:
                room = room_result[0]
                self.request.session['room_code'] = code
                return Response({'message': 'Room Joined!'}, status=status.HTTP_200_OK)

            return Response({'Bad Request': 'Invalid Room Code'}, status=status.HTTP_400_BAD_REQUEST)

        return Response({'Bad Request': 'Invalid post data, did not find a code key'}, status=status.HTTP_400_BAD_REQUEST)


class CreateRoomView(APIView):
    serializer_class = CreateRoomSerializer

    def post(self, request, format = None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            guest_can_pause = serializer.data.get('guest_can_pause')
            votes_to_skip = serializer.data.get('votes_to_skip')
            host = self.request.session.session_key
            queryset = Room.objects.filter(host=host)
            if queryset.exists():
                room = queryset[0]
                room.guest_can_pause = guest_can_pause
                room.votes_to_skip = votes_to_skip
                room.save(update_fields=['guest_can_pause', 'votes_to_skip'])
                self.request.session['room_code'] = room.code

                return Response(RoomSerializer(room).data, status=status.HTTP_200_OK)

            else:
                room = Room(host=host, guest_can_pause = guest_can_pause, votes_to_skip = votes_to_skip)
                room.save()
                self.request.session['room_code'] = room.code

                return Response(RoomSerializer(room).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)



