# Railway Deployment Configuration

## Prerequisites
```bash
npm install -g @railway/cli
railway login
```

## Deploy Steps

### 1. Create Railway Project
```bash
cd ~/Desktop/Replit/CLOUUD/uuon.world
railway init
# Select: Node.js
# Enter project name: uuon-world
```

### 2. Connect GitHub
```bash
railway link
# Select: uuonnouu/uuon.world
```

### 3. Set Environment Variables
```bash
railway env
# Add:
VITE_API_URL=https://api.uuon.world
VITE_UUON_CLOUD_URL=https://uuon-cloud.railway.app
VITE_PIEZ_CONTRACT=0xfb9c83432331EAf6f4a9D9488828823587d6f3da
NODE_ENV=production
```

### 4. Configure railway.json
```json
{
  "build": {
    "builder": "nixpacks",
    "buildCommand": "npm run build"
  },
  "deploy": {
    "startCommand": "npm run preview",
    "restartPolicyType": "on_failure",
    "restartPolicyMaxRetries": 5
  }
}
```

### 5. Deploy
```bash
railway up
# Deploys to: https://uuon-world-<random>.railway.app
```

### 6. Point Custom Domain
```bash
# In Railway dashboard:
# Settings → Domain → Add Domain
# Domain: uuon.world
# Target: Your Railway app URL

# In domain registrar (GoDaddy/Namecheap):
# Add CNAME record:
# CNAME uuon.world -> uuon-world-<random>.railway.app
```

## Monitoring

```bash
railway logs
railway status
railway env
```

## Post-Deployment
- [ ] Verify landing loads at uuon.world
- [ ] Test portal access from uuon.world/portal-canvas
- [ ] Verify auth integration working
- [ ] Check HTTPS certificate (auto via Railway)
- [ ] Monitor logs for errors

## Rollback
```bash
railway deployments
railway rollback <deployment-id>
```

## Current Status
- [ ] Railway project created
- [ ] GitHub connected
- [ ] Environment variables set
- [ ] railway.json configured
- [ ] Domain DNS updated
- [ ] Live monitoring active
