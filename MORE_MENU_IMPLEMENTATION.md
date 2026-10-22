# "More" Menu Implementation - Overflow Solution

## Problem
The navigation tabs were overflowing on smaller desktop screens, causing the "Sources" tab (and potentially other tabs) to be cut off and inaccessible.

## Solution
Implemented a dynamic "More" menu that automatically appears when tabs overflow the available space, providing access to all navigation items while maintaining the clean, professional appearance.

---

## Implementation Details

### 1. Dynamic Tab Calculation
The navigation now calculates which tabs fit in the available space and which overflow:

```typescript
const calculateVisibleTabs = () => {
  const containerWidth = navContainerRef.current.offsetWidth;
  const moreButtonWidth = 60; // Space reserved for "More" button
  const availableWidth = containerWidth - moreButtonWidth;
  
  // Calculate which tabs fit
  let totalWidth = 0;
  const visible: Tab[] = [];
  const overflow: Tab[] = [];
  
  for (const tab of tabs) {
    const tabWidth = tab.label.length * 9 + 60; // Estimate
    if (totalWidth + tabWidth <= availableWidth) {
      visible.push(tab);
      totalWidth += tabWidth;
    } else {
      overflow.push(tab);
    }
  }
  
  setVisibleTabs(visible);
  setOverflowTabs(overflow);
};
```

**Key Features:**
- Runs on mount and window resize
- Estimates tab width based on label length
- Reserves space for the "More" button
- Automatically adjusts when screen size changes

### 2. "More" Menu Button
When tabs overflow, a "More" button appears with a vertical ellipsis icon:

```tsx
{overflowTabs.length > 0 && (
  <div className="relative">
    <button
      onClick={() => setMoreMenuOpen(!moreMenuOpen)}
      className={`nav-tab ${moreMenuOpen ? 'nav-tab--active' : ''}`}
      aria-expanded={moreMenuOpen}
      aria-haspopup="true"
    >
      <svg>...</svg>
      <span>More</span>
    </button>
    
    {/* Dropdown menu */}
  </div>
)}
```

**Styling:**
- Matches existing tab button style
- Vertical ellipsis icon (⋮) using sharp geometric SVG
- Active state when menu is open
- 44px minimum touch target

### 3. Dropdown Menu
The dropdown menu displays all overflow tabs:

```tsx
<div className="more-menu-dropdown">
  <ul className="more-menu__list">
    {overflowTabs.map((tab) => (
      <li key={tab.id} className="more-menu__item">
        <button
          onClick={() => handleTabClick(tab.id)}
          className={`more-menu__link ${isActive ? 'more-menu__link--active' : ''}`}
        >
          <IconComponent size={18} />
          <span>{tab.label}</span>
        </button>
      </li>
    ))}
  </ul>
</div>
```

**Features:**
- Positioned absolutely below the "More" button
- Hard shadow for tactile stacking effect
- Sharp corners (no border-radius)
- Active tab highlighted with red left border
- Hover/focus states with background color change

### 4. Accessibility
Full keyboard and screen reader support:

- **Escape key**: Closes the menu
- **Click outside**: Closes the menu
- **ARIA attributes**: `aria-expanded`, `aria-haspopup`
- **Focus management**: Proper tab order
- **44px touch targets**: All menu items meet accessibility guidelines

### 5. Auto-Close Behavior
The menu automatically closes when:
- A tab is selected
- The user clicks outside the menu
- The Escape key is pressed
- The active tab changes

---

## CSS Implementation

### Dropdown Styling
```css
.more-menu-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background-color: var(--color-paper);
  border: 1.5px solid var(--color-ink);
  box-shadow: var(--shadow-base);
  z-index: 100;
  min-width: 200px;
}
```

### Menu Items
```css
.more-menu__link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  min-height: 44px;
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  transition: background-color 0.1s ease-out;
}

.more-menu__link:hover,
.more-menu__link:focus-visible {
  background-color: var(--color-desk-dark);
}

.more-menu__link--active {
  color: var(--color-accent-red);
  border-left: 3px solid var(--color-accent-red);
}
```

