import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useUUONAuth } from '@uuon/auth';
import { Button } from '@uuon/ui';

function UUONCube() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial 
        color="#00d9ff" 
        emissive="#00d9ff"
        emissiveIntensity={0.5}
      />
      <wireframe />
    </mesh>
  );
}

export default function LandingPage() {
  const { isVerified, humanScore, loading } = useUUONAuth();

  return (
    <div className="w-full h-screen bg-black text-white overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={100} depth={50} count={5000} factor={4} fade />
          <OrbitControls autoRotate autoRotateSpeed={2} />
          <UUONCube />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-8">
          {/* Hero */}
          <div className="space-y-4">
            <h1 className="text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              UUON
            </h1>
            <p className="text-3xl text-cyan-300">Reality Creator Platform</p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Harness the power of the Dmension Mathematical Universe. Enter infinite canvas, mission control, or computational engine.
            </p>
          </div>

          {/* Status */}
          <div className="flex items-center justify-center gap-4">
            <div className={`px-4 py-2 rounded-lg ${isVerified ? 'bg-green-900' : 'bg-gray-800'}`}>
              <p className="text-sm">
                {loading ? 'Initializing...' : isVerified ? '✓ Human Verified' : `Human Score: ${humanScore.toFixed(0)}%`}
              </p>
            </div>
          </div>

          {/* Portal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* Canvas Portal */}
            <a
              href="/portal-canvas"
              className="group p-6 bg-gray-900 border border-cyan-500 rounded-lg hover:border-cyan-300 transition transform hover:scale-105 cursor-pointer"
            >
              <div className="text-3xl mb-4">∞</div>
              <h3 className="text-xl font-bold mb-2">Canvas</h3>
              <p className="text-gray-400 text-sm">Infinite whiteboard for mathematical objects</p>
            </a>

            {/* Mission Control Portal */}
            <a
              href="/portal-mission"
              className="group p-6 bg-gray-900 border border-purple-500 rounded-lg hover:border-purple-300 transition transform hover:scale-105 cursor-pointer"
            >
              <div className="text-3xl mb-4">⌘</div>
              <h3 className="text-xl font-bold mb-2">Mission</h3>
              <p className="text-gray-400 text-sm">Developer console with AI agents</p>
            </a>

            {/* Engine Portal */}
            <a
              href="/portal-engine"
              className="group p-6 bg-gray-900 border border-orange-500 rounded-lg hover:border-orange-300 transition transform hover:scale-105 cursor-pointer"
            >
              <div className="text-3xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold mb-2">Engine</h3>
              <p className="text-gray-400 text-sm">Computational graphs + 3D visualization</p>
            </a>
          </div>

          {/* CTA */}
          <Button
            onClick={() => window.location.href = '/portal-canvas'}
            className="mt-8 text-lg"
            size="lg"
          >
            Enter Universe
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 right-4 z-10 text-gray-500 text-sm">
        <p>Phase 7.0 • UUON Foundation Inc.</p>
      </div>
    </div>
  );
}
