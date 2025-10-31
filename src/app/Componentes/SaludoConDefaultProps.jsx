// Componente: SaludoConDefaultProps
// Mostrar un saludo con nombre, usando valor por defecto si no se pasa.

// Props esperadas:
// - nombre (string, opcional)
// Componente: SaludoConDefaultProps
 "use client";
 
import React from "react";

const SaludoConDefaultProps = ({ nombre = "Invitado" }) => {
  return <h2>Hola {nombre}!</h2>;
};

export default SaludoConDefaultProps;
