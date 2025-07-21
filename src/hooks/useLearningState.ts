import { useState, useCallback } from 'react';
import { LearningModalState } from '@/types/learning';

/**
 * Custom hook for managing learning section state
 * Provides state management for category selection and modal visibility
 */
export const useLearningState = () => {
  const [state, setState] = useState<LearningModalState>({
    selectedCategory: null,
    activeModal: null,
  });

  const handleCategoryClick = useCallback((categoryId: string) => {
    setState(prev => ({ ...prev, selectedCategory: categoryId }));
  }, []);

  const handleTrackClick = useCallback((title: string) => {
    setState(prev => ({ ...prev, activeModal: title }));
  }, []);

  const handleBackClick = useCallback(() => {
    setState(prev => ({ ...prev, selectedCategory: null }));
  }, []);

  const handleCloseModal = useCallback(() => {
    setState(prev => ({ ...prev, activeModal: null }));
  }, []);

  return {
    selectedCategory: state.selectedCategory,
    activeModal: state.activeModal,
    handleCategoryClick,
    handleTrackClick,
    handleBackClick,
    handleCloseModal,
  };
};