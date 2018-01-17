# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-01-02 21:26
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('tag', '0001_initial'),
        ('category', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('slug', models.SlugField(default='', max_length=256)),
                ('event_date', models.DateTimeField(blank=True, null=True)),
                ('pub_date', models.DateTimeField(blank=True, null=True)),
                ('access_level', models.CharField(max_length=10)),
                ('location', models.CharField(max_length=200)),
                ('body', models.TextField(blank=True, default='', null=True)),
                ('category', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='categories', to='category.Category')),
                ('tags', models.ManyToManyField(blank=True, related_name='tags', to='tag.Tag')),
            ],
            options={
                'ordering': ('-pub_date',),
            },
        ),
    ]