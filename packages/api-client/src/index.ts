// UUON API Client for UUON Cloud Backend

import type { SensorSession, TokenHolder } from '@uuon/types';

const API_BASE = process.env.VITE_API_URL || 'https://uuon-cloud.railway.app';

export class UUONAPIClient {
  private baseUrl: string;
  private sessionId?: string;

  constructor(baseUrl = API_BASE) {
    this.baseUrl = baseUrl;
  }

  // Sensor / Authentication
  async initSensorSession(deviceId: string): Promise<SensorSession> {
    const response = await fetch(`${this.baseUrl}/api/sensor/session/init`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ deviceId }),
    });
    const data = await response.json();
    this.sessionId = data.sessionId;
    return data;
  }

  async getSensorStatus(): Promise<SensorSession | null> {
    if (!this.sessionId) return null;
    const response = await fetch(`${this.baseUrl}/api/sensor/session/${this.sessionId}`);
    return response.json();
  }

  // Token / Holder Info
  async getTokenHolder(address: string): Promise<TokenHolder> {
    const response = await fetch(`${this.baseUrl}/api/token/holder/${address}`);
    return response.json();
  }

  // Chain Verification
  async verifyChain(limit = 1000) {
    const response = await fetch(`${this.baseUrl}/api/chain/verify?limit=${limit}`);
    return response.json();
  }

  // Dmension API Access (passthrough)
  async queryDmensionAPI(query: any) {
    const response = await fetch(`${this.baseUrl}/api/dmension/query`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(query),
    });
    return response.json();
  }

  getSessionId(): string | undefined {
    return this.sessionId;
  }

  setSessionId(id: string) {
    this.sessionId = id;
  }
}

export const apiClient = new UUONAPIClient();
