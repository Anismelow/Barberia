from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Reserva
from .serializers import ReservaSerializer
from twilio.rest import Client
from dotenv import load_dotenv
import os
from django.shortcuts import get_object_or_404


load_dotenv()

# Configuración de Twilio
TWILIO_ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID")
TWILIO_AUTH_TOKEN = os.getenv("TWILIO_AUTH_TOKEN")
TWILIO_PHONE_NUMBER = os.getenv("TWILIO_PHONE_NUMBER")

class ReservaAPIView(APIView):
    def post(self, request):
        serializer = ReservaSerializer(data=request.data)
        if serializer.is_valid():
            # Guardar la nueva reserva
            reserva = serializer.save()

            # Enviar SMS de confirmación
            self.enviar_sms_reserva(reserva)
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def enviar_sms_reserva(self, reserva):
        # Configura el cliente de Twilio
        client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
        
        # Crear el mensaje
        mensaje = f"Hola {reserva.nombre}, tu reserva #{reserva.numero_reserva} para {reserva.servicio} está confirmada el {reserva.fecha} a las {reserva.hora}. ¡Gracias por elegirnos!"
        
        # Enviar mensaje al número de teléfono del cliente
        client.messages.create(
            body=mensaje,
            from_=TWILIO_PHONE_NUMBER,
            to=reserva.telefono  # Asegúrate de que el número tenga el formato adecuado (+52 para México, por ejemplo)
        )

    def get(self, request):
        reservas = Reserva.objects.all()
        serializer = ReservaSerializer(reservas, many=True)
        return Response(serializer.data)
    
    def delete(self, request, numero_reserva):
        try:
        # Buscar la reserva por número de reserva
            reserva = Reserva.objects.get(numero_reserva=numero_reserva)
            print(numero_reserva)
            reserva.delete()  # Eliminar la reserva
            return Response({"detail": "Reserva eliminada con éxito."}, status=status.HTTP_204_NO_CONTENT)
        except Reserva.DoesNotExist:
        # Si la reserva no existe, devolver un error 404
            return Response(
            {"detail": "Reserva no encontrada."},
            status=status.HTTP_404_NOT_FOUND
            )


    def patch(self, request, numero_reserva):
     try:
        print(f"Recibido numero_reserva: {numero_reserva}")
        print(f"Datos recibidos: {request.data}")
        reserva = Reserva.objects.get(numero_reserva=numero_reserva)
        serializer = ReservaSerializer(reserva, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            print("Reserva actualizada correctamente.")
            return Response(serializer.data, status=status.HTTP_200_OK)
        print("Errores de serialización:", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
     except Reserva.DoesNotExist:
        print("Reserva no encontrada.")
        return Response(
            {"detail": "Reserva no encontrada."},
            status=status.HTTP_404_NOT_FOUND)
