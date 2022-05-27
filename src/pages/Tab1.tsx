import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonImg, IonThumbnail } from '@ionic/react';
import {calculator,desktopSharp,flask, hammer} from 'ionicons/icons';
import React from 'react';
import './Tab1.css';


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="medium">
          <IonTitle>Instituto Tecnológico Superior del Sur de Guanajuato</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonImg src={desktopSharp} />
            <IonCardTitle>Sistemas Computacionales</IonCardTitle>
            <IonCardSubtitle>Objetivo de la carrera</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
          Formar profesionistas líderes, analíticos, críticos y creativos, con visión estratégica y amplio sentido ético, capaces de diseñar, implementar y administrar infraestructura computacional para aportar soluciones innovadoras en beneficio de la sociedad, en un contexto global, multidisciplinario y sustentable.
      </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonImg src={hammer} />
            <IonCardTitle>Industrial</IonCardTitle>
            <IonCardSubtitle>Objetivo de la carrera</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
          Formar a los egresados de la carrera de Ingeniería Industrial como profesionales emprendedores, analíticos, creativos y proactivos, que mejoren la productividad de empresas de bienes y servicios para establecer y mantener una competitividad integral y comprometidos con la problemática nacional.
      </IonCardContent>
        </IonCard>


        <IonCard>
          <IonCardHeader>
            <IonImg src={calculator} />
            <IonCardTitle>Gestión Empresarial</IonCardTitle>
            <IonCardSubtitle>Objetivo de la carrera</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
          Formar profesionales que contribuyan a la gestión de empresas e innovación de procesos; así como al diseño, implementación y desarrollo de sistemas estratégicos de negocios, optimizando recursos en un entorno global, con ética y responsabilidad social.
      </IonCardContent>
        </IonCard>


        <IonCard>
          <IonCardHeader>
            <IonImg src={flask} />
            <IonCardTitle>Ambiental</IonCardTitle>
            <IonCardSubtitle>Objetivo de la Carrera</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
          Formar profesionistas en Ingeniería Ambiental éticos, analíticos, críticos y creativos con las competencias para identificar, proponer y resolver problemas ambientales de manera multidisciplinaria, asegurando la protección, conservación y mejoramiento del ambiente, bajo un marco legal, buscando el desarrollo sustentable en beneficio de la vida en el planeta.
      </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
