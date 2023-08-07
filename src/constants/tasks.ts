import { taskType } from "../components/task/Task";

export const tasks: taskType[] = [
  {
    id: "0132",
    dateOfCreate: new Date(Date.now()).toString(),
    isDone: true,
    title: "Buy milk",
  },
  {
    id: "04565",
    dateOfCreate: new Date(Date.now()).toString(),
    isDone: false,
    title: "Buy something",
  },
];
