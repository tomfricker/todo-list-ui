import { FC } from 'react';

interface IAddTaskProps {
    addTask: () => void;
}

const AddTask: FC<IAddTaskProps> = (props: IAddTaskProps) => {
    return (
        <div>
            <h2>Add Task</h2>
            <div>Description</div>
            <input id="add-task-description" type="text" />
            <br /><br />
            <button onClick={props.addTask}>Add</button>
        </div>
    );
}

export default AddTask;
