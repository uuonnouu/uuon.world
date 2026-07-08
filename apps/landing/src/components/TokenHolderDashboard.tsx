import React from 'react';
import { useUUONAuth } from '@uuon/auth';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface TokenHolderData {
  address: string;
  balance: number;
  monthlyCredits: number;
  usedCredits: number;
  computeHours: number;
  shapesGenerated: number;
  lastActivity: string;
  joinDate: string;
}

interface UsageData {
  date: string;
  credits: number;
  shapes: number;
}

export default function TokenHolderDashboard() {
  const { isVerified, humanScore, userId, credits } = useUUONAuth();
  const [data, setData] = React.useState<TokenHolderData | null>(null);
  const [usageHistory, setUsageHistory] = React.useState<UsageData[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Mock data - replace with API call
    const mockData: TokenHolderData = {
      address: userId || '0x1234...5678',
      balance: 2500,
      monthlyCredits: 2500000,
      usedCredits: 1847362,
      computeHours: 284,
      shapesGenerated: 1247,
      lastActivity: new Date().toISOString(),
      joinDate: '2024-06-15',
    };

    const mockUsage: UsageData[] = [
      { date: 'Jul 1', credits: 150000, shapes: 89 },
      { date: 'Jul 2', credits: 185000, shapes: 112 },
      { date: 'Jul 3', credits: 120000, shapes: 67 },
      { date: 'Jul 4', credits: 210000, shapes: 145 },
      { date: 'Jul 5', credits: 98000, shapes: 54 },
      { date: 'Jul 6', credits: 167000, shapes: 98 },
      { date: 'Jul 7', credits: 201000, shapes: 134 },
      { date: 'Jul 8', credits: 115000, shapes: 71 },
    ];

    setData(mockData);
    setUsageHistory(mockUsage);
    setLoading(false);
  }, [userId]);

  if (!isVerified) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <p>Token holder access requires human verification</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-white">
        <p>Loading dashboard...</p>
      </div>
    );
  }

  if (!data) return null;

  const usagePercent = (data.usedCredits / data.monthlyCredits) * 100;
  const remainingCredits = data.monthlyCredits - data.usedCredits;

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-2">PIEZ Token Dashboard</h1>
          <p className="text-gray-400">Monitor your compute credits and API usage</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Token Balance */}
          <div className="p-6 bg-gray-900 rounded-lg border border-cyan-500">
            <p className="text-gray-400 text-sm mb-2">PIEZ Balance</p>
            <p className="text-3xl font-bold text-cyan-400">{data.balance.toLocaleString()}</p>
            <p className="text-gray-500 text-xs mt-2">≈ {(data.balance * 1000).toLocaleString()} monthly credits</p>
          </div>

          {/* Monthly Credits Usage */}
          <div className="p-6 bg-gray-900 rounded-lg border border-purple-500">
            <p className="text-gray-400 text-sm mb-2">Monthly Credits Usage</p>
            <div className="flex items-end gap-4">
              <div>
                <p className="text-3xl font-bold text-purple-400">{usagePercent.toFixed(1)}%</p>
                <p className="text-gray-500 text-xs mt-2">{data.usedCredits.toLocaleString()} / {data.monthlyCredits.toLocaleString()}</p>
              </div>
              <div className="flex-1 h-12 bg-gray-800 rounded overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-600 to-purple-400 transition-all"
                  style={{ width: `${usagePercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Compute Hours */}
          <div className="p-6 bg-gray-900 rounded-lg border border-orange-500">
            <p className="text-gray-400 text-sm mb-2">Compute Hours</p>
            <p className="text-3xl font-bold text-orange-400">{data.computeHours}</p>
            <p className="text-gray-500 text-xs mt-2">This billing period</p>
          </div>

          {/* Shapes Generated */}
          <div className="p-6 bg-gray-900 rounded-lg border border-green-500">
            <p className="text-gray-400 text-sm mb-2">Shapes Generated</p>
            <p className="text-3xl font-bold text-green-400">{data.shapesGenerated.toLocaleString()}</p>
            <p className="text-gray-500 text-xs mt-2">Lifetime total</p>
          </div>
        </div>

        {/* Account Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-900 rounded-lg border border-gray-700">
            <h2 className="text-xl font-bold mb-4">Account Information</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Address</span>
                <span className="font-mono">{data.address}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Member Since</span>
                <span>{new Date(data.joinDate).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Last Activity</span>
                <span>{new Date(data.lastActivity).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Verification Status</span>
                <span className="text-green-400">✓ Verified</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Human Score</span>
                <span className="text-cyan-400">{humanScore?.toFixed(0)}%</span>
              </div>
            </div>
          </div>

          {/* Credits Allocation */}
          <div className="p-6 bg-gray-900 rounded-lg border border-gray-700">
            <h2 className="text-xl font-bold mb-4">Credits Allocation</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Used</span>
                  <span className="font-bold text-orange-400">{data.usedCredits.toLocaleString()}</span>
                </div>
                <div className="h-2 bg-gray-800 rounded overflow-hidden">
                  <div className="h-full bg-orange-500" style={{ width: `${usagePercent}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Remaining</span>
                  <span className="font-bold text-green-400">{remainingCredits.toLocaleString()}</span>
                </div>
                <div className="h-2 bg-gray-800 rounded overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: `${100 - usagePercent}%` }} />
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                Credits reset monthly. Unused credits do not carry over.
              </p>
            </div>
          </div>
        </div>

        {/* Usage Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Credit Usage Over Time */}
          <div className="p-6 bg-gray-900 rounded-lg border border-gray-700">
            <h2 className="text-xl font-bold mb-4">Daily Credit Usage</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={usageHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="date" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }} />
                <Line type="monotone" dataKey="credits" stroke="#06b6d4" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Shapes Generated Over Time */}
          <div className="p-6 bg-gray-900 rounded-lg border border-gray-700">
            <h2 className="text-xl font-bold mb-4">Daily Shapes Generated</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={usageHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="date" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }} />
                <Bar dataKey="shapes" fill="#a855f7" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Actions */}
        <div className="p-6 bg-gray-900 rounded-lg border border-gray-700">
          <h2 className="text-xl font-bold mb-4">Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-bold transition">
              Buy More PIEZ
            </button>
            <button className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-bold transition">
              View Transactions
            </button>
            <button className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-bold transition">
              Export Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
