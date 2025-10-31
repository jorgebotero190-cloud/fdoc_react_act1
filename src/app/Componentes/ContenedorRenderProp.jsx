// Componente: ContenedorRenderProp
// Renderizar contenido pasado como prop o mediante una función.
// Props esperadas:
// - contenido (elemento React) o
// - render (función que retorna un elemento React)
// Especificaciones:
// - Usa el patrón Render Prop: permite pasar funciones que deciden qué renderizar.
"use client";
export default function ContenedorRenderProp({ contenido = 'string', render = null }) {
  
  if (typeof render === "function") {
    return <div>{render()}</div>;
  }

  return <div>{conti}</div>;
}

