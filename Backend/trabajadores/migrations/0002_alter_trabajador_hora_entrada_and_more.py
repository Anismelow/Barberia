# Generated by Django 5.1.4 on 2025-01-16 17:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trabajadores', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trabajador',
            name='hora_entrada',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='trabajador',
            name='hora_salida',
            field=models.TimeField(blank=True, null=True),
        ),
    ]
