---
name: Industrial Integrity
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#42474f'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737780'
  outline-variant: '#c2c7d0'
  surface-tint: '#346191'
  primary: '#00284a'
  on-primary: '#ffffff'
  primary-container: '#033e6d'
  on-primary-container: '#80aadf'
  inverse-primary: '#a0c9ff'
  secondary: '#00658e'
  on-secondary: '#ffffff'
  secondary-container: '#7dccff'
  on-secondary-container: '#00567b'
  tertiary: '#1f272d'
  on-tertiary: '#ffffff'
  tertiary-container: '#353d43'
  on-tertiary-container: '#9fa8af'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#a0c9ff'
  on-primary-fixed: '#001c37'
  on-primary-fixed-variant: '#164978'
  secondary-fixed: '#c7e7ff'
  secondary-fixed-dim: '#85cfff'
  on-secondary-fixed: '#001e2e'
  on-secondary-fixed-variant: '#004c6c'
  tertiary-fixed: '#dbe3eb'
  tertiary-fixed-dim: '#bfc7cf'
  on-tertiary-fixed: '#151d22'
  on-tertiary-fixed-variant: '#40484e'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: sourceSerifFour
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: sourceSerifFour
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: sourceSerifFour
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: sourceSerifFour
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: metropolis
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: metropolis
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: metropolis
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: metropolis
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 48px
  margin-mobile: 16px
  bento-gap: 24px
---

## Brand & Style
The design system is engineered for the heavy cargo and global logistics sector, emphasizing structural stability, rhythmic precision, and institutional trust. The brand personality is "The Architect of Global Trade"—authoritative yet technologically advanced. 

The visual style utilizes a **Corporate Modern** foundation infused with **Industrial Editorial** accents. It moves away from generic SaaS aesthetics toward a "solid" aesthetic characterized by clear hierarchies, intentional whitespace, and a structural layout that mirrors the modularity of shipping containers and global freight networks. The emotional response should be one of unwavering reliability and immense scale.

## Colors
The palette is rooted in a "Maritime Industrial" spectrum. The **Deep Navy Blue** serves as the primary anchor, used for headers, key navigation, and primary actions to project authority. **Electric Cyan Blue** is utilized sparingly as a functional accent for progress indicators, active states, and data highlights, providing a modern "signal" against the heavy navy.

The **Rugged Slate Gray** is reserved for secondary text and iconographic details, ensuring high legibility without the harshness of pure black. Backgrounds remain a crisp, high-contrast white to maintain professional clarity, supported by **Neutral-200** (#e2e8f0) borders that define the structural grid without adding visual clutter.

## Typography
This design system employs a sophisticated typographic pairing to balance heritage with efficiency. **Source Serif Four** (Headlines) provides a literary, authoritative voice reminiscent of traditional logistics manifests and global enterprise journals. It should be used for major section titles and "editorial" moments in the UI.

**Metropolis** (UI/Body) handles the heavy lifting of data-heavy interfaces. It is a geometric sans-serif that remains legible at small sizes, crucial for shipping coordinates, weights, and timestamps. For data tables and technical labels, use the `label-md` style with uppercase tracking to enhance scannability in high-density views.

## Layout & Spacing
The layout follows an **Asymmetrical Bento Grid** model. Content is organized into modular "containers" of varying sizes that snap to a 12-column underlying structure. This mimics the efficient packing of cargo.

- **Desktop:** 12-column grid with a 1440px max-width. Use 24px gutters. Bento modules should span 3, 6, 8, or 12 columns to maintain asymmetry.
- **Tablet:** 8-column grid with 24px margins. Bento modules reflow to a simpler 2-stack layout.
- **Mobile:** Single column flow with 16px margins. Modular containers lose their horizontal asymmetry but retain their distinct bordered styling to separate content.

Spacing follows a strict 8px base unit. Padded containers should typically use `32px` (4x) internal padding to maintain a "premium enterprise" feel.

## Elevation & Depth
Depth in this design system is achieved through **Tonal Layering** rather than traditional shadows. Surfaces are primarily flat, using subtle shifts in background color or 1px borders to define hierarchy.

- **Level 0 (Canvas):** Pure white background.
- **Level 1 (Bento Modules):** White surface with a 1px solid border (#e2e8f0).
- **Level 2 (Hover/Active):** A very subtle, "industrial" shadow: `0px 4px 12px rgba(3, 62, 109, 0.08)`. This adds just enough lift to indicate interactivity without breaking the solid, flat aesthetic.
- **Overlays:** Modals and dropdowns use a sharp 1px border and a medium-diffused shadow to separate from the grid.

## Shapes
To reinforce the "Solid/Structural" brand pillar, the design system uses a **Soft** roundedness profile. High-radius corners are avoided as they feel too "consumer-tech" or "playful." 

A standard `0.25rem` (4px) radius is applied to buttons, input fields, and small modules. Larger bento containers may use up to `0.5rem` (8px), but never more. This creates a professional, architectural look that feels precise and engineered.

## Components
- **Buttons:** Primary buttons use the Deep Navy (#033e6d) with white text and sharp 4px corners. Secondary buttons use a 1px border of the primary color with no fill.
- **Bento Cards:** The core organizational unit. Each card must have a consistent 1px border (#e2e8f0). Header areas within cards should use the `label-md` typography for a "manifest" look.
- **Input Fields:** Professional and rectangular. Use a 1px #e2e8f0 border that shifts to Electric Cyan (#1f7ead) on focus.
- **Data Tables:** Highly dense with no vertical lines; use horizontal dividers only (#f1f5f9). Use Metropolis for all numerical values to ensure clarity.
- **Status Chips:** Small, rectangular indicators. Use "Solid" colors for background (e.g., Success = Soft Green with Dark Green text) but maintain the 4px border radius.
- **Logistics Indicators:** Specialized components like "Route Steppers" or "Cargo Capacity Gauges" should use the Electric Cyan for active progress to stand out against the navy-heavy UI.