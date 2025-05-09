
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  src?: string;
  name: string;
  size?: "sm" | "md" | "lg";
}

export default function UserAvatar({ src, name, size = "md" }: UserAvatarProps) {
  const getSize = () => {
    switch (size) {
      case "sm":
        return "h-8 w-8";
      case "lg":
        return "h-12 w-12";
      default:
        return "h-10 w-10";
    }
  };

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);

  return (
    <Avatar className={getSize()}>
      <AvatarImage src={src} alt={name} />
      <AvatarFallback className="bg-primary text-primary-foreground">
        {initials}
      </AvatarFallback>
    </Avatar>
  );
}
