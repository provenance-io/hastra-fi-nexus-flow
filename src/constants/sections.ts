/**
 * Section identifiers used for navigation and scrolling
 */
export const SECTION_IDS = {
  LEARNING: 'learning',
  GUIDES: 'guides',
  RESOURCES: 'resources',
} as const;

export const SECTION_DATA_ATTRIBUTES = {
  LEARNING: `[data-section="${SECTION_IDS.LEARNING}"]`,
} as const;