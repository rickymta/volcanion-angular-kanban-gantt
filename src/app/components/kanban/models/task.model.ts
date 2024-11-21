import { AssigneeModel } from './assignee.model'
import { LabelModel } from './label.model'

export interface TaskModel {
  id: string;
  title: string;
  code: string;
  status: string;
  planStartDate: Date;
  planEndDate: Date;
  actualStartDate?: Date;
  actualEndDate?: Date;
  assignee: AssigneeModel | null;
  description: string;
  labels?: LabelModel[];
  progress?: number;
  dependencies?: string[];
}
