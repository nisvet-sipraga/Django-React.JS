# Generated by Django 3.2.8 on 2021-11-27 16:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_alter_customuser_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('categoryId', models.IntegerField(null=True)),
                ('name', models.CharField(max_length=50)),
            ],
        ),
    ]
