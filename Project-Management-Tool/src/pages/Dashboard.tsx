
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import ProjectCard from "@/components/ProjectCard";
import TaskCard from "@/components/TaskCard";
import CommentCard from "@/components/CommentCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MessageSquare, List, Plus, Search } from 'lucide-react';
import Layout from '@/components/Layout';

// Mock data
const projects = [
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
  }
];

const tasks = [
  {
    id: "1",
    title: "Design Homepage Wireframes",
    description: "Create wireframe designs for the new homepage layout",
    dueDate: "2023-06-20",
    priority: "high",
    status: "in-progress",
    assignee: {
      id: "2",
      name: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    commentsCount: 3
  },
  {
    id: "2",
    title: "Implement User Authentication",
    description: "Set up user authentication system with login and registration",
    dueDate: "2023-06-25",
    priority: "medium",
    status: "todo",
    assignee: {
      id: "1",
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
    },
    commentsCount: 1
  },
  {
    id: "3",
    title: "Database Schema Design",
    description: "Design the database schema for the new features",
    dueDate: "2023-06-18",
    priority: "low",
    status: "completed",
    assignee: {
      id: "3",
      name: "Mike Johnson",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
    },
    commentsCount: 5
  }
] as const;

const comments = [
  {
    id: "1",
    content: "I think we should focus on improving the navigation menu first. The current design is confusing for users.",
    createdAt: "2023-06-15T13:45:30Z",
    author: {
      id: "2",
      name: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    }
  },
  {
    id: "2",
    content: "I've added some initial mockups for the product pages. Please take a look and let me know your thoughts.",
    createdAt: "2023-06-14T09:20:15Z",
    author: {
      id: "1",
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
    }
  }
];

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <div className="container py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-2">
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="pl-8" />
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> New Project
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Recent Projects</CardTitle>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                <CardDescription>Your recently active projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projects.map(project => (
                    <ProjectCard key={project.id} {...project} />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Recent Activity</CardTitle>
                </div>
                <CardDescription>Recent comments and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {comments.map(comment => (
                    <CommentCard key={comment.id} {...comment} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="mb-6">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    <List className="h-5 w-5" />
                    <span>My Tasks</span>
                  </CardTitle>
                  <Button variant="ghost" size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <CardDescription>Tasks assigned to you</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tasks.map(task => (
                    <TaskCard key={task.id} {...task} />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>Upcoming Due Dates</span>
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {tasks
                    .filter(task => task.dueDate && new Date(task.dueDate) > new Date())
                    .sort((a, b) => new Date(a.dueDate!).getTime() - new Date(b.dueDate!).getTime())
                    .map(task => (
                      <div key={task.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
                        <div>
                          <p className="text-sm font-medium">{task.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {task.status === "completed" ? "Completed" : `Due ${new Date(task.dueDate!).toLocaleDateString()}`}
                          </p>
                        </div>
                        <Badge variant={task.priority === "high" ? "destructive" : "outline"}>
                          {task.priority}
                        </Badge>
                      </div>
                    ))
                  }
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
