from django.urls import path
from .views import ReservaAPIView

urlpatterns = [
    path('reservas/', ReservaAPIView.as_view(), name='reservas'),
]
