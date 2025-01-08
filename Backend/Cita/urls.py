from django.urls import path
from .views import ReservaAPIView

urlpatterns = [
    path('reservas/', ReservaAPIView.as_view(), name='reservas'),
    path("reservas/<int:numero_reserva>/", ReservaAPIView.as_view(), name="eliminar_reserva"),

]
