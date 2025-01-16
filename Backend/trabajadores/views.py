from django.shortcuts import render
# views.py
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Trabajador
from .serializers import TrabajadorSerializer

class TrabajadorListCreateAPIView(APIView):
    """
    Vista para obtener la lista de trabajadores y crear nuevos trabajadores.
    """
    def get(self, request):
        trabajadores = Trabajador.objects.all()
        serializer = TrabajadorSerializer(trabajadores, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TrabajadorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TrabajadorDetailAPIView(APIView):
    """
    Vista para obtener, actualizar o eliminar un trabajador específico.
    """
    def get(self, request, pk):
        try:
            trabajador = Trabajador.objects.get(pk=pk)
            serializer = TrabajadorSerializer(trabajador)
            return Response(serializer.data)
        except Trabajador.DoesNotExist:
            return Response({'detail': 'Trabajador no encontrado.'}, status=status.HTTP_404_NOT_FOUND)

    def patch(self, request, pk):
        try:
            trabajador = Trabajador.objects.get(pk=pk)
            serializer = TrabajadorSerializer(trabajador, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Trabajador.DoesNotExist:
            return Response({'detail': 'Trabajador no encontrado.'}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        try:
            trabajador = Trabajador.objects.get(pk=pk)
            trabajador.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Trabajador.DoesNotExist:
            return Response({'detail': 'Trabajador no encontrado.'}, status=status.HTTP_404_NOT_FOUND)
