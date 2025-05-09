
import React from 'react';
import { 
  Video, 
  Users, 
  Share2, 
  MessageSquare, 
  Shield, 
  Clock, 
  Monitor, 
  Mic
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Video,
      title: "HD Video Conferencing",
      description: "Crystal-clear video quality ensures everyone can be seen clearly no matter where they are."
    },
    {
      icon: Share2,
      title: "Screen Sharing",
      description: "Share your screen to present documents, slideshows, and more with meeting participants."
    },
    {
      icon: MessageSquare,
      title: "In-Meeting Chat",
      description: "Send messages to other participants during a meeting without interrupting the speaker."
    },
    {
      icon: Users,
      title: "Group Meetings",
      description: "Host meetings with multiple participants for team discussions and collaboration."
    },
    {
      icon: Shield,
      title: "Secure Meetings",
      description: "End-to-end encryption ensures your meetings remain private and secure."
    },
    {
      icon: Clock,
      title: "No Time Limits",
      description: "Host meetings for as long as you need without worrying about getting cut off."
    },
    {
      icon: Monitor,
      title: "Cross-Platform",
      description: "Join from any device with a browser - no downloads required."
    },
    {
      icon: Mic,
      title: "Noise Cancellation",
      description: "Advanced audio filtering helps eliminate background noise for clearer communication."
    }
  ];

  return (
    <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Everything you need for seamless virtual collaboration and communication
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
