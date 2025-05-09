
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Heart, 
  MessageSquare,
  Share, 
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Comment {
  id: string;
  username: string;
  content: string;
  profileImage: string;
}

interface PostCardProps {
  id: string;
  username: string;
  fullName: string;
  profileImage: string;
  content: string;
  timestamp: string;
  likeCount: number;
  commentCount: number;
  isLiked: boolean;
  comments?: Comment[];
}

const PostCard: React.FC<PostCardProps> = ({
  id,
  username,
  fullName,
  profileImage,
  content,
  timestamp,
  likeCount: initialLikeCount,
  commentCount: initialCommentCount,
  isLiked: initialIsLiked,
  comments: initialComments = []
}) => {
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [isCommenting, setIsCommenting] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const { toast } = useToast();

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
      setIsLiked(false);
    } else {
      setLikeCount(prev => prev + 1);
      setIsLiked(true);
      
      const heartIcon = document.getElementById(`heart-${id}`);
      if (heartIcon) {
        heartIcon.classList.add("like-animation");
        setTimeout(() => {
          heartIcon?.classList.remove("like-animation");
        }, 300);
      }
    }
  };

  const handleComment = () => {
    if (commentText.trim()) {
      const newComment = {
        id: Date.now().toString(),
        username: "currentuser", // In a real app, get this from auth context
        content: commentText,
        profileImage: "https://ui-avatars.com/api/?name=Current+User&background=9b87f5&color=fff"
      };
      
      setComments(prev => [newComment, ...prev]);
      setCommentText("");
      toast({
        description: "Comment added successfully",
      });
    }
  };

  const handleShare = () => {
    // In a real app, this would open a share dialog
    toast({
      description: "Share feature will be available soon!",
    });
  };

  const toggleCommenting = () => {
    setIsCommenting(!isCommenting);
  };

  return (
    <Card className="border shadow-sm mb-6">
      <CardHeader className="p-4">
        <div className="flex items-center space-x-3">
          <Link to={`/profile/${username}`} className="h-10 w-10 rounded-full overflow-hidden">
            <img 
              src={profileImage} 
              alt={username} 
              className="h-full w-full object-cover" 
            />
          </Link>
          <div>
            <Link to={`/profile/${username}`} className="font-medium hover:underline">
              {fullName}
            </Link>
            <p className="text-xs text-muted-foreground">@{username}</p>
          </div>
          <span className="text-xs text-muted-foreground ml-auto">{timestamp}</span>
        </div>
      </CardHeader>
      
      <CardContent className="px-4 py-2">
        <p className="whitespace-pre-wrap">{content}</p>
      </CardContent>
      
      <CardFooter className="px-4 py-3 border-t flex flex-col">
        <div className="flex items-center w-full">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-muted-foreground flex items-center" 
            onClick={handleLike}
          >
            <Heart 
              id={`heart-${id}`}
              size={18} 
              className={`mr-1 ${isLiked ? "fill-red-500 text-red-500" : ""}`} 
            />
            <span>{likeCount}</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-muted-foreground flex items-center" 
            onClick={toggleCommenting}
          >
            <MessageSquare size={18} className="mr-1" />
            <span>{comments.length}</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-muted-foreground flex items-center ml-auto" 
            onClick={handleShare}
          >
            <Share size={18} />
          </Button>
        </div>
        
        {isCommenting && (
          <div className="mt-3 w-full">
            <div className="flex items-start space-x-2">
              <div className="h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="https://ui-avatars.com/api/?name=Current+User&background=9b87f5&color=fff"
                  alt="Current user" 
                  className="h-full w-full object-cover" 
                />
              </div>
              <div className="flex-1">
                <Textarea
                  placeholder="Add a comment..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="min-h-[60px] text-sm"
                />
                <div className="flex justify-end mt-2">
                  <Button 
                    size="sm" 
                    onClick={handleComment}
                    disabled={!commentText.trim()}
                  >
                    Post
                  </Button>
                </div>
              </div>
            </div>
            
            {comments.length > 0 && (
              <div className="mt-4 space-y-3">
                {comments.map(comment => (
                  <div key={comment.id} className="flex items-start space-x-2 fadeIn">
                    <div className="h-6 w-6 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={comment.profileImage}
                        alt={comment.username} 
                        className="h-full w-full object-cover" 
                      />
                    </div>
                    <div className="flex-1 bg-muted rounded-md p-2">
                      <p className="text-xs font-medium">@{comment.username}</p>
                      <p className="text-sm">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default PostCard;
