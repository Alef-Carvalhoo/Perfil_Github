import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";


function App() {
  const [ formularioEstaVisivel, setFormularioEstaVisivel ] = useState(true);
  const [nomeUsuario, setNomeUsuario ] = useState(''); 

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}
      
      {/* {formularioEstaVisivel && ( //a lógica disso é que se esse booleano tem o componente formulário dentro dele, então o formulário só existe se esse booleano for true. ai que fica o segredo desse toggle para o formulário aparecer e sumir
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Toggle form</button> */}
    </>
  )
}

export default App
