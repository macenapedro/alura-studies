import React, { useState } from "react";
import Formulario from '../Componentes/Formulario';
import Lista from '../Componentes/Lista';
import style from './app.module.scss';
import Cronometro from '../Componentes/Cronometro';
import { ITarefa } from "../Types/Tarefas";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([])
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))};

    function finalizarTarefa() {
      if(selecionado) {
        setSelecionado(undefined)
        setTarefas(tarefasAnteriores => 
          tarefasAnteriores.map(tarefa => {
            if(tarefa.id === selecionado.id){
              return {
                ...tarefa,
                selecionado: false,
                completado: true
              }
            }
            return tarefa;
          }) )
      }
    }
  
  return (
    <div className={style.AppStyle}>
     <Formulario setTarefas={setTarefas}/>
     <Lista 
      tarefas={tarefas}
      selecionaTarefa={selecionaTarefa}
     />
     <Cronometro 
      selecionado={selecionado}
      finalizarTarefa={finalizarTarefa}
     />
    </div>
  );
}



export default App;
