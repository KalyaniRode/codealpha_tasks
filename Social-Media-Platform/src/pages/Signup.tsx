
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";

const Signup: React.FC = () => {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!username.trim() || !fullName.trim() || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    
    // In a real app, this would create a user in your backend
    signup(username, fullName, password);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/10 to-background p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ConnectHub
          </h1>
          <p className="text-muted-foreground mt-2">Connect with friends and share your moments</p>
        </div>
        
        <Card className="border shadow-md">
          <CardHeader>
            <CardTitle>Create an Account</CardTitle>
            <CardDescription>Join ConnectHub and start sharing your moments</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && <p className="text-sm text-destructive">{error}</p>}
              
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="johndoe"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              
              <Button type="submit" className="w-full">Sign Up</Button>
              
              <div className="text-center text-sm">
                <p className="text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary hover:underline">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
