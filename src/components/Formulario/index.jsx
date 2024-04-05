import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome , setNome] = useState('');

    useEffect(() => { //useEffect é utilizado quando acontece uma mudança no estado de algum componente
        console.log("o componente iniciou");

        return () => {
            console.log("o componente finalizou")
        }
    }, []); //se as chaves estiverem vazias significa que ele inicia o componente apenas por não tem um valor especifico 

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if( media >= 7 ){
            return(
                <p>Olá {nome}, Você foi aprovado</p>
            )
        }else {
            return(
                <p>Olá {nome}, Você nâo foi aprovado</p>
            )
        }
    }


    return (
        <form>
            {[1,2,3,4,5].map(item => (
                <li key={item}>{item}</li>
            ))}
            
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;