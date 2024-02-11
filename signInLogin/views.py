from django.shortcuts import render,HttpResponse,redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required

# Create your views here.
def homePage(request):
    return render(request, 'home.html')

def signin(request):
    error_message = None

    if request.method == 'POST':
        uname = request.POST['username']
        email = request.POST['email']
        pass1 = request.POST['password']
        pass2 = request.POST['confirm-password']

        if pass1 != pass2:
            error_message = "Your password and confirm password is not same"
        
        else:
            if User.objects.filter(username = uname).exists():
                error_message = 'Name has already taken!!'
            
            elif User.objects.filter(email = email).exists():
                error_message = 'Email has already taken!!'
            else:
                myuser = User.objects.create_user(uname,email,pass1)
                myuser.save()
                return redirect('login')
            
    return render(request, 'signIn.html', {'error_message':error_message})

def logIn(request):
    return render(request, 'loginpage.html')


def shopPage(request):
    return render(request, 'Shop.html')

def tournamentPage(request):
    return render(request, 'tournamentpage.html')