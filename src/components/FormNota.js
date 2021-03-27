import { useRef } from "react";
import "./FormNota.css";

function FormNota(props) {

  const inputTitulo = useRef()
  const textareaTexto = useRef()

  function criarNota(event){
    //event impede a pagina recarregar
    event.preventDefault()

    const novoTitulo = inputTitulo.current.value
    const novoTexto = textareaTexto.current.value

    const novaNota ={
        titulo:novoTitulo,
        texto:novoTexto
    }

    props.aoAdicionarNota(novaNota)
    /** inputTitulo.current.value =''     limpa o campo inputTitulo  */
    inputTitulo.current.value =''
    textareaTexto.current.value =''
    /** inputTitulo.current.focus()        coloca o foco no titulo */    
    inputTitulo.current.focus()
    
    
  }


  return (
    <form>
      <input ref = {inputTitulo} type="text" className="titulo" placeholder="Titulo" />
      <textarea rows ="5" ref = {textareaTexto} className="texto" placeholder="Escreva sua mensagem"></textarea>
      <button onClick={criarNota} className="botao-criar">
        Criar Nota
      </button>
    </form>
  );
}

export default FormNota;
