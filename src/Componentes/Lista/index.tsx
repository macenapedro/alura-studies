import style from './Lista.module.scss'
import Item from "./Item";
import { ITarefa } from '../../Types/Tarefas';

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void

}

function Lista ({tarefas, selecionaTarefa} : Props ) {
   
    return(
        <aside>
            <h2>
                Estudos do dia
            </h2>
            <ul>
                {tarefas.map(item => (
                    <Item 
                    selecionaTarefa = {selecionaTarefa}
                    key={item.id}
                    {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;