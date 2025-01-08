# Barbería - Sistema de Reservas

Este proyecto es una aplicación web para la gestión de reservas en una barbería. Desarrollado con React en el frontend y Django en el backend, permite a los clientes agendar citas, recibir confirmaciones por SMS y eliminar reservas. El dueño de la barbería puede gestionar trabajadores, ver las citas y marcar los servicios como realizados.

## Características

- Reserva de citas para diferentes servicios.
- Confirmación por SMS con Twilio.
- Eliminación de reservas.
- Gestión de trabajadores por parte del dueño de la barbería.
- Marcar citas como realizadas.

## Tecnologías

- **Frontend**: React
- **Backend**: Django y Django Rest Framework
- **Base de datos**: SQLite (predeterminado en Django)
- **SMS**: Twilio

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git

BACKEND (Django)

cd Backend
pip install -r requirements.txt

python manage.py migrate
python manage.py runserver


FRONTEND (React)

cd frontend
npm install

npm run dev 