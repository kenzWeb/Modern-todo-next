"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ListTodo } from "lucide-react";
import { Task } from "../types";
import { TaskCard } from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-8">
          <ListTodo className="mb-4 h-12 w-12 text-muted-foreground" />
          <p className="text-lg font-medium">No tasks found</p>
          <p className="text-sm text-muted-foreground">
            Create a new task or try a different search
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-4">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}