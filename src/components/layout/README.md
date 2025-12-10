# Layout System Documentation

## Overview

The layout system provides a centralized way to manage the website's structure and appearance across all pages. It ensures consistency and makes it easy to maintain and update the overall design.

## Architecture

### Components

#### `Layout.jsx`
The main layout wrapper component that provides the structure for all pages:
- **Navbar**: Fixed at the top, full-width
- **Main Content**: Flexible area that grows to fill available space
- **Footer**: Fixed at the bottom, full-width
- **WhatsAppButton**: Floating button in bottom-right corner

### Configuration

#### `layoutConfig.js`
Centralized configuration file containing:
- Container settings (max-width, padding)
- Navbar settings (colors, spacing, logo)
- Footer settings (colors, grid layout)
- Section settings (padding, spacing)
- Responsive breakpoints
- Color scheme
- Typography settings
- Z-index layers

### Utilities

#### `layoutUtils.js`
Helper functions for:
- Getting container classes
- Getting section classes
- Responsive grid layouts
- Responsive text sizing
- Viewport detection (mobile/tablet/desktop)
- Spacing calculations

## Usage

### Basic Layout Usage

The Layout component is already integrated in `App.jsx`:

```jsx
import Layout from './components/layout/Layout';

<Layout>
  <YourPageContent />
</Layout>
```

### Using Layout Configuration

```jsx
import layoutConfig from './config/layoutConfig';

// Access configuration values
const maxWidth = layoutConfig.container.maxWidth;
const primaryColor = layoutConfig.colors.primary.main;
```

### Using Layout Utilities

```jsx
import { getContainerClasses, isMobile } from './utils/layoutUtils';

// Get container classes
const containerClasses = getContainerClasses();

// Check viewport
if (isMobile()) {
  // Mobile-specific logic
}
```

## Layout Structure

```
┌─────────────────────────────────────┐
│           Navbar (Full Width)        │
├─────────────────────────────────────┤
│                                     │
│        Main Content Area            │
│        (Flexible, Full Width)       │
│                                     │
│                                     │
├─────────────────────────────────────┤
│          Footer (Full Width)        │
└─────────────────────────────────────┘
         ┌──────┐
         │  WA  │ ← WhatsApp Button (Fixed)
         └──────┘
```

## Responsive Design

The layout system uses Tailwind's responsive breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: ≥ 1024px

## Customization

To customize the layout:

1. **Colors**: Update `layoutConfig.js` → `colors`
2. **Spacing**: Update `layoutConfig.js` → `spacing` or `section.padding`
3. **Container Width**: Update `layoutConfig.js` → `container.maxWidth`
4. **Breakpoints**: Update `layoutConfig.js` → `breakpoints`

## Best Practices

1. Always use the Layout component to wrap page content
2. Use layout utilities for consistent spacing and sizing
3. Reference layoutConfig for design tokens
4. Maintain full-width structure for navbar and footer
5. Use responsive classes from the config for breakpoints

