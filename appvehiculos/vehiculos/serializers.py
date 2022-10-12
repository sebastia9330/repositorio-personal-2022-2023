from .models import  tipoVehiculo
from .models import modeloVehiculo
from rest_framework import serializer

class tipoVehiculoSerializer(serializer.ModelSerializer):
    class Meta:
        model = tipoVehiculo
        fields = ('id', 'nombreTipo', 'created_at')
        read_only_fields = ('created_at', )

class modeloVehiculo(serializer.ModelSerializer):
    class Meta:
        model = modeloVehiculo
        fields = ('id', 'nombreModelo', 'created_at')
        read_only_fields = ('created_at', )
