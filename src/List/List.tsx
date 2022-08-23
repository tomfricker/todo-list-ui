import { FC } from 'react';
import IToDo from '../Interfaces/IToDo';

interface IListProps {
    title: string;
    todos: Array<IToDo>;
}

const List: FC<IListProps> = (props: IListProps) => {
    return (
        <div>
            <h1>{props.title}</h1>
                <ul>
                {props.todos.map(todo => (
                <li key={todo.id}>
                    {todo.description}
                </li>
                ))}
            </ul>
        </div>
    );
}

export default List;
