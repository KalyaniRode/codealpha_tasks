
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UserAvatar from "./UserAvatar";
import { formatDistanceToNow } from "date-fns";

interface Comment {
  id: number;
  user: {
    id: number;
    name: string;
    avatar?: string;
  };
  content: string;
  createdAt: Date;
}

interface CommentSectionProps {
  comments: Comment[];
}

export default function CommentSection({ comments: initialComments }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [commentInput, setCommentInput] = useState("");

  const handleAddComment = () => {
    if (!commentInput.trim()) return;
    
    const newComment: Comment = {
      id: Math.floor(Math.random() * 1000),
      user: {
        id: 1, // Current user (hardcoded for now)
        name: "John Doe",
      },
      content: commentInput,
      createdAt: new Date(),
    };
    
    setComments([newComment, ...comments]);
    setCommentInput("");
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Comments</h3>
        
        <div className="flex gap-3">
          <UserAvatar name="John Doe" size="sm" />
          <div className="flex-1 space-y-2">
            <Textarea
              placeholder="Add a comment..."
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              className="resize-none"
            />
            <Button onClick={handleAddComment} disabled={!commentInput.trim()}>
              Comment
            </Button>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-3">
            <UserAvatar 
              name={comment.user.name} 
              src={comment.user.avatar}
              size="sm" 
            />
            <div className="flex-1">
              <div className="bg-muted rounded-lg p-3">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-semibold text-sm">{comment.user.name}</h4>
                  <span className="text-xs text-muted-foreground">
                    {formatDistanceToNow(comment.createdAt, { addSuffix: true })}
                  </span>
                </div>
                <p className="text-sm">{comment.content}</p>
              </div>
            </div>
          </div>
        ))}
        
        {comments.length === 0 && (
          <p className="text-center text-muted-foreground py-6">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>
    </div>
  );
}
