import { Tldraw } from 'tldraw';
import 'tldraw/tldraw.css';
import { useUUONAuth } from '@uuon/auth';

export default function CanvasPortal() {
  const { isVerified, loading } = useUUONAuth();

  if (loading) return <div className="flex items-center justify-center h-screen">Initializing...</div>;

  if (!isVerified) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        <div className="text-center">
          <p className="text-2xl mb-4">Human Verification Required</p>
          <p className="text-gray-400">Complete the verification challenge to access the canvas.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-black">
      <Tldraw />
    </div>
  );
}
