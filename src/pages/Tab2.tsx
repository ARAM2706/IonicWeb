import { IonToast,useIonAlert ,IonButton,IonContent,IonInput, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, IonImg,} from '@ionic/react';
import React, { useState } from 'react';
import { Share } from '@capacitor/share';
import './Tab2.css';
import { mailUnreadSharp } from 'ionicons/icons';


const Tab2: React.FC = () => {
  const [showToast1, setShowToast1] = useState(false);
  const [present] = useIonAlert();
  const [text, setText] = useState<string>();
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar color='medium'>
        <IonTitle>Enviar un correo</IonTitle>
        <IonButton 
          color='dark'
          expand="block"
          onClick={() =>
            present({
              cssClass: 'my-custom-class',
              header: 'Bienvenido',
              message: 'A continuación puede escribir un correo para enviarlo desde la AppIonic',
              buttons: [
                'Cancelar',
                { text: 'Aceptar', handler: (d) => setShowToast1(true) },
              ]
            })
          }
        >
          <IonToast
        isOpen={showToast1}
        onDidDismiss={() => setShowToast1(false)}
        message="Continue con su redacción"
        duration={2000}/>
          Información
        </IonButton>
      </IonToolbar>
    </IonHeader>
    <IonContent>
    <IonItem>
            <IonLabel position="floating">Escriba su Correo</IonLabel>
            <IonInput value={text} id="email" onIonInput={(e: any) => setText(e.target.value)}></IonInput>
          </IonItem>
        <IonButton color='danger' onClick={() => share(text)}>Enviar Correo</IonButton>
        <IonImg src={mailUnreadSharp}></IonImg>
    </IonContent>
  </IonPage>
  );
};


async function share(texto: any) {
  await Share.share({
    title: 'Correo enviado desde Ionic',
    text: texto,
    url: 'https://twitter.com/Aram82399383',
    dialogTitle: 'Compartir',
  });
}

export default Tab2;
