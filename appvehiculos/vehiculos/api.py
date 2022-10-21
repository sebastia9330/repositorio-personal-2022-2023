from .models import  tipoVehiculo
from .models import modeloVehiculo
from .serializers import  tipoVehiculoSerializer
from .serializers import  modeloVehiculoSerializer
from rest_framework import viewsets, permissions

class VehiculosViewSet(viewsets.ModelViewSet):
    queryset = tipoVehiculo.objects.all()
    permission_classes = (permissions.AllowAny)
    serializer_class = tipoVehiculoSerializer

class ModeloViewSet(viewsets.ModelViewSet):
    queryset = modeloVehiculo.objects.all()
    permission_classes = (permissions.AllowAny)
    serializer_class = modeloVehiculoSerializer
