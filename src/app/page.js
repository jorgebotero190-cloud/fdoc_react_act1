import Image from "next/image";
import SaludoBasico from "./Componentes/SaludoBasico.jsx";
import SaludoDesestructurado from "./Componentes/SaludoDesestructurado.jsx";
import PerfilConObjeto from "./Componentes/PerfilConObjeto.jsx";
import BotonConCallback from "./Componentes/BotonConCallback.jsx";
import CajaChildren from "./Componentes/CajaChildren.jsx";
import SaludoConDefault from "./Componentes/SaludoConDefaultProps.jsx";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={50}
          priority
        /> 
    <SaludoBasico nombre="Jorge Humberto Botero Sanchez " entusiasta={true} />
    <SaludoDesestructurado nombre="Jorge" edad="34" /> 
    <PerfilConObjeto />
      <BotonConCallback texto={'este el el button'} />
        <CajaChildren/>
        <SaludoConDefault nombre="Jorge Botero" />
          



    </main>
    </div>
  );
}
