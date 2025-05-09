
import React from 'react';
import { MicOff, User } from 'lucide-react';

interface VideoParticipantProps {
  name: string;
  isVideoOn: boolean;
  isMuted: boolean;
  isScreenSharing?: boolean;
  isCurrentUser?: boolean;
}

const VideoParticipant: React.FC<VideoParticipantProps> = ({
  name,
  isVideoOn,
  isMuted,
  isScreenSharing = false,
  isCurrentUser = false
}) => {
  return (
    <div className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm h-full">
      {isVideoOn ? (
        <div className="bg-gray-800 aspect-video w-full h-full flex items-center justify-center">
          {/* This would be a real video stream */}
          <div className="text-gray-500 flex items-center justify-center w-full h-full">
            <User className="h-12 w-12 text-gray-400" />
          </div>
        </div>
      ) : (
        <div className="bg-gray-100 dark:bg-gray-800 aspect-video w-full h-full flex items-center justify-center">
          <div className="h-20 w-20 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-2xl font-semibold text-gray-600 dark:text-gray-400">
            {name.charAt(0).toUpperCase()}
          </div>
        </div>
      )}
      
      {/* Status indicators */}
      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
        <div className="bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-md text-sm flex items-center gap-2">
          {name} {isCurrentUser && "(You)"}
          {isMuted && <MicOff className="h-3.5 w-3.5" />}
        </div>
        
        {isScreenSharing && (
          <div className="bg-blue-500/90 text-white px-2 py-0.5 rounded text-xs">
            Sharing
          </div>
        )}
      </div>
      
      {/* Highlight border when speaking */}
      {isCurrentUser && (
        <div className="absolute inset-0 border-2 border-brand-indigo rounded-xl"></div>
      )}
    </div>
  );
};

export default VideoParticipant;
