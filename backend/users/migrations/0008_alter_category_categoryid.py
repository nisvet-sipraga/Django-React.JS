# Generated by Django 3.2.8 on 2021-12-03 12:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0007_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='categoryId',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]