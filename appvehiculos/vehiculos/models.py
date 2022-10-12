from django.db import models

# Create your models here.
class tipoVehiculo(models.Model):
    nombreTipo = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

class modeloVehiculo(models.Model):
    nombreModelo = models.CharField(max_length = 200)
    created_at = models.DateTimeField(auto_now_add=True)

