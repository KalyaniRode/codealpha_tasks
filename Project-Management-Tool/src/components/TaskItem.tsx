
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import UserAvatar from "./UserAvatar";
import { Calendar, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface TaskItemProps {
  id: number;
  title: string;
  completed?: boolean;
  priority: "low" | "medium" | "high";
  dueDate?: string;
  assignedTo?: { id: number; name: string; avatar?: string };
  commentsCount: number;
}

export default function TaskItem({
  id,
  title,
  completed = false,
  priority,
  dueDate,
  assignedTo,
  commentsCount,
}: TaskItemProps) {
  const [isComplete, setIsComplete] = useState(completed);

  const priorityColors = {
    low: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-red-100 text-red-800",
  };

  return (
    <div className={cn(
      "flex items-center gap-3 p-3 rounded-md border mb-2 bg-white",
      isComplete && "bg-muted"
    )}>
      <Checkbox 
        checked={isComplete} 
        onCheckedChange={(checked) => setIsComplete(!!checked)}
      />
      
      <div className="flex-1">
        <p className={cn("font-medium", isComplete && "text-muted-foreground line-through")}>
          {title}
        </p>
        
        <div className="flex gap-3 mt-1 text-xs text-muted-foreground">
          <Badge variant="outline" className={priorityColors[priority]}>
            {priority}
          </Badge>
          
          {dueDate && (
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              <span>{dueDate}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        {assignedTo && <UserAvatar name={assignedTo.name} src={assignedTo.avatar} size="sm" />}
        
        {commentsCount > 0 && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MessageSquare size={12} />
            <span>{commentsCount}</span>
          </div>
        )}
      </div>
    </div>
  );
}
