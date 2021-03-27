import ListaNotas from "./components/ListaNotas";
import FormNota from "./components/FormNota";
import "./App.css";
import { useState } from "react";

function App() {

  
  /*  const[minhasNotas,setMinhasNotas]= useState([]) esta 
  criando uma variavel chamada minhasNotas que começa com um array vazio - usestate([])
  e esta criando uma funcao setMinhaNotas que vai alterar o conteudo dessa minhaNotas   
  */
  const[minhasNotas,setMinhasNotas]= useState([])
    
    function adicionarNota(novaNota){
    /** ...minhasNotas                os 3 pontinhos significa todos os elementos de... minhasNotas
     * const novoArray = [...minhasNotas,novaNota]         esta criando um novoarray cujo os elementos são
     * todos os elementos de minhasNotas + novanota que foi passado para a funcao adicionarNota*/  
    const novoArray = [...minhasNotas,novaNota]

    setMinhasNotas(novoArray)
    console.log(minhasNotas)
      
  }


  return (
    <section className="container">
      <section className="left">
        <FormNota aoAdicionarNota = {adicionarNota} />
      </section>

      <section className="right">
        <ListaNotas notas = {minhasNotas} /> 
      </section>
    </section>
  );
}

export default App;
