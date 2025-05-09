
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter } from 'lucide-react';
import Layout from '@/components/Layout';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

// Mock data
const allProjects = [
  {
    id: "1",
    title: "Website Redesign",
    description: "Redesign the company website with modern UI and improved user experience",
    dueDate: "2023-07-15",
    members: [
      { id: "1", name: "John Doe", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36" },
      { id: "2", name: "Jane Smith", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
      { id: "3", name: "Mike Johnson", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36" },
      { id: "4", name: "Anna Williams" },
    ],
    commentsCount: 8,
    tasksCount: 12,
    completedTasksCount: 5
  },
  {
    id: "2",
    title: "Mobile App Development",
    description: "Create a mobile app for our customers to access our services on the go",
    dueDate: "2023-08-30",
    members: [
      { id: "1", name: "John Doe", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36" },
      { id: "2", name: "Jane Smith", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
    ],
    commentsCount: 15,
    tasksCount: 20,
    completedTasksCount: 3
  },
  {
    id: "3",
    title: "Content Marketing Campaign",
    description: "Plan and execute a content marketing campaign for Q3",
    dueDate: "2023-09-15",
    members: [
      { id: "2", name: "Jane Smith", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
      { id: "3", name: "Mike Johnson", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36" },
    ],
    commentsCount: 6,
    tasksCount: 15,
    completedTasksCount: 8
  },
  {
    id: "4",
    title: "Product Launch",
    description: "Coordinate the launch of our new product line",
    dueDate: "2023-10-01",
    members: [
      { id: "1", name: "John Doe", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36" },
      { id: "2", name: "Jane Smith", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
      { id: "4", name: "Anna Williams" },
    ],
    commentsCount: 12,
    tasksCount: 25,
    completedTasksCount: 5
  }
];

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [projects, setProjects] = useState(allProjects);
  const [newProjectTitle, setNewProjectTitle] = useState("");
  const [newProjectDescription, setNewProjectDescription] = useState("");
  const [newProjectDueDate, setNewProjectDueDate] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateProject = () => {
    if (newProjectTitle.trim() === "") return;
    
    const newProject = {
      id: (projects.length + 1).toString(),
      title: newProjectTitle,
      description: newProjectDescription,
      dueDate: newProjectDueDate,
      members: [],
      commentsCount: 0,
      tasksCount: 0,
      completedTasksCount: 0
    };
    
    setProjects([...projects, newProject]);
    
    // Reset form
    setNewProjectTitle("");
    setNewProjectDescription("");
    setNewProjectDueDate("");
    setDialogOpen(false);
  };

  return (
    <Layout>
      <div className="container py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Projects</h1>
          <div className="flex items-center gap-2">
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search projects..." 
                className="pl-8" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> New Project
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Project</DialogTitle>
                  <DialogDescription>
                    Add details for your new project
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="project-title" className="text-right">
                      Title
                    </Label>
                    <Input
                      id="project-title"
                      className="col-span-3"
                      value={newProjectTitle}
                      onChange={(e) => setNewProjectTitle(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="project-description" className="text-right">
                      Description
                    </Label>
                    <Input
                      id="project-description"
                      className="col-span-3"
                      value={newProjectDescription}
                      onChange={(e) => setNewProjectDescription(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="project-due-date" className="text-right">
                      Due Date
                    </Label>
                    <Input
                      id="project-due-date"
                      type="date"
                      className="col-span-3"
                      value={newProjectDueDate}
                      onChange={(e) => setNewProjectDueDate(e.target.value)}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
                  <Button onClick={handleCreateProject}>Create Project</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" /> Filter
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Projects</CardTitle>
            <CardDescription>View and manage your projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProjects.map(project => (
                <ProjectCard 
                  key={project.id} 
                  {...project} 
                />
              ))}
              {filteredProjects.length === 0 && (
                <div className="col-span-full text-center py-10">
                  <p className="text-muted-foreground">No projects found. Create a new project to get started.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Projects;
