
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';

interface ChatMessage {
  id: number;
  sender: string;
  content: string;
  time: string;
  isCurrentUser: boolean;
}

interface ChatPanelProps {
  onClose: () => void;
}

const ChatPanel: React.FC<ChatPanelProps> = ({ onClose }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: 'John Doe',
      content: 'Hello everyone!',
      time: '10:30 AM',
      isCurrentUser: false,
    },
    {
      id: 2,
      sender: 'You',
      content: 'Hi John, glad you could join us.',
      time: '10:31 AM',
      isCurrentUser: true,
    },
    {
      id: 3,
      sender: 'Emma Smith',
      content: 'Let\'s get started with the agenda.',
      time: '10:32 AM',
      isCurrentUser: false,
    },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage: ChatMessage = {
        id: messages.length + 1,
        sender: 'You',
        content: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isCurrentUser: true,
      };
      
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-850 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg flex flex-col h-full w-full sm:w-80">
      <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700">
        <h3 className="font-medium">Chat</h3>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex flex-col ${msg.isCurrentUser ? 'items-end' : 'items-start'}`}
          >
            <div className="flex items-center gap-1 mb-1">
              <span className="text-xs font-medium">{msg.sender}</span>
              <span className="text-xs text-gray-500">{msg.time}</span>
            </div>
            <div 
              className={`px-3 py-2 rounded-lg max-w-[80%] ${
                msg.isCurrentUser 
                  ? 'bg-brand-indigo text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-3 border-t border-gray-200 dark:border-gray-700">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1"
          />
          <Button type="submit" size="sm">Send</Button>
        </form>
      </div>
    </div>
  );
};

export default ChatPanel;
