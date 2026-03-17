<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Inicio de Sesión</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div style="text-align: center;">
        <h2>Bienvenido</h2>
        <p>Ingresa tus datos para continuar</p>
      </div>

      <ion-item>
        <ion-label position="floating">Correo Electrónico</ion-label>
        <ion-input type="email" placeholder="correo@ejemplo.com"></ion-input>
      </ion-item>

      <ion-item class="ion-margin-top">
        <ion-label position="floating">Contraseña</ion-label>
        <ion-input type="password" placeholder="********"></ion-input>
      </ion-item>

      <ion-button expand="full" shape="round" class="ion-margin-top">
        Ingresar
      </ion-button>

      <ion-button expand="full" shape="round" color="light">
        ¿No tienes cuenta? Regístrate
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, 
  IonContent, IonItem, IonLabel, IonInput, IonButton 
} from '@ionic/vue';
</script>