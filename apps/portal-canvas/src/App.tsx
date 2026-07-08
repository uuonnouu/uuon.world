import React from 'react';
import { useUUONAuth } from '@uuon/auth';
import Tldraw from 'tldraw';
import 'tldraw/tldraw.css';

interface PortalState {
  isVerified: boolean;
  humanScore: number;
  userId: string;
  creditsRemaining: number;
}

export default function CanvasPortal() {
  const { isVerified, humanScore, loading, userId, credits } = useUUONAuth();
  const [portalState, setPortalState] = React.useState<PortalState>({
    isVerified: false,
    humanScore: 0,
    userId: '',
    creditsRemaining: 0,
  });

  React.useEffect(() => {
    if (!loading) {
      setPortalState({
        isVerified: isVerified || humanScore >= 60,
        humanScore,
        userId: userId || 'anonymous',
        creditsRemaining: credits || 0,
      });
    }
  }, [loading, isVerified, humanScore, userId, credits]);

  // Access Control: Only verified humans
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <div className="mb-4 text-3xl">⏳</div>
          <p>Initializing Canvas Portal...</p>
          <p className="text-gray-500 text-sm mt-2">Verifying human identity</p>
        </div>
      </div>
    );
  }

  if (!portalState.isVerified) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-white">
        <div className="text-center max-w-md">
          <div className="mb-4 text-5xl">🚫</div>
          <h1 className="text-2xl font-bold mb-2">Canvas Portal Restricted</h1>
          <p className="text-gray-400 mb-4">
            Human verification required. Your current human score: {portalState.humanScore.toFixed(0)}%
          </p>
          <p className="text-sm text-gray-500">
            Minimum score required: 60%
          </p>
          <div className="mt-6 p-4 bg-gray-900 rounded-lg border border-gray-700">
            <p className="text-xs text-gray-400">To gain access, complete human verification on the main platform.</p>
          </div>
        </div>
      </div>
    );
  }

  // Portal Verified
  return (
    <div className="flex h-screen bg-black text-white">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-950 border-b border-gray-800 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold">UUON Canvas</h1>
          <span className="text-xs bg-green-900 px-2 py-1 rounded">✓ Verified</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-sm text-gray-400">
            <p>Credits: <span className="text-cyan-400 font-bold">{portalState.creditsRemaining}</span></p>
          </div>
          <div className="text-sm text-gray-400">
            <p>Score: <span className="text-cyan-400 font-bold">{portalState.humanScore.toFixed(0)}%</span></p>
          </div>
          <div className="text-sm text-gray-400">
            <p>User: <span className="font-mono text-xs">{portalState.userId.slice(0, 8)}...</span></p>
          </div>
        </div>
      </div>

      {/* Tldraw Canvas */}
      <div className="flex-1 mt-14">
        <Tldraw
          persistenceKey="uuon-canvas-portal"
          options={{
            maxPages: 100,
            showDebugPanel: false,
          }}
        />
      </div>

      {/* Footer Info */}
      <div className="fixed bottom-4 right-4 text-xs text-gray-500 max-w-xs">
        <p>🔒 Portal access authenticated via Phase 6 human verification</p>
      </div>
    </div>
  );
}
