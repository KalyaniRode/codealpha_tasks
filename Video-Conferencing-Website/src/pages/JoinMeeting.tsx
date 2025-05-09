
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Video, VideoOff, Mic, MicOff, User } from 'lucide-react';

const JoinMeeting = () => {
  const navigate = useNavigate();
  const [meetingId, setMeetingId] = useState('');
  const [name, setName] = useState('');
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (meetingId.trim() && name.trim()) {
      // In a real app, this would validate the meeting ID
      // and join the actual meeting
      navigate('/meeting');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Join Meeting</CardTitle>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleJoin}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="meetingId">Meeting ID</Label>
                    <Input
                      id="meetingId"
                      placeholder="Enter meeting ID"
                      value={meetingId}
                      onChange={(e) => setMeetingId(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="pt-4">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-full h-28 w-28 flex items-center justify-center">
                        {isVideoOn ? (
                          <div className="text-center">
                            <User className="h-12 w-12 text-gray-500" />
                            <p className="text-xs mt-1 text-gray-500">Camera preview</p>
                          </div>
                        ) : (
                          <div className="text-center">
                            <VideoOff className="h-12 w-12 text-gray-400" />
                            <p className="text-xs mt-1 text-gray-500">Camera off</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="rounded-full"
                          onClick={() => setIsMuted(!isMuted)}
                        >
                          {isMuted ? (
                            <MicOff className="h-5 w-5 text-gray-500" />
                          ) : (
                            <Mic className="h-5 w-5" />
                          )}
                        </Button>
                        
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="rounded-full"
                          onClick={() => setIsVideoOn(!isVideoOn)}
                        >
                          {isVideoOn ? (
                            <Video className="h-5 w-5" />
                          ) : (
                            <VideoOff className="h-5 w-5 text-gray-500" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardFooter className="flex justify-center pt-6 pb-0">
                  <Button type="submit" className="button-gradient w-full">
                    Join Meeting
                  </Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JoinMeeting;
