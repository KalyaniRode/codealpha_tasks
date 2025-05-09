
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/ProjectCard";

// Mock data
const user = {
  id: 1,
  name: "John Doe",
  role: "Product Designer",
  bio: "Passionate about creating beautiful and functional user interfaces. Specialized in UX research and design systems.",
  projects: [
    {
      id: 1,
      title: "Website Redesign",
      description: "Complete overhaul of the company website with new branding and improved user experience.",
      progress: 75,
      category: "Design",
      members: [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        { id: 3, name: "Alex Johnson" },
        { id: 4, name: "Sara Wilson" },
      ],
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Creating a new mobile application for both iOS and Android platforms.",
      progress: 45,
      category: "Development",
      members: [
        { id: 1, name: "John Doe" },
        { id: 5, name: "Mike Thompson" },
        { id: 6, name: "Lisa Green" },
      ],
    },
  ],
  stats: {
    tasksCompleted: 24,
    projectsCompleted: 8,
    currentProjects: 2
  }
};

export default function UserProfile() {
  const { id } = useParams();
  
  // This would normally fetch user details based on ID
  // const user = getUser(id);
  
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center text-4xl text-white font-bold">
          {user.name.charAt(0)}
        </div>
        
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <p className="text-muted-foreground">{user.role}</p>
            </div>
            
            <Badge variant="outline" className="self-start">
              Team Member
            </Badge>
          </div>
          
          <p className="mb-4">{user.bio}</p>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white p-3 rounded-md border">
              <p className="text-2xl font-bold">{user.stats.tasksCompleted}</p>
              <p className="text-xs text-muted-foreground">Tasks Completed</p>
            </div>
            <div className="bg-white p-3 rounded-md border">
              <p className="text-2xl font-bold">{user.stats.projectsCompleted}</p>
              <p className="text-xs text-muted-foreground">Projects Finished</p>
            </div>
            <div className="bg-white p-3 rounded-md border">
              <p className="text-2xl font-bold">{user.stats.currentProjects}</p>
              <p className="text-xs text-muted-foreground">Current Projects</p>
            </div>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="projects">
        <TabsList>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
        </TabsList>
        
        <TabsContent value="projects" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {user.projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="tasks" className="mt-6">
          <div className="bg-white p-4 rounded-lg border text-center py-8">
            <p className="text-muted-foreground">Task list feature coming soon</p>
          </div>
        </TabsContent>
        
        <TabsContent value="activity" className="mt-6">
          <div className="bg-white p-4 rounded-lg border text-center py-8">
            <p className="text-muted-foreground">Activity feed feature coming soon</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
