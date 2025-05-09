
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export interface MemberCardProps {
  id: string;
  name: string;
  avatar?: string;
  email: string;
  role: 'admin' | 'member' | 'guest';
  activeTasksCount: number;
  onClick?: () => void;
}

const MemberCard: React.FC<MemberCardProps> = ({ 
  id, 
  name, 
  avatar, 
  email,
  role,
  activeTasksCount,
  onClick
}) => {
  const roleColors = {
    admin: "bg-purple-100 text-purple-800",
    member: "bg-blue-100 text-blue-800",
    guest: "bg-gray-100 text-gray-800"
  };

  return (
    <Card className="hover:shadow-md transition-shadow" onClick={onClick}>
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>
              {name.split(' ').map(name => name[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="text-sm font-medium">{name}</h4>
            <p className="text-xs text-muted-foreground">{email}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Badge className={roleColors[role]}>
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {activeTasksCount} tasks
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default MemberCard;
