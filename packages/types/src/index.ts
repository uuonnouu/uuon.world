// UUON Universe Types

export interface SensorSession {
  sessionId: string;
  deviceId: string;
  humanScore: number;
  botScore: number;
  verified: boolean;
  verifiedAt?: number;
}

export interface UniverseObject {
  id: string;
  type: 'equation' | 'simulation' | 'visualization' | 'constant' | 'theorem';
  label: string;
  data: Record<string, any>;
  position?: { x: number; y: number };
  dimensions?: { width: number; height: number };
}

export interface CanvasNode extends UniverseObject {
  connections: string[]; // IDs of connected nodes
  metadata: {
    createdAt: number;
    updatedAt: number;
    author?: string;
    tags: string[];
  };
}

export interface MissionControlSession {
  id: string;
  userId: string;
  activeFile?: string;
  terminal?: {
    output: string;
    lastCommand?: string;
  };
  agents: AIAgent[];
}

export interface AIAgent {
  id: string;
  name: string;
  role: 'formulasuggestion' | 'optimization' | 'verification';
  active: boolean;
}

export interface EngineOutputs {
  graphData: Record<string, any>;
  visualization3D?: {
    vertices: number[];
    faces: number[];
  };
  metadata: {
    computeTime: number;
    complexity: number;
  };
}

export interface TokenHolder {
  address: string;
  balance: string;
  computeCredits: number;
  apiCallsUsed: number;
  apiCallsRemaining: number;
  lastTopUp: string;
}
