import { TaskModel } from './task.model';

export interface Column {
  id: string;
  title: string;
  tasks: TaskModel[];
}
