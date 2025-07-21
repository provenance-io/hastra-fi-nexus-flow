# Start Earning Components

This directory contains components related to the learning and earning sections of the application.

## Components Overview

### Core Components
- `LearnHero.tsx` - Hero section for the learn page with call-to-action buttons
- `SimpleLearningSection.tsx` - Main learning section with category and track navigation
- `CategoryCard.tsx` - Individual category display cards 
- `TrackCard.tsx` - Individual learning track display cards

### Modal Components
Located in `/modals/` subdirectory:
- `DefiBasiscsModal.tsx` - DeFi basics learning track modal
- `MasteringDefiModal.tsx` - Advanced DeFi learning track modal
- `HastraForDummiesModal.tsx` - Hastra platform learning track modal
- `BlockchainFundamentalsModal.tsx` - Blockchain fundamentals learning track modal

### Other Components
- `EnhancedGuidesSection.tsx` - Enhanced guides with interactive features
- `InteractiveGuidesSection.tsx` - Interactive learning guides
- `VideoLibrarySection.tsx` - Video-based learning content
- `QuickActionsSection.tsx` - Quick action buttons and guides

## Architecture

### State Management
- Uses custom hook `useLearningState()` for consistent state management
- Centralized modal and navigation state handling
- Performance optimized with `useCallback` hooks

### Type Safety
- All components use TypeScript interfaces from `@/types/learning`
- Props are properly typed for better developer experience
- Consistent interface patterns across components

### Performance Optimizations
- Components are memoized with `React.memo` where appropriate
- Event handlers use `useCallback` to prevent unnecessary re-renders
- Animation delays calculated using constants from `@/constants/learning`

### Code Organization
- Consistent file naming and structure
- Separation of concerns between UI and business logic
- Reusable utility functions and constants

## Usage

```tsx
import SimpleLearningSection from '@/components/start-earning/SimpleLearningSection';

// Basic usage
<SimpleLearningSection />
```

The learning section automatically handles:
- Category selection and navigation
- Modal state management
- Track interaction and display
- Responsive design and animations

## Data Sources

Learning content is sourced from:
- `@/data/learningCategories` - Category and track definitions
- `@/constants/learning` - UI text and configuration constants
- `@/types/learning` - TypeScript interfaces and types