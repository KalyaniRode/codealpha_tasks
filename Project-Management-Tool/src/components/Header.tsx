
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Bell, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="border-b bg-white sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="font-bold text-xl gradient-text mr-8">
            ProjectPal
          </Link>
          {!isMobile && (
            <div className="relative max-w-xs">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                className="pl-8 max-w-xs"
              />
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-3">
          {!isMobile && (
            <Button variant="outline" size="sm" className="gap-2">
              <Plus size={16} /> New Project
            </Button>
          )}
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>New task assigned to you</DropdownMenuItem>
              <DropdownMenuItem>New comment on Project A</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/profile/1">
            <UserAvatar name="John Doe" />
          </Link>
        </div>
      </div>
    </header>
  );
}
