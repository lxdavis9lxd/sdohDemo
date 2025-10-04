# Social Determinants of Health (SDOH) Demo

A full-stack web application showcasing the Social Determinants of Health framework with interactive visualizations and detailed information about each health determinant category.

## 🏥 About

This application provides an educational platform to explore the five key Social Determinants of Health:

1. **Economic Stability** - Employment, income, housing affordability, and financial security
2. **Education Access and Quality** - Early childhood education, literacy, and higher education
3. **Healthcare Access and Quality** - Health insurance, primary care, and health literacy
4. **Neighborhood and Built Environment** - Housing quality, transportation, food access, and safety
5. **Social and Community Context** - Social cohesion, discrimination, and support networks

## 🛠️ Tech Stack

### Backend
- **Node.js** with **Express.js** - REST API server
- **CORS** - Cross-origin resource sharing

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS3** - Styling with animations and responsive design

## 📁 Project Structure

```
sdohDemo/
├── backend/
│   ├── data/
│   │   └── sdohData.js          # SDOH categories data
│   ├── package.json
│   └── server.js                # Express server
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── HomePage.jsx     # Main landing page
│   │   │   ├── HomePage.css
│   │   │   ├── CategoryPage.jsx # Category detail pages
│   │   │   └── CategoryPage.css
│   │   ├── App.jsx              # Main app component
│   │   ├── App.css
│   │   ├── main.jsx             # Entry point
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository** (if not already done)
   ```bash
   cd /workspaces/sdohDemo
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

You need to run both the backend and frontend servers:

#### Terminal 1 - Backend Server
```bash
cd backend
npm start
```
The backend API will run on `http://localhost:3000`

#### Terminal 2 - Frontend Development Server
```bash
cd frontend
npm run dev
```
The frontend will run on `http://localhost:5173`

### Access the Application

Open your browser and navigate to:
```
http://localhost:5173
```

## 📡 API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/sdoh` - Get all SDOH categories
- `GET /api/sdoh/:category` - Get specific category details

## ✨ Features

- **Interactive Homepage** - Visual representation of all SDOH categories with clickable chevron-style links
- **Category Details** - Comprehensive information for each determinant including:
  - Key factors and indicators
  - Health impact descriptions
  - Statistics and data points
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations** - Engaging transitions and hover effects
- **Color-Coded Categories** - Each SDOH category has a unique color for easy identification

## 🎨 Customization

### Adding New Categories

Edit `/backend/data/sdohData.js` to add or modify SDOH categories. Each category should include:
- `id` - Unique identifier
- `title` - Category name
- `color` - Hex color code
- `icon` - Emoji icon
- `description` - Brief overview
- `factors` - Array of key factors
- `impact` - Health impact description
- `statistics` - Array of statistical facts

## 🔧 Development

### Backend Development
```bash
cd backend
npm run dev  # Runs with --watch flag for auto-reload
```

### Frontend Development
```bash
cd frontend
npm run dev  # Hot module replacement enabled
```

### Building for Production
```bash
cd frontend
npm run build
npm run preview  # Preview production build
```

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or feedback about this demo, please open an issue in the repository.

---

Built with ❤️ using React, Vite, and Express