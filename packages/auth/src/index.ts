// UUON Authentication Hook

import { useEffect, useState } from 'react';
import type { SensorSession } from '@uuon/types';
import { apiClient } from '@uuon/api-client';

export function useUUONAuth() {
  const [session, setSession] = useState<SensorSession | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const sessionId = sessionStorage.getItem('sensorSessionId');
        
        if (sessionId) {
          apiClient.setSessionId(sessionId);
          const status = await apiClient.getSensorStatus();
          setSession(status);
        } else {
          // Initialize new session
          const deviceId = `device-${navigator.hardwareConcurrency || 4}`;
          const newSession = await apiClient.initSensorSession(deviceId);
          sessionStorage.setItem('sensorSessionId', newSession.sessionId);
          setSession(newSession);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Auth failed');
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const isVerified = session?.verified ?? false;
  const humanScore = session?.humanScore ?? 0;

  return {
    session,
    loading,
    error,
    isVerified,
    humanScore,
    sessionId: apiClient.getSessionId(),
  };
}
