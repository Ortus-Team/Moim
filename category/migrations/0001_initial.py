# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-01-02 21:26
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=64)),
                ('slug', models.SlugField(default='', max_length=64)),
                ('description', models.TextField(blank=True, max_length=512)),
            ],
            options={
                'verbose_name_plural': 'categories',
            },
        ),
    ]