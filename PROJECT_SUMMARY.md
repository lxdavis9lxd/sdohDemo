# SDOH Web Application - Project Summary

## 🎯 Project Overview

A full-stack web application showcasing the Social Determinants of Health (SDOH) framework with:
- **Backend**: Express.js REST API serving SDOH data
- **Frontend**: React + Vite with interactive UI and routing
- **Design**: Responsive, animated, color-coded categories

## 📊 SDOH Categories Implemented

1. **Economic Stability** 💰 - Blue (#4A90E2)
2. **Education Access and Quality** 📚 - Green (#50C878)
3. **Healthcare Access and Quality** 🏥 - Red (#E74C3C)
4. **Neighborhood and Built Environment** 🏘️ - Purple (#9B59B6)
5. **Social and Community Context** 🤝 - Orange (#F39C12)

## 🚀 Quick Start Commands

### Option 1: Manual Start (Recommended for Development)

**Terminal 1 - Backend:**
```bash
cd /workspaces/sdohDemo/backend
npm start
```

**Terminal 2 - Frontend:**
```bash
cd /workspaces/sdohDemo/frontend
npm run dev
```

### Option 2: Using Start Script
```bash
cd /workspaces/sdohDemo
./start.sh
```

### Access the Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000

## 📂 File Structure

```
sdohDemo/
├── backend/
│   ├── data/sdohData.js      # 5 SDOH categories with detailed content
│   ├── server.js             # Express server with 3 API endpoints
│   └── package.json          # Dependencies: express, cors
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── HomePage.jsx      # Landing page with chevron links
│   │   │   ├── HomePage.css      # Animated, gradient background
│   │   │   ├── CategoryPage.jsx  # Detail page for each category
│   │   │   └── CategoryPage.css  # Dynamic color theming
│   │   ├── App.jsx               # Router setup
│   │   └── main.jsx              # Entry point
│   ├── index.html
│   ├── vite.config.js            # Proxy to backend
│   └── package.json              # Dependencies: react, react-router-dom
│
├── README.md                 # Comprehensive documentation
├── .gitignore               # Standard Node.js gitignore
└── start.sh                 # Convenience script to start both servers
```

## 🎨 Features Implemented

### Homepage (`/`)
- **Visual Design**: Gradient purple background with white content cards
- **SDOH Chevrons**: 5 color-coded, animated chevron-style links
- **Hover Effects**: Smooth transitions and transforms
- **Responsive**: Mobile-friendly layout
- **Information Section**: SDOH overview and explanation

### Category Pages (`/category/:categoryId`)
- **Dynamic Routing**: React Router handles navigation
- **Color Theming**: Each page uses category's unique color
- **Content Sections**:
  - Overview description
  - Key factors (grid layout with numbered cards)
  - Health impact (highlighted card)
  - Statistics (data cards)
  - Call to action
- **Navigation**: Back to home link
- **Animations**: Fade-in effects on scroll

### Backend API
- `GET /api/health` - Health check
- `GET /api/sdoh` - Get all categories
- `GET /api/sdoh/:category` - Get specific category

### Data Structure
Each category includes:
- ID, title, color, icon
- Description
- 6+ key factors
- Health impact statement
- 3+ statistics

## 🔧 Technical Details

### Backend (Express.js)
- **Port**: 3000
- **CORS**: Enabled for frontend access
- **ES Modules**: Using `type: "module"` in package.json
- **Data**: Exported from separate data file for maintainability

### Frontend (React + Vite)
- **Port**: 5173
- **Proxy**: API requests proxied to backend
- **Routing**: React Router v6 for SPA navigation
- **Styling**: Component-specific CSS files
- **Build Tool**: Vite for fast HMR and builds

## 🎯 Current Status

✅ All tasks completed:
1. ✅ Backend Express server with API routes
2. ✅ Frontend Vite + React application
3. ✅ SDOH data with 5 categories
4. ✅ Homepage with interactive chevron visualization
5. ✅ Subpages for each SDOH category
6. ✅ Responsive styling and animations
7. ✅ Complete documentation

## 🌐 Application Flow

1. User visits homepage at `http://localhost:5173`
2. Homepage fetches SDOH data from API
3. Displays 5 color-coded chevron links
4. User clicks a chevron (e.g., "Economic Stability")
5. Routes to `/category/economic-stability`
6. Category page fetches specific data from API
7. Displays comprehensive information about that determinant
8. User can navigate back or explore other categories

## 📝 Next Steps (Optional Enhancements)

- Add search functionality
- Implement data visualization charts
- Add user authentication
- Create admin panel for content management
- Add more detailed statistics
- Implement internationalization
- Add accessibility improvements (ARIA labels)
- Create blog or resources section

## 🐛 Known Issues

- Frontend package has 2 moderate vulnerabilities (non-critical)
  - Can be addressed with `npm audit fix` if needed

## 📚 Resources

- React Router: https://reactrouter.com/
- Express.js: https://expressjs.com/
- Vite: https://vitejs.dev/
- SDOH Framework: https://health.gov/healthypeople/priority-areas/social-determinants-health

---

**Application is ready to use!** 🎉

Both servers are currently running:
- Backend: http://localhost:3000 ✅
- Frontend: http://localhost:5173 ✅
