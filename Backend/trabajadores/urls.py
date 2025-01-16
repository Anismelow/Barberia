# urls.py
from django.urls import path
from .views import TrabajadorListCreateAPIView, TrabajadorDetailAPIView

urlpatterns = [
    path('trabajadores/', TrabajadorListCreateAPIView.as_view(), name='trabajador_list_create'),
    path('trabajadores/<int:pk>/', TrabajadorDetailAPIView.as_view(), name='trabajador_detail'),
]
