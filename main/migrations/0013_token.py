# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-02-14 04:13
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0012_merge_20180213_0405'),
    ]

    operations = [
        migrations.CreateModel(
            name='Token',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('access_token', models.CharField(max_length=6000)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.Member')),
            ],
        ),
    ]
