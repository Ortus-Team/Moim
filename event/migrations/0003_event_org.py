# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-01-10 08:34
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('org', '0001_initial'),
        ('event', '0002_auto_20180102_2143'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='org',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='org', to='org.Org'),
        ),
    ]