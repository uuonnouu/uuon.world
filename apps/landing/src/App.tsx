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
    </mesh>
  );
}

export default function LandingPage() {
  const { isVerified, humanScore, loading } = useUUONAuth();
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden">
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
                Harness the Dmension Mathematical Universe. Infinite canvas, mission control, computational engine.
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <p className="text-gray-500 text-sm">Scroll to explore</p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🌌', title: 'Mathematical Universe', desc: 'Access 570+ geometric shapes spanning cryptography, quantum computing, and field theory' },
              { icon: '🔐', title: 'Human Verification', desc: 'Proprietary sensor-based authentication ensures only humans can access the platform' },
              { icon: '⚡', title: 'Real-time Compute', desc: 'Harness the Dmension API for instant 3D/4D geometric generation' },
              { icon: '💎', title: 'Token-Gated Access', desc: 'PIEZ holders unlock premium compute credits and API quotas' },
              { icon: '🔗', title: 'Tamper-Proof Audit', desc: 'Phase 5A chain linking ensures immutable provenance and compliance' },
              { icon: '📊', title: 'Research Export', desc: 'Generate publications, proofs, and datasets directly from visualizations' },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 bg-gray-900 rounded-lg border border-gray-700 hover:border-cyan-500 transition">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOKEN SECTION */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">PIEZ Token</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Token Info */}
            <div className="space-y-6">
              <div className="p-6 bg-gray-900 rounded-lg border border-cyan-500">
                <p className="text-gray-400 text-sm mb-2">Contract Address</p>
                <p className="font-mono text-sm break-all">0xfb9c83432331EAf6f4a9D9488828823587d6f3da</p>
              </div>

              <div className="p-6 bg-gray-900 rounded-lg border border-cyan-500">
                <p className="text-gray-400 text-sm mb-2">Network</p>
                <p className="font-bold">Base Mainnet</p>
              </div>

              <div className="p-6 bg-gray-900 rounded-lg border border-cyan-500">
                <p className="text-gray-400 text-sm mb-2">Use Cases</p>
                <ul className="text-sm space-y-2">
                  <li>✓ Compute credit allocation</li>
                  <li>✓ API rate limit increases</li>
                  <li>✓ Governance voting</li>
                  <li>✓ Research data access</li>
                </ul>
              </div>

              <div className="flex gap-4">
                <Button variant="secondary" size="md">Buy PIEZ</Button>
                <Button variant="secondary" size="md">View on BaseScan</Button>
              </div>
            </div>

            {/* Token Stats */}
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-cyan-900 to-purple-900 rounded-lg border border-cyan-500">
                <p className="text-gray-300 text-sm mb-2">Compute Model</p>
                <p className="text-2xl font-bold">1 PIEZ = 1,000 API Credits</p>
                <p className="text-gray-400 text-xs mt-2">Renews monthly • Non-expiring balance</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-900 rounded-lg border border-gray-700">
                  <p className="text-gray-400 text-xs mb-1">Holders</p>
                  <p className="text-xl font-bold">1,247</p>
                </div>
                <div className="p-4 bg-gray-900 rounded-lg border border-gray-700">
                  <p className="text-gray-400 text-xs mb-1">Total Supply</p>
                  <p className="text-xl font-bold">1M PIEZ</p>
                </div>
              </div>

              <div className="p-6 bg-gray-900 rounded-lg border border-gray-700">
                <p className="text-gray-400 text-sm mb-4">Top Holders</p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Founder</span>
                    <span className="font-bold">250,000 PIEZ</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Community</span>
                    <span className="font-bold">750,000 PIEZ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Team</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Founder */}
            <div className="p-8 bg-gray-900 rounded-lg border border-cyan-500">
              <div className="text-5xl mb-4">👨‍💼</div>
              <h3 className="text-2xl font-bold mb-2">Phillip Aguilar Ruiz III</h3>
              <p className="text-cyan-300 mb-4">Founder & Chief Architect</p>
              
              <div className="space-y-3 text-sm text-gray-400 mb-6">
                <p><strong>Background:</strong> Mathematical systems design, cryptographic protocols, parametric geometry</p>
                <p><strong>Expertise:</strong> Dmension Mathematical Universe creator, UUON Foundation architect</p>
                <p><strong>Vision:</strong> Bridging mathematics, cryptography, and human verification into a unified reality platform</p>
              </div>

              <div className="flex gap-3">
                <a href="https://linkedin.com/in/phillip-aguilar-ruiz-iii-a3a63a238/" className="text-cyan-400 hover:text-cyan-300">LinkedIn</a>
                <a href="https://github.com/uuonnouu" className="text-cyan-400 hover:text-cyan-300">GitHub</a>
              </div>
            </div>

            {/* Mission */}
            <div className="p-8 bg-gray-900 rounded-lg border border-purple-500 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              
              <p className="text-gray-300 mb-4">
                Create a mathematical reality platform where verified humans can explore, create, and monetize geometric insights at the intersection of cryptography, quantum computing, and pure mathematics.
              </p>

              <p className="text-gray-300 mb-4">
                We believe computation should be trustworthy, human-centric, and mathematically grounded.
              </p>

              <div className="pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400">Founded: 2024</p>
                <p className="text-sm text-gray-400">Headquarters: Kassel, Germany</p>
                <p className="text-sm text-gray-400">Network: Base Mainnet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES SECTION */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Whitepaper', desc: 'Complete technical architecture', icon: '📄', href: '#' },
              { title: 'API Docs', desc: 'Integration guide & reference', icon: '🔌', href: '#' },
              { title: 'GitHub', desc: 'Open source repositories', icon: '🐙', href: 'https://github.com/uuonnouu' },
              { title: 'Status', desc: 'System health & uptime', icon: '🟢', href: '#' },
            ].map((resource, idx) => (
              <a
                key={idx}
                href={resource.href}
                className="p-6 bg-gray-900 rounded-lg border border-gray-700 hover:border-cyan-500 transition text-center"
              >
                <div className="text-3xl mb-3">{resource.icon}</div>
                <h3 className="font-bold mb-1">{resource.title}</h3>
                <p className="text-gray-400 text-sm">{resource.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 bg-gray-950 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-lg font-bold mb-4">UUON Foundation</h3>
              <p className="text-gray-400 text-sm">Reality Creator Platform</p>
            </div>

            {/* Product */}
            <div>
              <p className="text-sm font-bold text-gray-300 mb-3">Product</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400">Canvas</a></li>
                <li><a href="#" className="hover:text-cyan-400">Mission Control</a></li>
                <li><a href="#" className="hover:text-cyan-400">Engine</a></li>
              </ul>
            </div>

            {/* Developers */}
            <div>
              <p className="text-sm font-bold text-gray-300 mb-3">Developers</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400">API Docs</a></li>
                <li><a href="#" className="hover:text-cyan-400">GitHub</a></li>
                <li><a href="#" className="hover:text-cyan-400">Status</a></li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <p className="text-sm font-bold text-gray-300 mb-3">Community</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400">Discord</a></li>
                <li><a href="#" className="hover:text-cyan-400">Twitter</a></li>
                <li><a href="#" className="hover:text-cyan-400">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>© 2026 UUON Foundation Inc. All rights reserved. | <a href="#" className="hover:text-gray-400">Privacy</a> | <a href="#" className="hover:text-gray-400">Terms</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
