"use client"; // <--- Isso aqui habilita o onClick e o window.open

import React from "react";
import styles from './WhatsAppButton.module.css';



export default function WhatsAppButton() {
  const wppMessage = () => {
    const phoneNumber = "5585991785953";
    const message = "Olá, gostaria de solicitar um aplicativo Android.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button className= {styles.contact} onClick={wppMessage}>
      Solicite já seu app!
    </button>
  );
}