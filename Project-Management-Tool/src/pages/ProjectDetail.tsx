
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TaskCard from '@/components/TaskCard';
import CommentCard from '@/components/CommentCard';
import MemberCard from '@/components/MemberCard';
import {
  Calendar,
  ListTodo,
  MessageSquare,
  Users,
  Settings,
  Plus,
  Search,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Mock data
const project = {
  id: "1",
  title: "Website Redesign",
  description: "Redesign the company website with modern UI and improved user experience",
  dueDate: "2023-07-15",
  createdDate: "2023-05-01",
  members: [
    { id: "1", name: "John Doe", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36", email: "john.doe@example.com", role: "admin", activeTasksCount: 4 },
    { id: "2", name: "Jane Smith", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330", email: "jane.smith@example.com", role: "member", activeTasksCount: 3 },
    { id: "3", name: "Mike Johnson", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36", email: "mike.j@example.com", role: "member", activeTasksCount: 2 },
    { id: "4", name: "Anna Williams", email: "anna.w@example.com", role: "guest", activeTasksCount: 1 },
  ],
  tasks: [
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
  ],
  comments: [
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
    },
    {
      id: "3",
      content: "The timeline looks good, but I'm concerned about the deadline for the responsive design implementation. Can we discuss this in our next meeting?",
      createdAt: "2023-06-12T14:32:45Z",
      author: {
        id: "3",
        name: "Mike Johnson",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
      }
    }
  ]
} as const;

const ProjectDetail: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    // In a real app, you would post this to your backend
    console.log("Adding comment:", newComment);
    setNewComment("");
  };

  const completedTasksCount = project.tasks.filter(task => task.status === "completed").length;
  const progressPercentage = project.tasks.length > 0 
    ? Math.floor((completedTasksCount / project.tasks.length) * 100) 
    : 0;

  return (
    <Layout>
      <div className="container py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-3xl font-bold">{project.title}</h1>
              <Badge className="ml-2">
                {progressPercentage}% Complete
              </Badge>
            </div>
            <p className="text-muted-foreground">{project.description}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" /> Project Settings
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Task
            </Button>
          </div>
        </div>

        <Tabs 
          defaultValue="overview" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-4"
        >
          <TabsList className="grid w-full grid-cols-4 md:w-auto md:inline-grid">
            <TabsTrigger value="overview" className="flex gap-2 items-center">
              <ListTodo className="h-4 w-4 hidden sm:block" /> Overview
            </TabsTrigger>
            <TabsTrigger value="tasks" className="flex gap-2 items-center">
              <Calendar className="h-4 w-4 hidden sm:block" /> Tasks
            </TabsTrigger>
            <TabsTrigger value="members" className="flex gap-2 items-center">
              <Users className="h-4 w-4 hidden sm:block" /> Members
            </TabsTrigger>
            <TabsTrigger value="discussions" className="flex gap-2 items-center">
              <MessageSquare className="h-4 w-4 hidden sm:block" /> Discussions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Project Overview</CardTitle>
                  <CardDescription>Key information about this project</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-1">Created On</h3>
                        <p>{new Date(project.createdDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-1">Due Date</h3>
                        <p>{new Date(project.dueDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-1">Team Members</h3>
                        <div className="flex -space-x-2">
                          {project.members.slice(0, 4).map((member) => (
                            <Avatar key={member.id} className="border-2 border-background h-8 w-8">
                              <AvatarImage src={member.avatar} alt={member.name} />
                              <AvatarFallback className="text-xs">
                                {member.name.split(' ').map(name => name[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                          ))}
                          {project.members.length > 4 && (
                            <Avatar className="border-2 border-background bg-muted h-8 w-8">
                              <AvatarFallback className="text-xs">+{project.members.length - 4}</AvatarFallback>
                            </Avatar>
                          )}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-1">Progress</h3>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-primary h-2.5 rounded-full" 
                            style={{ width: `${progressPercentage}%` }}
                          ></div>
                        </div>
                        <p className="text-sm mt-1">{completedTasksCount} of {project.tasks.length} tasks completed</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-3">Recent Tasks</h3>
                      <div className="space-y-3">
                        {project.tasks.slice(0, 3).map(task => (
                          <TaskCard key={task.id} {...task} />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.comments.slice(0, 2).map(comment => (
                      <CommentCard key={comment.id} {...comment} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tasks" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Project Tasks</CardTitle>
                  <CardDescription>All tasks for this project</CardDescription>
                </div>
                <div className="flex gap-2">
                  <div className="relative w-48">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search tasks..." className="pl-8" />
                  </div>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" /> New Task
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.tasks.map(task => (
                    <TaskCard key={task.id} {...task} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="members" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Team Members</CardTitle>
                  <CardDescription>People working on this project</CardDescription>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Add Member
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {project.members.map(member => (
                    <MemberCard key={member.id} {...member} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="discussions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Discussions</CardTitle>
                <CardDescription>Communicate with your team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-4">
                  {project.comments.map(comment => (
                    <CommentCard key={comment.id} {...comment} />
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Add a comment..." 
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  <Button onClick={handleAddComment}>Post</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
