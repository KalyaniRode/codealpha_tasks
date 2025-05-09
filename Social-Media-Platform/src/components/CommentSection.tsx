
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface Comment {
  id: string;
  username: string;
  profileImage: string;
  content: string;
  timestamp: string;
}

interface CommentSectionProps {
  postId: string;
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ 
  postId,
  comments: initialComments = [] 
}) => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const { toast } = useToast();

  const handleSubmitComment = () => {
    if (commentText.trim()) {
      const newComment = {
        id: Date.now().toString(),
        username: "currentuser", // In a real app, get this from auth context
        profileImage: "https://ui-avatars.com/api/?name=Current+User&background=9b87f5&color=fff",
        content: commentText,
        timestamp: "Just now"
      };
      
      setComments(prev => [newComment, ...prev]);
      setCommentText("");
      toast({
        description: "Comment added successfully",
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-start space-x-2">
        <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
          <img 
            src="https://ui-avatars.com/api/?name=Current+User&background=9b87f5&color=fff"
            alt="Current user" 
            className="h-full w-full object-cover" 
          />
        </div>
        <div className="flex-1">
          <Textarea
            placeholder="Write a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="min-h-[80px]"
          />
          <div className="flex justify-end mt-2">
            <Button onClick={handleSubmitComment} disabled={!commentText.trim()}>
              Post Comment
            </Button>
          </div>
        </div>
      </div>

      {comments.length > 0 ? (
        <div className="space-y-4">
          {comments.map(comment => (
            <div key={comment.id} className="flex items-start space-x-2">
              <div className="h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={comment.profileImage}
                  alt={comment.username} 
                  className="h-full w-full object-cover" 
                />
              </div>
              <div className="flex-1">
                <div className="bg-muted p-3 rounded-lg">
                  <div className="flex justify-between items-start">
                    <p className="font-medium">@{comment.username}</p>
                    <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                  </div>
                  <p className="mt-1">{comment.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground py-4">No comments yet. Be the first to comment!</p>
      )}
    </div>
  );
};

export default CommentSection;
