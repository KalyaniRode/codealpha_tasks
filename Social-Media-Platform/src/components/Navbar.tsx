
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { Home, User, LogOut } from "lucide-react";

const Navbar: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-sm border-b py-3 px-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          ConnectHub
        </Link>
        
        <div className="flex items-center space-x-6">
          {isAuthenticated ? (
            <>
              <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                <Home size={24} />
              </Link>
              <Link to={`/profile`} className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-primary overflow-hidden">
                  <img 
                    src={user?.profileImage} 
                    alt={user?.username} 
                    className="h-full w-full object-cover"
                  />
                </div>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
                title="Logout"
              >
                <LogOut size={20} />
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
