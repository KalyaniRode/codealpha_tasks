
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

interface ProfileCardProps {
  username?: string;
  fullName?: string;
  profileImage?: string;
  bio?: string;
  postCount?: number;
  isCurrentUser?: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ 
  username,
  fullName,
  profileImage,
  bio,
  postCount = 0,
  isCurrentUser = false
}) => {
  const { user } = useAuth();
  const profileData = {
    username: username || user?.username || "username",
    fullName: fullName || user?.fullName || "User",
    profileImage: profileImage || user?.profileImage || "https://ui-avatars.com/api/?name=User&background=9b87f5&color=fff",
    bio: bio || user?.bio || "No bio yet",
  };

  return (
    <Card className="border shadow-sm">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-primary mb-4">
            {profileImage ? (
              <img 
                src={profileData.profileImage} 
                alt={profileData.username} 
                className="h-full w-full object-cover" 
              />
            ) : (
              <div className="h-full w-full bg-secondary flex items-center justify-center">
                <User size={40} className="text-white" />
              </div>
            )}
          </div>
          
          <h2 className="text-2xl font-bold">{profileData.fullName}</h2>
          <p className="text-muted-foreground">@{profileData.username}</p>
          
          <div className="mt-4 text-sm text-gray-600 max-w-md">
            <p>{profileData.bio}</p>
          </div>
          
          <div className="flex mt-6 mb-4 justify-center space-x-6">
            <div className="text-center">
              <p className="text-2xl font-bold">{postCount}</p>
              <p className="text-sm text-muted-foreground">Posts</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">142</p>
              <p className="text-sm text-muted-foreground">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">65</p>
              <p className="text-sm text-muted-foreground">Following</p>
            </div>
          </div>
          
          {isCurrentUser ? (
            <Button variant="outline" className="mt-4 w-full">
              Edit Profile
            </Button>
          ) : (
            <Button className="mt-4 w-full">
              Follow
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
