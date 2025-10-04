# 📁 Project Folder Structure

This project follows React best practices with a clean, organized folder structure.

## 🏗️ Current Structure

```
src/
├── components/           # All React components
│   ├── common/          # Reusable components (Header, Footer, Layout)
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   └── index.js     # Barrel exports
│   ├── pages/           # Page components
│   │   ├── HomePage.jsx
│   │   ├── EngineeringServicesPage.jsx
│   │   ├── BoardOfDirectorsPage.jsx
│   │   ├── BoardCommitteesPage.jsx
│   │   ├── ConstructionProjectsPage.jsx
│   │   ├── InvestorsPage.jsx
│   │   ├── NewsNotificationPage.jsx
│   │   ├── OurStoryPage.jsx
│   │   ├── OverviewPage.jsx
│   │   ├── PlaceholderPage.jsx
│   │   ├── PropertiesPage.jsx
│   │   ├── SustainablePage.jsx
│   │   ├── OthersPage.jsx
│   │   └── index.js     # Barrel exports
│   ├── ui/              # UI components (Carousel, Buttons, etc.)
│   │   ├── Carousel.jsx
│   │   └── index.js     # Barrel exports
│   └── index.js         # Main barrel export
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── constants/           # App constants
├── context/             # React context providers
├── assets/              # Static assets (images, icons)
├── App.jsx              # Main App component
├── main.jsx             # App entry point
└── index.css            # Global styles
```

## 📋 Naming Conventions

- **Components**: PascalCase (e.g., `HomePage.jsx`, `Header.jsx`)
- **Files**: PascalCase for components, camelCase for utilities
- **Folders**: lowercase with descriptive names
- **Exports**: Named exports preferred over default exports

## 🔗 Import Examples

### Before (Old Structure)
```javascript
import Header from './components/header'
import Carousel from './components/Carousel'
import HomePage from './components/homePage'
```

### After (New Structure)
```javascript
// Clean imports using barrel exports
import { Header, Footer, Layout } from './components/common'
import { Carousel } from './components/ui'
import { HomePage } from './components/pages'

// Or even cleaner:
import { Header, Carousel, HomePage } from './components'
```

## ✅ Benefits

1. **Better Organization**: Components are grouped by purpose
2. **Cleaner Imports**: Barrel exports make imports more readable
3. **Scalability**: Easy to add new components in appropriate folders
4. **Maintainability**: Clear separation of concerns
5. **Team Collaboration**: Standard structure everyone can follow
6. **Future-Ready**: Prepared for growth and new features

## 🚀 Next Steps

- Add more UI components to `components/ui/`
- Create custom hooks in `hooks/`
- Add utility functions to `utils/`
- Define app constants in `constants/`
- Add context providers to `context/`
