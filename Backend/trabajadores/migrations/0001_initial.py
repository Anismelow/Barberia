# Generated by Django 5.1.4 on 2025-01-16 17:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Trabajador',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('apellido', models.CharField(max_length=100)),
                ('estado', models.CharField(choices=[('activo', 'Activo'), ('inactivo', 'Inactivo'), ('baja_temporal', 'Baja Temporal'), ('descanzo', 'Descanzo')], default='inactivo', max_length=15)),
                ('hora_entrada', models.TimeField()),
                ('hora_salida', models.TimeField()),
                ('hora_salida_descanzo', models.TimeField(blank=True, null=True)),
                ('hora_entrada_descanzo', models.TimeField(blank=True, null=True)),
            ],
        ),
    ]
