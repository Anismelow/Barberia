# serializers.py
from rest_framework import serializers
from .models import Trabajador

class TrabajadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trabajador
        fields = [
            'id', 'nombre', 'apellido', 'estado',
            'hora_entrada', 'hora_salida', 'hora_salida_descanzo', 'hora_entrada_descanzo','foto'
        ]
