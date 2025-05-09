
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import PostCard from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const dummyPosts = [
  {
    id: "3",
    username: "webdev",
    fullName: "Web Developer",
    profileImage: "https://ui-avatars.com/api/?name=Web+Developer&background=7E69AB&color=fff",
    content: "Just deployed my first React application using Vite! The build process was incredibly fast. Has anyone else tried Vite for their projects?",
    timestamp: "3 hours ago",
    likeCount: 28,
    commentCount: 5,
    isLiked: false
  },
  {
    id: "4",
    username: "travelbug",
    fullName: "Travel Enthusiast",
    profileImage: "https://ui-avatars.com/api/?name=Travel+Enthusiast&background=6E59A5&color=fff",
    content: "Exploring the beautiful streets of Barcelona! The architecture here is absolutely breathtaking. Sagrada Familia was even more impressive than I imagined. 🇪🇸✈️",
    timestamp: "5 hours ago",
    likeCount: 52,
    commentCount: 8,
    isLiked: true
  },
  {
    id: "5",
    username: "foodie",
    fullName: "Food Lover",
    profileImage: "https://ui-avatars.com/api/?name=Food+Lover&background=8B5CF6&color=fff",
    content: "Made homemade pasta for the first time today! The process was therapeutic, and the taste was incredible. Highly recommend trying it if you haven't already!",
    timestamp: "8 hours ago",
    likeCount: 35,
    commentCount: 12,
    isLiked: false
  }
];

const Index: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [postContent, setPostContent] = useState("");
  const [posts, setPosts] = useState(dummyPosts);
  const { toast } = useToast();
  
  const handleCreatePost = () => {
    if (!postContent.trim()) return;
    
    const newPost = {
      id: Date.now().toString(),
      username: user?.username || "anonymous",
      fullName: user?.fullName || "Anonymous User",
      profileImage: user?.profileImage || "https://ui-avatars.com/api/?name=User&background=9b87f5&color=fff",
      content: postContent,
      timestamp: "Just now",
      likeCount: 0,
      commentCount: 0,
      isLiked: false
    };
    
    setPosts([newPost, ...posts]);
    setPostContent("");
    toast({
      description: "Post created successfully!",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary/10 to-background p-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
          Welcome to ConnectHub
        </h1>
        <p className="text-center max-w-md mb-8">
          Connect with friends, share moments, and discover stories from people around the world.
        </p>
        <div className="flex space-x-4">
          <Button onClick={() => navigate("/signup")} size="lg">
            Get Started
          </Button>
          <Button onClick={() => navigate("/login")} variant="outline" size="lg">
            Login
          </Button>
        </div>
        
        <div className="mt-12 max-w-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Why join ConnectHub?</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3">✓</span>
              Connect with friends and family
            </li>
            <li className="flex items-center">
              <span className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3">✓</span>
              Share your moments through posts
            </li>
            <li className="flex items-center">
              <span className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3">✓</span>
              Engage with a supportive community
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-2xl mx-auto pt-20 pb-10 px-4">
      <Card className="mb-8 border">
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <img 
                src={user?.profileImage} 
                alt={user?.username} 
                className="h-full w-full object-cover" 
              />
            </div>
            <p className="font-medium">Create Post</p>
          </div>
        </CardHeader>
        <CardContent className="pb-3">
          <Textarea
            placeholder="What's on your mind?"
            className="min-h-[100px] resize-none"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
        </CardContent>
        <CardFooter className="flex justify-end pt-0">
          <Button onClick={handleCreatePost} disabled={!postContent.trim()}>
            Post
          </Button>
        </CardFooter>
      </Card>
      
      <div className="space-y-6">
        {posts.map(post => (
          <PostCard
            key={post.id}
            id={post.id}
            username={post.username}
            fullName={post.fullName}
            profileImage={post.profileImage}
            content={post.content}
            timestamp={post.timestamp}
            likeCount={post.likeCount}
            commentCount={post.commentCount}
            isLiked={post.isLiked}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
