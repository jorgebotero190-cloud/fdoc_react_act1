

// Componente: PerfilConObjeto
// Mostrar información de un usuario con nombre y lista de hobbies.
// Props esperadas:
// - usuario (objeto con):
//     - nombre (string)

export default function PerfilConObjeto() {
  const usuario = {
    nombre: "Jorge Humberto",
    hobbies: ["Leer", "Programar", "Correr"]
  };
  let hobbiesTexto = "Sin hobbies";
  if (usuario.hobbies && usuario.hobbies.length > 0) {
    hobbiesTexto = usuario.hobbies.join(", ");
  }
  return (
    <div>
      <h3>{usuario.nombre}</h3>
      <p>Hobbies: {hobbiesTexto}</p>
    </div>
  );
}
