from django.urls import path
from .views import index
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [

    path('', index),
    path('about', index),
    path('search', index),
    path('user/<str:userName>', index),

  ]
urlpatterns += staticfiles_urlpatterns()
