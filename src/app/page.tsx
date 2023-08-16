import Task from "../components/task/Task";
import { tasks } from "../constants/tasks";

export default function Home() {
    return (
        <div>
            {tasks.map((task) => {
                const { id, dateOfCreate, isDone, title } = task;
                return <Task {...task} key={task.id} />;
            })}
        </div>
    );
}
