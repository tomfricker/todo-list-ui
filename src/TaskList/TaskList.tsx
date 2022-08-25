import { FC, MouseEvent } from 'react';
import IToDo from '../Interfaces/IToDo';

interface IListProps {
    title: string;
    todos: Array<IToDo>;
    updateTaskStatus: (e: MouseEvent<HTMLElement>) => void;
}

const List: FC<IListProps> = (props: IListProps) => {
    return (
        <div>
            <h1>{props.title}</h1>
                {props.todos.map(todo => (
                <div key={todo.id}>
                    {todo.description} <button id={todo.id} onClick={props.updateTaskStatus}>Change status</button>
                </div>
                ))}
        </div>
    );
}

export default List;
