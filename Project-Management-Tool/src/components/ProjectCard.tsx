
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, MessageSquare, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  dueDate?: string;
  members: {
    id: string;
    name: string;
    avatar?: string;
  }[];
  commentsCount: number;
  tasksCount: number;
  completedTasksCount: number;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id, 
  title, 
  description, 
  dueDate, 
  members, 
  commentsCount, 
  tasksCount, 
  completedTasksCount,
  onClick
}) => {
  return (
    <Card className="hover:shadow-md transition-shadow" onClick={onClick}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge variant={completedTasksCount === tasksCount ? "default" : "secondary"}>
            {completedTasksCount}/{tasksCount} tasks
          </Badge>
        </div>
        <CardDescription className="text-sm line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {dueDate && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Calendar className="h-4 w-4" />
            <span>Due {new Date(dueDate).toLocaleDateString()}</span>
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <div className="flex -space-x-2">
            {members.slice(0, 3).map((member) => (
              <Avatar key={member.id} className="border-2 border-background h-8 w-8">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback className="text-xs">
                  {member.name.split(' ').map(name => name[0]).join('')}
                </AvatarFallback>
              </Avatar>
            ))}
            {members.length > 3 && (
              <Avatar className="border-2 border-background bg-muted h-8 w-8">
                <AvatarFallback className="text-xs">+{members.length - 3}</AvatarFallback>
              </Avatar>
            )}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MessageSquare className="h-4 w-4" />
              <span>{commentsCount}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{members.length}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">View Project</Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
