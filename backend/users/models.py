from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models.base import Model


class CustomUser(AbstractUser):
    email = models.EmailField(unique=True,  max_length=50)
    category_user = models.CharField(max_length=50, default="NE")

    def __str__(self):
        return self.email


class Cat(models.Model):
    categoryId = models.IntegerField(null=True)
    name = models.CharField(max_length=50)


class PodCat(models.Model):
    podCatId = models.IntegerField(null=True)
    name = models.CharField(max_length=50)


class ListMovies(models.Model):
    categoryId = models.IntegerField(null=True)
    name = models.CharField(max_length=50)
    price = models.IntegerField(null=True)
    description = models.CharField(max_length=300)


class Category(models.Model):
    categoryId = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)


class Token_RefreshToken(models.Model):
    token = models.CharField(max_length=300)
    refreshToken = models.CharField(max_length=300)
    adminToken = models.CharField(max_length=300)
