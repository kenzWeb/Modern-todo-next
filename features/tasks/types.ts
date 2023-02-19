export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  category: string;
  dueDate: string;
}

export interface TaskFormData {
  title: string;
  description: string;
  category: string;
  dueDate: string;
}