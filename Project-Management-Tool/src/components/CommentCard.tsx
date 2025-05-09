
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export interface CommentCardProps {
  id: string;
  content: string;
  createdAt: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  onReply?: () => void;
}

const CommentCard: React.FC<CommentCardProps> = ({ 
  id, 
  content, 
  createdAt, 
  author,
  onReply
}) => {
  return (
    <Card className="border-l-4 border-l-primary">
      <CardContent className="pt-4">
        <div className="flex items-start gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>
              {author.name.split(' ').map(name => name[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex justify-between">
              <h4 className="text-sm font-medium">{author.name}</h4>
              <span className="text-xs text-muted-foreground">
                {new Date(createdAt).toLocaleDateString()} at {new Date(createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </span>
            </div>
            <p className="mt-1 text-sm">
              {content}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0 pb-3">
        <div className="flex justify-end w-full">
          <Button variant="ghost" size="sm" onClick={onReply}>Reply</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CommentCard;
