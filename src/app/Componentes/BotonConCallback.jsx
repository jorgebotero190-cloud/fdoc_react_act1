// Componente: BotonConCallback
// Representar un botón que ejecuta una función al hacer clic.
// Props esperadas:
// - onClick (función): se ejecuta al presionar el botón.
// - texto (string): texto visible en el botón. export default function BotonConCallback({ texto }) {
"use client";

export default function BotonConCallback({ texto }) {
  const manejarClick = () => {
    alert("¡Hiciste clic en el botón!");
  };

  return (
    <button
      onClick={manejarClick}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      {texto}
    </button>
  );
}





