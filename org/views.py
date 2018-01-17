from rest_framework.generics import ListAPIView

from org.serializers import OrgSerializer
from .models import Org


class OrgList(ListAPIView):
    queryset = Org.objects.all()
    serializer_class = OrgSerializer
