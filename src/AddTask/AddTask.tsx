import { FC } from 'react';

interface IAddTaskProps {
    addTask: () => void;
}

const AddTask: FC<IAddTaskProps> = (props: IAddTaskProps) => {
    return (
        <div>
            <input id="add-task-description" type="text" />
            <br />
            <button onClick={props.addTask}>Add Task</button>
        </div>
    );
}

export default AddTask;
