// Componente: SaludoBasico
// Propósito: aprender 
// Muestra un saludo personalizado con opción de entusiasmo.

// Props esperadas:
// - nombre (string, requerida): nombre de la persona a saludar.
// - entusiasta (boolean, opcional): si es true, añade énfasis.
//
// Especificaciones:
// - Debe mostrar "Hola, {nombre}".
// - Si entusiasta es true, añadir "!" o un estilo destacado.
// - Casos: con entusiasta y sin entusiasta.

"use client";

export default function SaludoBasico({ nombre, entusiasta }) {
  return (
    <h2>
      Mi nombre es : {nombre}
      {entusiasta ? "!" : ""}
    </h2>
  );
}
