# UUON.World — Universe Control Center Monorepo

**Status:** ✓ Phase 7 Monorepo Created  
**Version:** 1.0.0  
**Date:** July 8, 2026

## Architecture

```
uuon-world/
├── apps/
│   ├── landing          # Landing page hub (port 3000)
│   ├── portal-canvas    # tldraw infinite canvas (port 3001)
│   ├── portal-mission   # Cate IDE mission control (port 3001)
│   └── portal-engine    # React Flow + Three.js (port 3002)
├── packages/
│   ├── ui               # Shared UI components
│   ├── auth             # UUON Cloud authentication
│   ├── api-client       # UUON Cloud + Dmension API client
│   └── types            # Shared TypeScript types
└── docs/                # Whitepaper, guides, API docs
```

## Quick Start

```bash
# Install dependencies
npm install

# Start all apps in development
npm run dev

# Build for production
npm run build

# Clean workspace
npm run clean
```

## Apps

### Landing (`localhost:3000`)
Professional hub with:
- 3D animated UUON cube
- Human verification status
- Three portal navigation cards
- Token holder dashboard access

### Canvas Portal (`localhost:3001`)
Infinite whiteboard with:
- tldraw interactive canvas
- Drag-and-drop mathematical objects
- Real-time node linking
- Export to blockchain

### Mission Portal (`localhost:3001`)
Developer console with:
- Monaco editor for formulas
- Terminal for live execution
- AI agent suggestions
- Code compilation feedback

### Engine Portal (`localhost:3002`)
Computational visualization with:
- React Flow graphs
- Three.js 3D/4D rendering
- Real-time computation
- Performance metrics

## Authentication

All portals require UUON Cloud sensor verification (Phase 6).

```typescript
import { useUUONAuth } from '@uuon/auth';

const { isVerified, humanScore, loading } = useUUONAuth();
```

## Environment Variables

```
VITE_API_URL=https://uuon-cloud.railway.app
VITE_PIEZ_CONTRACT=0xfb9c83432331EAf6f4a9D9488828823587d6f3da
VITE_NETWORK=base-mainnet
```

## Deployment

Deploy to Railway:
```bash
npm run build
railway deploy
```

DNS: `uuon.world` → Railway app

## Next Steps

- [ ] Path B: Professional landing page completion
- [ ] Path C: Domain email + social profiles + BaseScan resubmission
- [ ] Tldraw canvas fully functional
- [ ] Mission control Monaco editor
- [ ] Engine 3D visualization
- [ ] Token holder dashboard

---

**Built with:** Turbo monorepo, React, Vite, tldraw, Three.js, React Flow, Monaco

**Connected to:** UUON Cloud (Phase 1-6 complete)

Ready for production deployment.
