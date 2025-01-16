from django.db import models
import random

class Reserva(models.Model):
    SERVICIOS = [
        ('corte', 'Corte'),
        ('barba', 'Barba'),
        ('corte_barba', 'Corte y Barba'),
        ('ninos', 'Corte para Niños'),
        ('tratamiento', 'Tratamiento Facial'),
        ('manicure', 'Manicure'),
        ('pedicure', 'Pedicure'),
    ]
    
    ESTADO_CITA = [
        ('realizada', 'Realizada'),
        ('cancelada', 'Cancelada'),
        ('pendiente', 'Pendiente'),
    ]

    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    email = models.EmailField()
    telefono = models.CharField(max_length=15)
    fecha = models.DateField()
    hora = models.TimeField()
    servicio = models.CharField(max_length=20, choices=SERVICIOS)
    numero_reserva = models.PositiveIntegerField(unique=True, blank=True, null=True)
    estado = models.CharField(max_length=15, choices=ESTADO_CITA, default='pendiente')
    
    
    

    def save(self, *args, **kwargs):
        if not self.numero_reserva:
            self.numero_reserva = self.generate_unique_reservation_number()
        super().save(*args, **kwargs)

    def generate_unique_reservation_number(self):
        while True:
            numero = random.randint(1000, 9999)
            if not Reserva.objects.filter(numero_reserva=numero).exists():
                return numero

    def __str__(self):
        return f"{self.nombre} {self.apellido} - {self.servicio} en {self.fecha} {self.hora}"
