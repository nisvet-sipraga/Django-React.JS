# Generated by Django 3.2.8 on 2021-12-03 12:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0008_alter_category_categoryid'),
    ]

    operations = [
        migrations.RenameField(
            model_name='listmovies',
            old_name='ListMoviesId',
            new_name='categoryId',
        ),
    ]
