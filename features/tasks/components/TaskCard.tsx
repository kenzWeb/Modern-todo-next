"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Clock, MoreVertical, Tag } from "lucide-react";
import { Task } from "../types";

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskCard({ task, onToggle, onDelete }: TaskCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div className="flex items-start space-x-4">
          <Checkbox
            checked={task.completed}
            onCheckedChange={() => onToggle(task.id)}
          />
          <div>
            <CardTitle
              className={`text-xl ${
                task.completed ? "line-through opacity-50" : ""
              }`}
            >
              {task.title}
            </CardTitle>
            <CardDescription>{task.description}</CardDescription>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onDelete(task.id)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Tag className="mr-1 h-4 w-4" />
            {task.category}
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            Due {new Date(task.dueDate).toLocaleDateString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}