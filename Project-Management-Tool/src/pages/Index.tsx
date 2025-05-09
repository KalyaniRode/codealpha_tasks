
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";

// Mock data for demonstration
const mockProjects = [
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
  {
    id: 3,
    title: "Marketing Campaign",
    description: "Q2 marketing campaign for product launch including social media and email marketing.",
    progress: 30,
    category: "Marketing",
    members: [
      { id: 2, name: "Jane Smith" },
      { id: 7, name: "David Brown" },
    ],
  },
  {
    id: 4,
    title: "UI Component Library",
    description: "Building a reusable component library for all future web projects.",
    progress: 60,
    category: "Development",
    members: [
      { id: 3, name: "Alex Johnson" },
      { id: 1, name: "John Doe" },
      { id: 8, name: "Emily Davis" },
    ],
  },
];

export default function Index() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button className="gap-2">
          <Plus size={16} /> New Project
        </Button>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <div className="flex justify-between items-center mb-6">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="active" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProjects
              .filter((p) => p.progress < 100)
              .map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="completed" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProjects
              .filter((p) => p.progress === 100)
              .map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            {mockProjects.filter((p) => p.progress === 100).length === 0 && (
              <div className="col-span-3 text-center py-10">
                <p className="text-muted-foreground">
                  No completed projects yet
                </p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
