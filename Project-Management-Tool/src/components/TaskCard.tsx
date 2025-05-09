
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";

export interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high';
  status: 'todo' | 'in-progress' | 'review' | 'completed';
  assignee?: {
    id: string;
    name: string;
    avatar?: string;
  };
  commentsCount: number;
  onClick?: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ 
  id, 
  title, 
  description, 
  dueDate, 
  priority, 
  status,
  assignee, 
  commentsCount,
  onClick
}) => {
  const priorityColors = {
    low: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-red-100 text-red-800"
  };
  
  const statusVariants = {
    'todo': 'secondary',
    'in-progress': 'default',
    'review': 'secondary',
    'completed': 'default'
  } as const;
  
  const statusLabels = {
    'todo': 'To Do',
    'in-progress': 'In Progress',
    'review': 'In Review',
    'completed': 'Completed'
  };

  return (
    <Card className="hover:shadow-md transition-shadow" onClick={onClick}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant={statusVariants[status]} className="mb-2">
            {statusLabels[status]}
          </Badge>
          <Badge className={priorityColors[priority]}>
            {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
          </Badge>
        </div>
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription className="text-sm line-clamp-2 mt-1">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        {dueDate && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
            <Calendar className="h-3 w-3" />
            <span>Due {new Date(dueDate).toLocaleDateString()}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        {assignee ? (
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={assignee.avatar} alt={assignee.name} />
              <AvatarFallback className="text-xs">
                {assignee.name.split(' ').map(name => name[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">{assignee.name}</span>
          </div>
        ) : (
          <span className="text-xs text-muted-foreground">Unassigned</span>
        )}
        
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <MessageSquare className="h-3 w-3" />
          <span>{commentsCount}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TaskCard;
