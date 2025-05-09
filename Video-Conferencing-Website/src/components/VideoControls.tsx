
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  ScreenShare, 
  ScreenShareOff,
  MessageSquare,
  Phone,
  Users,
  Settings
} from 'lucide-react';
import { 
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface VideoControlsProps {
  isMuted: boolean;
  isVideoOn: boolean;
  isScreenSharing: boolean;
  isChatOpen: boolean;
  toggleMute: () => void;
  toggleVideo: () => void;
  toggleScreenShare: () => void;
  toggleChat: () => void;
  endCall: () => void;
  showParticipants: () => void;
  openSettings: () => void;
}

const VideoControls: React.FC<VideoControlsProps> = ({
  isMuted,
  isVideoOn,
  isScreenSharing,
  isChatOpen,
  toggleMute,
  toggleVideo,
  toggleScreenShare,
  toggleChat,
  endCall,
  showParticipants,
  openSettings
}) => {
  return (
    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full shadow-md py-3 px-2 flex items-center justify-center gap-2 sm:gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMute} 
            className={`rounded-full ${isMuted ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
          >
            {isMuted ? (
              <MicOff className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            ) : (
              <Mic className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>{isMuted ? 'Unmute' : 'Mute'}</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleVideo}
            className={`rounded-full ${!isVideoOn ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
          >
            {!isVideoOn ? (
              <VideoOff className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            ) : (
              <Video className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>{isVideoOn ? 'Turn off camera' : 'Turn on camera'}</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleScreenShare}
            className={`rounded-full ${isScreenSharing ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
          >
            {isScreenSharing ? (
              <ScreenShareOff className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            ) : (
              <ScreenShare className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>{isScreenSharing ? 'Stop sharing' : 'Share screen'}</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleChat}
            className={`rounded-full ${isChatOpen ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
          >
            <MessageSquare className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Chat</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={showParticipants}
            className="rounded-full"
          >
            <Users className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Participants</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={openSettings}
            className="rounded-full"
          >
            <Settings className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Settings</TooltipContent>
      </Tooltip>

      <Button 
        variant="destructive" 
        size="icon"
        onClick={endCall}
        className="rounded-full bg-red-500 hover:bg-red-600"
      >
        <Phone className="h-5 w-5 rotate-[135deg]" />
      </Button>
    </div>
  );
};

export default VideoControls;
