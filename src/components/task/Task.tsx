const Task = ({ isDone, title, id, dateOfCreate }: TaskProps) => {
  return (
    <div key={id}>
      <input type="checkbox" checked={isDone} />
      <span>{title}</span>
      <input type="date" value={dateOfCreate} />
    </div>
  );
};

type TaskProps = taskType;

export type taskType = {
  id: string;
  isDone: boolean;
  title: string;
  dateOfCreate: string;
};

export default Task;
