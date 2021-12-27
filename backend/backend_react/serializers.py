from datetime import datetime
from rest_framework.serializers import ModelSerializer, SerializerMethodField
from .models import CustomUser, ListMovies, Cat, Category
from rest_framework import serializers
from django.contrib.auth import tokens


class UserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('email', 'last_login', 'date_joined',
                  'is_staff')


class AddMovies(serializers.ModelSerializer):
    class Meta:
        model = ListMovies
        fields = ('categoryId', 'name', 'price', 'description')


class AddCategory(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('categoryId', 'name')


class LoginSerializers(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ("email", "password",)


class RegisterSerializers(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ("email", "username", "password", )
