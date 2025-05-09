
import React, { useState } from 'react';
import VideoControls from '@/components/VideoControls';
import VideoParticipant from '@/components/VideoParticipant';
import ChatPanel from '@/components/ChatPanel';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Copy, ArrowLeft } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const MeetingRoom = () => {
  const { toast } = useToast();
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Mock meeting participants
  const participants = [
    { id: 1, name: 'You', isVideoOn: true, isMuted: isMuted, isCurrentUser: true },
    { id: 2, name: 'John Doe', isVideoOn: true, isMuted: false },
    { id: 3, name: 'Emma Smith', isVideoOn: false, isMuted: true },
    { id: 4, name: 'Michael Brown', isVideoOn: true, isMuted: false },
  ];

  // Mock meeting ID
  const meetingId = "abc-xyz-123";

  const handleCopyMeetingId = () => {
    navigator.clipboard.writeText(meetingId);
    toast({
      title: "Meeting ID copied",
      description: "The meeting ID has been copied to your clipboard.",
    });
  };

  const toggleMute = () => setIsMuted(!isMuted);
  const toggleVideo = () => setIsVideoOn(!isVideoOn);
  const toggleScreenShare = () => setIsScreenSharing(!isScreenSharing);
  const toggleChat = () => setIsChatOpen(!isChatOpen);
  const endCall = () => window.location.href = "/";
  
  const showParticipants = () => {
    toast({
      title: "Participants",
      description: `${participants.length} people in this meeting`,
    });
  };
  
  const openSettings = () => {
    toast({
      title: "Settings",
      description: "Settings dialog would open here",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      {/* Meeting header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 p-3">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-lg font-medium">ConnectMeet</h1>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-md flex items-center">
              <span className="px-3 py-1 text-sm font-medium">ID: {meetingId}</span>
              <Button variant="ghost" size="sm" onClick={handleCopyMeetingId}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Meeting content */}
      <div className="flex-1 container mx-auto p-4 flex">
        <div className={`flex-1 flex flex-col ${isChatOpen ? 'mr-4' : ''}`}>
          {/* Video grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {participants.map((participant) => (
              <div key={participant.id} className="h-full">
                <VideoParticipant
                  name={participant.name}
                  isVideoOn={participant.isCurrentUser ? isVideoOn : participant.isVideoOn}
                  isMuted={participant.isMuted}
                  isScreenSharing={participant.isCurrentUser && isScreenSharing}
                  isCurrentUser={participant.isCurrentUser}
                />
              </div>
            ))}
          </div>
          
          {/* Controls */}
          <div className="flex justify-center mt-auto py-4">
            <VideoControls
              isMuted={isMuted}
              isVideoOn={isVideoOn}
              isScreenSharing={isScreenSharing}
              isChatOpen={isChatOpen}
              toggleMute={toggleMute}
              toggleVideo={toggleVideo}
              toggleScreenShare={toggleScreenShare}
              toggleChat={toggleChat}
              endCall={endCall}
              showParticipants={showParticipants}
              openSettings={openSettings}
            />
          </div>
        </div>
        
        {/* Chat panel */}
        {isChatOpen && (
          <div className="hidden sm:block w-80">
            <ChatPanel onClose={toggleChat} />
          </div>
        )}
        
        {/* Mobile chat panel overlay */}
        {isChatOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 sm:hidden flex items-center justify-center p-4">
            <div className="w-full max-w-md h-[80vh]">
              <ChatPanel onClose={toggleChat} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MeetingRoom;
