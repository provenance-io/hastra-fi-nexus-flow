import { LucideIcon } from 'lucide-react';

/**
 * Learning article interface representing a single article/resource
 */
export interface LearningArticle {
  title: string;
  description: string;
  readTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

/**
 * Learning area interface representing a single learning track
 */
export interface LearningArea {
  icon: LucideIcon;
  title: string;
  description: string;
  articles: LearningArticle[];
  action: string;
  href: string;
}

/**
 * Learning category interface representing a group of related tracks
 */
export interface LearningCategory {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  trackCount: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  tracks: LearningArea[];
}

/**
 * Modal state interface for learning section
 */
export interface LearningModalState {
  selectedCategory: string | null;
  activeModal: string | null;
}

/**
 * Props for category card component
 */
export interface CategoryCardProps {
  category: LearningCategory;
  index: number;
  onClick: (categoryId: string) => void;
}

/**
 * Props for track card component
 */
export interface TrackCardProps {
  track: LearningArea;
  index: number;
  onTrackClick: (title: string) => void;
}

/**
 * Props for learning modal components
 */
export interface LearningModalProps {
  isOpen: boolean;
  onClose: () => void;
}