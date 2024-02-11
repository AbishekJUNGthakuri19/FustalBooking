from django.urls import path
from . import views

urlpatterns = [
     path('',views.homePage,name='home'),
     path('signin',views.signin,name='signin'),
     path('login',views.logIn,name='login'),
     path('tournamentpage',views.tournamentPage,name='tournamentpage'),
     path('shop',views.shopPage,name='shop'),
]