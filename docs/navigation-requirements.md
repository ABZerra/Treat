# Navigation Upgrade Requirements

## Overview
Improve page navigation with stronger branding and a mobile-first layout. Primary target is iPhone 13 (390×844 logical pixels) with responsive scaling for larger screens.

## Goals
- Reinforce Treat branding in navigation elements.
- Provide intuitive navigation that adapts to limited mobile screen real estate.
- Preserve existing link functionality while refining presentation and interaction.

## Design Requirements
1. **Navigation Structure**
   - Single persistent bottom navigation bar with key sections: Home, History, Settings.
   - Floating action buttons remain for quick treat logging but align vertically above the navigation bar to avoid overlap.
2. **Branding & Visual Style**
   - Incorporate Treat color palette: use accent color for active icons and brand typeface for labels.
   - Include minimalistic logo or wordmark in top-left header on first load; header collapses on scroll to maximize content space.
3. **Mobile Layout (iPhone 13)**
   - Ensure touch targets are at least 44×44 points.
   - Bottom navigation height: 64 px; icons 24–28 px with labels below.
   - Provide safe-area padding for devices with notches.
4. **Interactions**
   - Highlight active navigation item with color and subtle scale animation.
   - Employ smooth transitions between sections (≤200 ms) using CSS animations or JS-driven class changes.
5. **Accessibility**
   - Contrast ratio ≥4.5:1 for text and icons.
   - Support screen readers with `aria-label` and focus states for navigation items.

## Development Requirements
1. **Responsive Implementation**
   - Use CSS flexbox/grid for layout; avoid fixed pixel positioning where possible.
   - Start from 390×844 viewport and scale up using relative units (`rem`, `%`).
2. **Component Structure**
   - Create reusable nav component within existing `index.html` architecture.
   - Styles inlined alongside current CSS modules to keep single-file structure.
3. **Performance**
   - Defer non-critical animations until `requestAnimationFrame` after first paint.
   - Maintain service worker caching for new assets.
4. **Testing**
   - Verify rendering on iPhone 13 simulator and desktop browsers at equivalent dimensions.
   - Run `npm test` to lint changes.

## Acceptance Criteria
- Navigation bar displays branded icons and labels, adjusting gracefully across screen sizes.
- Active section clearly indicated; navigation and action buttons do not overlap.
- All navigation items accessible via keyboard and screen readers.
- Linting tests pass with no errors.
