# Generated by Django 3.2.8 on 2021-12-04 17:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0020_remove_customuser_category_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='category_user',
            field=models.CharField(default='NE', max_length=50),
        ),
    ]