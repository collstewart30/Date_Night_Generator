from django.urls import path
from . import views


urlpatterns = [
    path('', views.yelp_items_search)
]