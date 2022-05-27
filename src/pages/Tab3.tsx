import React, { useState } from 'react';
import {IonContent , IonHeader, IonSearchbar, IonPage, IonTitle, IonToolbar, IonButton} from '@ionic/react';
import './Tab3.css';
import { ActionSheet} from '@capacitor/action-sheet';
import { Browser } from '@capacitor/browser';
import { Toast } from '@capacitor/toast';
import { Device } from '@capacitor/device';
import { Network } from '@capacitor/network';



const Tab3: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='medium'>
          <IonTitle>Funciones</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class="ion-padding" scroll-y="true">
        <p>Busqueda</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>

        <IonToolbar color='warning'>
          <IonTitle>Redes Sociales</IonTitle>
        </IonToolbar>
        <IonButton color='success' onClick={() => link()}>Aram Albor López</IonButton>
        <IonButton color='success' onClick={() => link2()}>Victor Hugo Lucio López</IonButton>
        <br />
        <IonToolbar color='warning'>
          <IonTitle>Utilidades</IonTitle>
        </IonToolbar>
        <IonButton color='success' onClick={() => menu()}>Menu</IonButton>
        <IonButton color='success' onClick={() => cargando()}>Ver si esta cargando</IonButton>
        <br />
        <IonToolbar color='warning'>
          <IonTitle>Redes</IonTitle>
        </IonToolbar>
        <IonButton color='success' onClick={() => conectadoWifi()}>Esta conectado a una Red</IonButton>
        <IonButton color='success' onClick={() => estaconectado()}>Tipo de Conexión</IonButton>
        <br />
      </IonContent>
    </IonPage>
  );

async function conectadoWifi(){
  const status = await Network.getStatus();
  const dd=status.connected;
  await Toast.show({text: 'wifi: '+ dd,});
}


async function estaconectado(){
  const status = await Network.getStatus();
  const dd=status.connectionType;
  await Toast.show({text: 'Tipo de conexión: '+ dd,});
}

async function cargando(){
  const info = await Device.getBatteryInfo();
  const dd=info.isCharging;
  await Toast.show({text: 'Estatus de carga: '+ dd,});
}

  async function link() {
    await Browser.open({ url: 'https://www.facebook.com/aram.albor' });
  }
  async function link2() {
    await Browser.open({ url: 'https://www.facebook.com/victor.lucio.165' });
  }

async function menu(){
    await ActionSheet.showActions({
      title: 'Opciones',
      message: 'Seleccione una opcion',
      options: [
        {
          title: 'Pasarnos con 100',
        },
        {
          title: 'Pasarnos con 99',
        },
        {
          title: 'Panzaso con 70',
        },
      ],
    });
  };
};
export default Tab3;
