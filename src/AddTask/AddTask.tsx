import { FC } from 'react';

interface IAddTaskProps {
    addTask: () => void;
}

const AddTask: FC<IAddTaskProps> = (props: IAddTaskProps) => {
    return (
        <div>
            <h3>Add Task</h3>
            <input id="add-task-description" type="text" />
            <br />
            <button onClick={props.addTask}>Add</button>
        </div>
    );
}

export default AddTask;
