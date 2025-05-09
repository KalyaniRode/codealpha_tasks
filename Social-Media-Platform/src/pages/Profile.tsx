
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import ProfileCard from "@/components/ProfileCard";
import PostCard from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const dummyPosts = [
  {
    id: "1",
    content: "Just learned about React hooks today! They're amazing for managing state in functional components.",
    timestamp: "2 hours ago",
    likeCount: 15,
    commentCount: 3,
    isLiked: false,
    comments: [
      {
        id: "c1",
        username: "reactfan",
        content: "Hooks are a game changer!",
        profileImage: "https://ui-avatars.com/api/?name=React+Fan&background=6E59A5&color=fff"
      }
    ]
  },
  {
    id: "2",
    content: "Beautiful sunset at the beach today! Feeling grateful for these moments of peace. 🌅",
    timestamp: "1 day ago",
    likeCount: 42,
    commentCount: 7,
    isLiked: true,
    comments: []
  }
];

const Profile: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  
  if (!user) {
    return null;
  }

  return (
    <div className="container max-w-4xl mx-auto pt-16 pb-10 px-4">
      <div className="mt-8">
        <ProfileCard 
          isCurrentUser={true}
          postCount={dummyPosts.length}
        />
      </div>
      
      <div className="mt-8">
        <Tabs defaultValue="posts">
          <TabsList className="w-full">
            <TabsTrigger value="posts" className="flex-1">Posts</TabsTrigger>
            <TabsTrigger value="media" className="flex-1">Media</TabsTrigger>
            <TabsTrigger value="saved" className="flex-1">Saved</TabsTrigger>
          </TabsList>
          <TabsContent value="posts" className="mt-6">
            <div className="space-y-6">
              {dummyPosts.map(post => (
                <PostCard
                  key={post.id}
                  id={post.id}
                  username={user.username}
                  fullName={user.fullName}
                  profileImage={user.profileImage}
                  content={post.content}
                  timestamp={post.timestamp}
                  likeCount={post.likeCount}
                  commentCount={post.commentCount}
                  isLiked={post.isLiked}
                  comments={post.comments}
                />
              ))}
              
              {dummyPosts.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium">No posts yet</h3>
                  <p className="text-muted-foreground mt-2">
                    You haven't created any posts yet. 
                  </p>
                  <Button className="mt-4">
                    Create Your First Post
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="media">
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No media yet</h3>
              <p className="text-muted-foreground mt-2">
                You haven't shared any photos or videos yet.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="saved">
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No saved posts</h3>
              <p className="text-muted-foreground mt-2">
                You haven't saved any posts yet.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
