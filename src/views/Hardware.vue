<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Camera</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-button @click="takePicture">Take Picture</ion-button>
            <div v-if="imageSrc">
                <img :src="imageSrc" alt="Taken picture" />
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Camera, CameraResultType } from '@capacitor/camera';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
const imageSrc = ref<string | undefined>('');
    const imageInfo = ref<any>(null);

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri
  });
  imageInfo.value = image;
  const imageUrl = image.webPath;
  imageSrc.value = imageUrl;
};

</script>