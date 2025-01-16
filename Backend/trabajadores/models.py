from django.db import models

class Trabajador(models.Model):
    ESTADO = [
        ('activo', 'Activo'),
        ('inactivo', 'Inactivo'),
        ('baja_temporal', 'Baja Temporal'),
        ('descanzo', 'Descanzo'),
    ]
    
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    estado = models.CharField(max_length=15, choices=ESTADO, default='inactivo')
    
    hora_entrada = models.TimeField(null=True, blank=True)
    hora_salida = models.TimeField(null=True, blank=True)
    hora_salida_descanzo = models.TimeField(null=True, blank=True)
    hora_entrada_descanzo = models.TimeField(null=True, blank=True)
    
     # Nuevo campo para la foto
    foto = models.ImageField(upload_to='trabajadores/', null=True, blank=True)
    
    
    def __str__(self):
        return f"{self.nombre} {self.apellido} - {self.get_estado_display()}, {self.foto}"
    
    def entrada_trabajo(self,hora_actual):
        """
        Marca al trabajador como activo y registra la hora de entrada al trabajo.
        """
        if self.estado == 'inactivo':
            self.estado = 'activo'
            self.hora_entrada = hora_actual
            self.save()
        else:
            raise ValueError("El trabajador ya está activo.")
        
    def salir_de_trabajo(self, hora_actual):
        """
        Marca al trabajador como baja temporal y registra la hora de salida al trabajo.
        """
        if self.estado == 'activo':
            self.estado = 'baja_temporal'
            self.hora_salida = hora_actual
            self.save()
        else:
            raise ValueError("El trabajador no está activo.")
    
    def tomar_descanso(self, hora_actual):
        """
        Marca al trabajador como en descanso y registra la hora de salida para el descanso.
        """
        if self.estado == 'activo':
            self.estado = 'descanzo'
            self.hora_salida_descanzo = hora_actual
            self.save()
        else:
            raise ValueError("El trabajador no está activo para tomar un descanso.")
    
    def regresar_de_descanso(self, hora_actual):
        """
        Marca al trabajador como activo nuevamente y registra la hora de entrada tras el descanso.
        """
        if self.estado == 'descanzo':
            self.estado = 'activo'
            self.hora_entrada_descanzo = hora_actual
            self.save()
        else:
            raise ValueError("El trabajador no está en descanso para regresar.")
