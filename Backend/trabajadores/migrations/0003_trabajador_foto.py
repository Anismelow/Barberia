# Generated by Django 5.1.4 on 2025-01-16 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trabajadores', '0002_alter_trabajador_hora_entrada_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='trabajador',
            name='foto',
            field=models.ImageField(blank=True, null=True, upload_to='trabajadores/'),
        ),
    ]
