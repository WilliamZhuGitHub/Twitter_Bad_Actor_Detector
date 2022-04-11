from django.urls import path
from .views import index
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [

    path('', index),
    path('join', index),
    path('create', index),
    path('about', index),

    path('room/<str:roomCode>', index),
 ]
urlpatterns += staticfiles_urlpatterns()
