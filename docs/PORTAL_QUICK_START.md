# Portal Documentation & Quick-Start Guides

## Overview

UUON Foundation provides three integrated portals for mathematical computing, accessed via a unified authentication system.

---

## PORTAL 1: CANVAS (Infinite Whiteboard)

### What is Canvas?
Infinite 2D drawing board for creating, arranging, and composing mathematical objects. Perfect for visual design, prototyping, and collaborative ideation.

### Features
- ✓ Infinite canvas (zoom/pan unlimited)
- ✓ Parametric shape library (570+ shapes)
- ✓ Real-time collaboration (multi-user editing)
- ✓ Vector drawing tools
- ✓ Export to PNG/SVG/JSON
- ✓ Version history (auto-save)

### Quick Start

#### 1. Access Canvas
```
https://uuon.world/portal-canvas
```

#### 2. Create First Shape
```
1. Click "Insert" menu
2. Select "Dmension Shape"
3. Choose "Gyroid" from library
4. Set parameters (frequency: 7.44, scale: 1.038)
5. Click "Place" on canvas
```

#### 3. Transform
```
• Drag: Move shape
• Scroll: Zoom in/out
• Shift + Drag: Rotate
• Ctrl + Drag: Scale
```

#### 4. Organize
```
• Right-click: Context menu
• Group (Ctrl+G): Group multiple shapes
• Lock: Prevent accidental moves
• Arrange: Bring to front/send to back
```

#### 5. Export
```
• File → Export As PNG (rasterized)
• File → Export As SVG (vectors)
• File → Export As JSON (parametric)
```

### Tips
- Zoom to 10x for detail work
- Group related shapes for bulk operations
- Use layers for organization
- Real-time sync: all changes auto-save + share with collaborators

### Credits
Each shape placement: ~100 PIEZ credits  
Rendering at 2K: ~50 credits  
Rendering at 4K: ~200 credits  

---

## PORTAL 2: MISSION CONTROL (Developer Console)

### What is Mission Control?
Integrated development environment for writing, debugging, and composing mathematical functions. Terminal access to UUON Cloud APIs.

### Features
- ✓ Code editor (Monaco with syntax highlighting)
- ✓ Terminal interface (execute functions)
- ✓ Function library (580+ built-in functions)
- ✓ Debugger with breakpoints
- ✓ Performance profiling
- ✓ Version control (git-like)

### Quick Start

#### 1. Access Mission Control
```
https://uuon.world/portal-mission
```

#### 2. Create First Function
```
// In editor, write:
function renderTorus(R = 10, r = 5, resolution = 2048) {
  return dmension.shapes.torus({
    majorRadius: R,
    minorRadius: r,
    resolution: resolution
  });
}

// Save: Ctrl+S
// Name: "my_first_torus"
```

#### 3. Test Function
```
// In terminal:
$ renderTorus(15, 7, 4096)
// Returns: Geometry object
// Time: 145ms
// Credits: 300 PIEZ
```

#### 4. Compose Functions
```
function renderGyroidTorus() {
  const gyroid = dmension.shapes.gyroid({ frequency: 7.44 });
  const torus = renderTorus(10, 5);
  return dmension.operations.intersect(gyroid, torus);
}

$ renderGyroidTorus()
// Returns: Composite geometry
```

#### 5. Export
```
$ export renderTorus
// Exports to Canvas as callable shape
// Exports to mission library as reusable function
```

### Tips
- Use autocomplete (Ctrl+Space) to find functions
- Debugger: Click line number to set breakpoint
- Performance: Check profiler for optimization
- Version control: All functions automatically versioned

### Credits
Function execution: Variable (10-1000 PIEZ depending on complexity)
IDE storage: 1 MB = 1 credit/month

---

## PORTAL 3: ENGINE (Computational Graph)

### What is Engine?
3D computational visualization engine. Build data flows, process geometric data, render real-time 3D scenes.

### Features
- ✓ Node-based graph editor
- ✓ Real-time 3D preview (Three.js)
- ✓ 50+ node types (transform, combine, filter, etc.)
- ✓ Physics simulation
- ✓ Material editing
- ✓ 4K render export

### Quick Start

#### 1. Access Engine
```
https://uuon.world/portal-engine
```