---

## Responsive Behavior

### Desktop (> 1024px)
- All tabs fit → No "More" menu shown
- If tabs overflow → "More" menu appears with overflow tabs

### Tablet (768px - 1024px)
- Some tabs may overflow → "More" menu appears as needed
- Dynamic calculation ensures all tabs remain accessible

### Mobile (< 768px)
- Desktop navigation hidden
- Hamburger menu shows all tabs
- "More" menu not used (hamburger handles overflow)

---

## Testing Scenarios

### Scenario 1: All Tabs Fit
**Screen width:** 1400px+
**Result:** All 8 tabs visible, no "More" button

### Scenario 2: Some Tabs Overflow
**Screen width:** 1024px - 1200px
**Result:** 5-6 tabs visible, "More" button shows remaining tabs

### Scenario 3: Many Tabs Overflow
**Screen width:** 768px - 1024px
**Result:** 3-4 tabs visible, "More" button shows 4-5 tabs

### Scenario 4: Mobile
**Screen width:** < 768px
**Result:** Hamburger menu shows all tabs, "More" menu not used

---

## Scalability

This solution is designed to scale as new tabs are added:

1. **Add new tab to array:**
```typescript
const tabs: Tab[] = [
  // ... existing tabs
  { id: 'new-tab', label: 'New Tab', icon: Icons.NewIcon },
];
```

2. **Automatic handling:**
- If tab fits → Shows in main navigation
- If tab overflows → Appears in "More" menu
- No code changes needed

3. **Future-proof:**
- Works with any number of tabs
- Maintains professional appearance
- Preserves accessibility

---

## Aesthetic Compliance

✅ **No rounded corners** - `border-radius: 0 !important` enforced
✅ **Hard shadows** - Maintains tactile stacking effect
✅ **Sharp geometry** - Vertical ellipsis uses square caps
✅ **Typography hierarchy** - IBM Plex Mono, uppercase
✅ **Touch targets** - 44px minimum on all interactive elements
✅ **Color palette** - Uses archival colors in both light/dark modes
✅ **Dark mode support** - Full dark mode compatibility

---

## Files Modified

### `src/components/TabNavigation.tsx`
- Added `moreMenuOpen` state
- Added `visibleTabs` and `overflowTabs` state
- Added `calculateVisibleTabs()` function
- Added refs for container measurement
- Added "More" button with dropdown
- Added click-outside handler
- Added resize listener

### `src/index.css`
- Added `.more-menu-dropdown` styles
- Added `.more-menu__list` styles
- Added `.more-menu__item` styles
- Added `.more-menu__link` styles
- Added `.more-menu__link--active` styles
- Added hover/focus states

---

## Build Status

```
✓ Build successful
✓ No TypeScript errors
✓ No CSS errors
✓ Bundle: 273.65 KB JS, 29.98 KB CSS
✓ Gzipped: 75.70 KB JS, 6.56 KB CSS
```

---

## User Experience

### Before
- ❌ "Sources" tab cut off on smaller screens
- ❌ No way to access overflow tabs
- ❌ Poor user experience on tablets
- ❌ Unprofessional appearance

### After
- ✅ All tabs accessible via "More" menu
- ✅ Professional dropdown appearance
- ✅ Smooth responsive behavior
- ✅ Maintains archival aesthetic
- ✅ Fully accessible
- ✅ Scales for future tabs

---

## Deployment

```bash
git add src/components/TabNavigation.tsx
git add src/index.css
git commit -m "Add 'More' menu for tab overflow handling"
git push origin main
```

The site will automatically rebuild and deploy with the new "More" menu functionality.

---

## Summary

The "More" menu provides an elegant, scalable solution for navigation overflow while maintaining the archival brutalist aesthetic. It ensures all tabs remain accessible regardless of screen size, provides a professional user experience, and is designed to accommodate future tab additions without code changes.
