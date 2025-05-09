
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Plus, Users } from "lucide-react";
import UserAvatar from "@/components/UserAvatar";
import TaskItem from "@/components/TaskItem";
import CommentSection from "@/components/CommentSection";

// Mock data
const project = {
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
  tasks: [
    { 
      id: 1, 
      title: "Design homepage mockup", 
      completed: true,
      priority: "high",
      dueDate: "May 15",
      assignedTo: { id: 2, name: "Jane Smith" },
      commentsCount: 3 
    },
    { 
      id: 2, 
      title: "Create style guide", 
      completed: false,
      priority: "medium",
      dueDate: "May 20",
      assignedTo: { id: 1, name: "John Doe" },
      commentsCount: 0 
    },
    { 
      id: 3, 
      title: "Develop responsive layout", 
      completed: false,
      priority: "high",
      dueDate: "May 25",
      assignedTo: { id: 3, name: "Alex Johnson" },
      commentsCount: 2 
    },
    { 
      id: 4, 
      title: "Implement contact form", 
      completed: false,
      priority: "low",
      assignedTo: { id: 4, name: "Sara Wilson" },
      commentsCount: 1 
    },
  ],
  comments: [
    {
      id: 1,
      user: { id: 2, name: "Jane Smith" },
      content: "I've completed the homepage mockup. Please review and provide feedback.",
      createdAt: new Date(2023, 4, 10),
    },
    {
      id: 2,
      user: { id: 1, name: "John Doe" },
      content: "Looks great! I especially like the color scheme you chose.",
      createdAt: new Date(2023, 4, 10, 12, 30),
    },
  ],
};

export default function ProjectDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  
  // This would normally fetch project details based on ID
  // const project = getProject(id);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <Badge>{project.category}</Badge>
          </div>
          <p className="text-muted-foreground mt-1">
            {project.description}
          </p>
        </div>
        
        <Button className="self-start gap-2">
          <Plus size={16} /> Add Task
        </Button>
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center gap-6 p-4 bg-white rounded-lg border">
        <div className="flex-1">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Overall Progress</span>
            <span className="text-sm font-medium">{project.progress}%</span>
          </div>
          <Progress value={project.progress} className="h-2" />
        </div>
        
        <div className="flex items-center gap-2">
          <Users size={16} className="text-muted-foreground" />
          <span className="text-sm font-medium">Team:</span>
          <div className="flex -space-x-2">
            {project.members.map((member) => (
              <UserAvatar
                key={member.id}
                name={member.name}
                size="sm"
              />
            ))}
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="comments">Discussion</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg p-4 border">
                <h3 className="text-lg font-semibold mb-4">Recent Tasks</h3>
                <div>
                  {project.tasks.slice(0, 3).map((task) => (
                    <TaskItem key={task.id} {...task} />
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg p-4 border">
                <h3 className="text-lg font-semibold mb-4">Team Members</h3>
                <div className="space-y-3">
                  {project.members.map((member) => (
                    <div key={member.id} className="flex items-center gap-3">
                      <UserAvatar name={member.name} />
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {member.id === 1 ? "Project Owner" : "Member"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="tasks" className="space-y-6 mt-6">
          <div className="bg-white rounded-lg p-4 border">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">All Tasks</h3>
              <Button size="sm" className="gap-2">
                <Plus size={14} /> New Task
              </Button>
            </div>
            
            <div>
              {project.tasks.map((task) => (
                <TaskItem key={task.id} {...task} />
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="comments" className="mt-6">
          <div className="bg-white rounded-lg p-4 border">
            <CommentSection comments={project.comments} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
