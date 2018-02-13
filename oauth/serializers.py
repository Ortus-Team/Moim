from rest_framework import serializers

from main.models import ( User )


# https://docs.djangoproject.com/en/1.11/ref/contrib/auth/  <-- info about django User model
class UserSerializer(serializers.ModelSerializer):
    class_standing = serializers.CharField(source='member.class_standing')
    join_date = serializers.DateTimeField(source='member.join_date')

    class Meta:
        model = User
        # fields = ('id', 'class_standing', 'join_date',)
        fields = ('id', 'username', 'first_name', 'class_standing', 'join_date')


class SignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')
        write_only_fields = ('password',)