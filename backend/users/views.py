from django.contrib.auth.models import User
from django.db.models import expressions
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAdminUser
from rest_framework.serializers import raise_errors_on_nested_writes
from .models import CustomUser, Cat, PodCat, ListMovies, Category, Token_RefreshToken
from .serializers import UserSerializer, AddMovies
from flask import Flask, request, jsonify
from django.http.response import JsonResponse
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import serializers
from django.contrib.auth import login, authenticate, logout, tokens


# LOGIN AND REGISTER API
class UserListView(ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdminUser]


class AdminLogin(APIView):

    serializer_class = serializers.UserSerializer

    def post(self, request):
        print("dosao je u post admin logina")
        serializer = self.serializer_class(data=request.data)
        data = request.data
        email = data.get('email')
        password = data.get('password')
        print(email)
        print(password)
        user = CustomUser.objects.filter(email=email, password=password)
        if user is not None:
            print("usao je u if")

            return Response({'token': "ovo je tekone"})
        else:
            print("nije usao u if")
            return Response({'token': "ovo je tekone sa bed err"},
                            status=status.HTTP_400_BAD_REQUEST)


# API FOR LISTING GENERAL CATEGORIES AND ADD
class CategoryView(APIView):
    serializer_class = serializers.AddCategory

    def get(self, request):
        try:
            category = Category.objects.all()
            a = list(category.values())
            category = Token_RefreshToken.objects.all()
            token = ""
            refresToken = ""
            for i in category:
                print(i)
                token = i.token
                refresToken = i.refreshToken
            data = {
                'categories': a,
                'token': token,
                'refreshToken': refresToken
            }
            print(data)
            return JsonResponse(data)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        data = request.data
        name = data.get('name')
        print("ovo je name i categoryId")
        print(name)

        print(serializer)
        if serializer.is_valid():
            print("usao je u serializer")
            Category = serializer.save()

        message = f'Hello {"uspjesno ste dodali artikal"}'
        return Response({'message': message})


# API FOR LISTING SUBCATEGORY
class PodCategoryView(APIView):
    def get(self, request, cId):
        try:
            category = PodCat.objects.filter(podCatId=cId)
            a = list(category.values())
            data = {
                'categories': a
            }
            print(data)
            return JsonResponse(data)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)


# API FOR LISTING MOVIES
class ListingMoviesView(APIView):
    def get(self, request, mId):
        try:
            category = ListMovies.objects.filter(ListMoviesId=mId)
            a = list(category.values())
            data = {
                'categories': a
            }
            print(data)
            return JsonResponse(data)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)


# API ADD MOVIES
class AddMovesView(APIView):
    serializer_class = serializers.AddMovies

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        data = request.data
        name = data.get('name')
        price = data.get('price')
        category = data.get('categoryId')
        description = data.get('description')
        print("ovo je name,price,categoryId, description")
        print(name)
        print(price)
        print(category)
        print(description)
        print(serializer)
        if serializer.is_valid():
            print("usao je u serializer")
            ListMovies = serializer.save()
        message = f'Hello {"uspjesno ste dodali artikal"}'
        return Response({'message': message})

    def get(self, request):
        try:
            category = Token_RefreshToken.objects.all()
            token = ""
            refresToken = ""
            for i in category:
                print(i)
                token = i.token
                refresToken = i.refreshToken
            category = Cat.objects.all()
            a = list(category.values())
            data = {
                'categories': a,
                'token': token,
                'refreshToken': refresToken
            }
            print(data)
            return JsonResponse(data)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)

# API LOGIN


class TestLogin(APIView):
    serializer_class = serializers.LoginSerializers

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        data = request.data
        email = data.get('email')
        password = data.get('password')
        user = CustomUser.objects.filter(email=email, password=password)
        print("ovo je email i pass")
        print(email, password)
        print("ovo je custom users")
        print(user)
        categoryUser = ""
        a = ""
        for i in user:
            a = i
            categoryUser = i.category_user
        print(a)
        if a != "":
            category = Token_RefreshToken.objects.all()
            token = ""
            refresToken = ""
            for i in category:
                print(i)
                token = i.token
                refresToken = i.refreshToken
                adminToken = i.adminToken
            print(token, refresToken, adminToken)
            if categoryUser == "NE":
                return Response({'token': token, 'refreshToken': refresToken})
            else:
                return Response({'token': token, 'refreshToken': refresToken, 'adminToken': adminToken})

        else:
            print("nije usao u if")
            message = f'Hello {"Your username or password is incorrect"}'
            return Response({'message': message},
                            status=status.HTTP_400_BAD_REQUEST)


# API REGISTER
class Register(APIView):
    serializer_class = serializers.RegisterSerializers

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        print("ovo je iznad request date")
        print(request.data)
        if serializer.is_valid():
            CustomUser = serializer.save()
            category = Token_RefreshToken.objects.all()
            token = ""
            refresToken = ""
            for i in category:
                print(i)
                token = i.token
                refresToken = i.refreshToken
            return Response({'token': token, 'refreshToken': refresToken})

        else:
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST)