#### 2. Create Simple Graph
```
1. Click "Insert Node"
2. Choose "Dmension Input"
3. Select "Gyroid" shape
4. Click on canvas to place
```

#### 3. Add Nodes
```
1. Right-click → Add Node
2. Transform: Add Rotate node
3. Render: Add 3D Viewer node
4. Connect: Click output port → drag to input port
```

#### 4. Configure
```
Rotate Node:
  - Axis: Z
  - Angle: 45°
  - Speed: 0° (static) or 1°/frame (animation)

3D Viewer:
  - Resolution: 2048×2048
  - Background: black
  - Lighting: 3-point
```

#### 5. Render & Export
```
1. Click "Render" button
2. Quality: Draft (512), Standard (2048), High (4096)
3. Export: PNG, JPG, EXR, GLB
```

### Tips
- Preview updates in real-time as you connect nodes
- Bypass node (right-click) to skip in graph
- Record animation (click record, set duration)
- Shift+click nodes to select multiple

### Credits
Render at 2K: 100 PIEZ  
Render at 4K: 400 PIEZ  
Animation (60 frames): 600 PIEZ  

---

## AUTHENTICATION & CREDITS

### Human Verification
All portals require Phase 6 verification:
- Sensor-based behavioral analysis
- 7-metric human score
- Minimum 60% required for access
- Real-time scoring

### Token System
PIEZ token grants compute credits:
- 1 PIEZ = 1,000 monthly credits
- Monthly reset (non-expiring balance)
- Buy more: https://uuon.world/token

### Tracking Usage
Dashboard: https://uuon.world/dashboard
- Real-time credit consumption
- Usage history (daily charts)
- Cost breakdown per portal
- Projections

---

## INTEGRATION: USING ALL 3 PORTALS TOGETHER

### Typical Workflow

#### Step 1: Design in Canvas (5-30 min)
```
• Sketch shapes arrangement
• Compose parametric objects
• Export as JSON
• ~500 PIEZ
```

#### Step 2: Code in Mission Control (10-60 min)
```
• Write function to automate shape generation
• Test with different parameters
• Compose with other functions
• ~1,000 PIEZ
```

#### Step 3: Render in Engine (5-20 min)
```
• Build computational graph
• Add transforms, materials
• Render high-quality output
• Export as 3D model
• ~2,000 PIEZ
```

**Total per workflow:** ~3,500 PIEZ (~3.5 PIEZ tokens)

---

## TROUBLESHOOTING

### Canvas Won't Load
```
1. Clear browser cache (Ctrl+Shift+Del)
2. Try incognito mode
3. Verify human verification (dashboard)
4. Check browser console (F12) for errors
```

### Mission Control Terminal Error
```
1. Check function syntax (red underlines)
2. Verify shape exists in library
3. Check PIEZ balance (need minimum 10)
4. Restart terminal (Ctrl+Shift+K)
```

### Engine 3D Preview Black
```
1. Rotate view (middle mouse button)
2. Zoom to fit (scroll wheel)
3. Check lighting nodes connected
4. Try different render quality
```

### Out of Credits
```
1. Buy more PIEZ on Base Mainnet
2. Use free tier shapes (limited)
3. Share credits with collaborators
4. Wait for monthly reset
```

---

## API REFERENCE

### Canvas API
```typescript
import { useCanvas } from '@uuon/canvas';

const canvas = useCanvas();
canvas.addShape('gyroid', { frequency: 7.44 });
canvas.export('svg');
```

### Mission API
```typescript
import { useMission } from '@uuon/mission';

const fn = useMission.define('myFunc', (x, y) => x + y);
await fn.execute(10, 20);
```

### Engine API
```typescript
import { useEngine } from '@uuon/engine';

const graph = useEngine.createGraph();
graph.addNode('dmension-input', 'gyroid');
graph.addNode('transform-rotate', { axis: 'z', angle: 45 });
graph.render({ quality: 4096 });
```

---

## SUPPORT

- **Docs:** https://uuon.world/docs
- **Issues:** https://github.com/uuonnouu/uuon.world/issues
- **Discord:** https://discord.gg/uuon
- **Email:** support@uuon.world

---

**Status:** All three portals operational, documentation complete.

**Last Updated:** July 8, 2026

**Next:** Deployment to Railway + Social activation
