
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import UserAvatar from "./UserAvatar";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  progress: number;
  category: string;
  members: { id: number; name: string; avatar?: string }[];
}

export default function ProjectCard({
  id,
  title,
  description,
  progress,
  category,
  members,
}: ProjectCardProps) {
  return (
    <Link to={`/project/${id}`}>
      <Card className="card-hover">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <Badge variant="secondary" className="mt-1">
                {category}
              </Badge>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pb-3">
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {description}
          </p>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardContent>
        
        <CardFooter className="pt-0">
          <div className="flex justify-between items-center w-full">
            <div className="flex -space-x-2">
              {members.slice(0, 3).map((member) => (
                <UserAvatar
                  key={member.id}
                  name={member.name}
                  src={member.avatar}
                  size="sm"
                />
              ))}
              {members.length > 3 && (
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs">
                  +{members.length - 3}
                </div>
              )}
            </div>
            <span className="text-xs text-muted-foreground">
              Updated 2h ago
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
