import { useUUONAuth } from '@uuon/auth';

export default function MissionPortal() {
  const { isVerified, loading } = useUUONAuth();

  if (loading) return <div className="flex items-center justify-center h-screen bg-black text-white">Initializing...</div>;

  if (!isVerified) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        <div className="text-center">
          <p className="text-2xl mb-4">Mission Control Locked</p>
          <p className="text-gray-400">Verify human identity to access developer console.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-gray-950 text-white flex">
      {/* Editor Placeholder */}
      <div className="flex-1 border-r border-gray-700 p-4">
        <p className="text-gray-400 text-sm">Monaco Editor • Coming Soon</p>
      </div>

      {/* Terminal Placeholder */}
      <div className="flex-1 border-l border-gray-700 p-4">
        <p className="text-gray-400 text-sm">Terminal • Coming Soon</p>
      </div>
    </div>
  );
}
