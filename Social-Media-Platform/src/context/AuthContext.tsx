
import React, { createContext, useState, useContext, ReactNode } from "react";
import { useToast } from "@/components/ui/use-toast";

interface User {
  id: string;
  username: string;
  fullName: string;
  profileImage: string;
  bio: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  signup: (username: string, fullName: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();
  
  // In a real app, these would be API calls to your backend
  const login = (username: string, password: string) => {
    // This is a mock authentication for demonstration
    // In a real app, you would validate credentials with your backend
    if (username && password) {
      const mockUser = {
        id: "1",
        username: username,
        fullName: username === "johndoe" ? "John Doe" : username,
        profileImage: `https://ui-avatars.com/api/?name=${username}&background=9b87f5&color=fff`,
        bio: "This is a sample bio for demonstration purposes."
      };
      
      setUser(mockUser);
      localStorage.setItem("socialMediaUser", JSON.stringify(mockUser));
      toast({
        title: "Login successful",
        description: `Welcome back, ${mockUser.fullName}!`,
      });
    }
  };
  
  const signup = (username: string, fullName: string, password: string) => {
    // In a real app, this would create a new user in your backend
    if (username && fullName && password) {
      const newUser = {
        id: Date.now().toString(),
        username,
        fullName,
        profileImage: `https://ui-avatars.com/api/?name=${fullName.replace(" ", "+")}&background=9b87f5&color=fff`,
        bio: "Hey there! I'm new to this platform."
      };
      
      setUser(newUser);
      localStorage.setItem("socialMediaUser", JSON.stringify(newUser));
      toast({
        title: "Account created",
        description: `Welcome, ${newUser.fullName}!`,
      });
    }
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem("socialMediaUser");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };
  
  // Check if user was previously logged in
  React.useEffect(() => {
    const storedUser = localStorage.getItem("socialMediaUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  
  const value = {
    user,
    isAuthenticated: !!user,
    login,
    signup,
    logout
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
