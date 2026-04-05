# Design System Document: The Kinetic Ether

## 1. Overview & Creative North Star: "The Digital Curator"
This design system is not a template; it is a high-end editorial framework designed to position AI as a sophisticated, invisible force. The Creative North Star is **"The Digital Curator"**—a philosophy that treats every screen like a high-end gallery space. 

We move away from the rigid, boxed-in "dashboard" look. Instead, we embrace **intentional asymmetry**, high-contrast typography scales, and overlapping glass layers. The interface should feel like it is breathing, using vast amounts of "negative space" (macro-white space) to focus the user’s eye on the intelligence being presented. We don't just show data; we curate an experience.

---

## 2. Colors: Tonal Depth & The Cyan Pulse
Our palette is rooted in deep blacks and "electric" accents. The goal is to simulate a high-end, futuristic terminal where light is emitted, not reflected.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section off major layout areas. Boundaries must be defined through background color shifts. Use `surface-container-low` for large section backgrounds sitting on a `surface` base. If two areas must be separated, use a 48px to 120px vertical gap rather than a line.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical, stacked layers of smoked glass.
*   **Base Layer (`surface` / `#0e0e0e`):** The infinite void.
*   **Section Layer (`surface-container-low` / `#131313`):** Defines large content blocks.
*   **Component Layer (`surface-container` / `#1a1919`):** The primary container for cards and interactive groups.
*   **Elevated Layer (`surface-container-highest` / `#262626`):** For active or modal states.

### Signature Textures & Glass
*   **The Cyan Pulse:** Use `primary-container` (#00f1fe) with a 20px radial blur behind key text to create a "glow from within."
*   **Glassmorphism:** Floating elements must use `surface-variant` at 40% opacity with a `24px` backdrop-blur. This allows the deep background gradients to bleed through, ensuring the UI feels integrated, not "pasted on."

---

## 3. Typography: Editorial Authority
We use a high-contrast scale to create an "Editorial" feel. Bold, wide headers meet clinical, hyper-legible body text.

*   **Display & Headlines (`Space Grotesk`):** This is our "Voice of Intelligence." Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero sections. Headlines should feel architectural.
*   **Body & Titles (`Inter`):** Our "Voice of Utility." Inter provides the clinical precision required for AI technicalities. 
*   **The Hierarchy Strategy:** Never use two fonts of the same size near each other. If a `headline-sm` is present, the caption must be at least 3 levels lower (`label-md`) to create a dramatic, premium silhouette.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are too "heavy" for a futuristic aesthetic. We use **Tonal Layering**.

*   **The Layering Principle:** To "lift" a card, do not add a shadow. Instead, place a `surface-container` card on top of a `surface-container-low` background. The subtle 2% shift in brightness is enough for the human eye to perceive depth without visual clutter.
*   **Ambient Shadows:** For floating modals, use a large, diffused shadow: `box-shadow: 0 20px 80px rgba(0, 242, 255, 0.06)`. This uses a hint of our primary cyan to simulate light bounce.
*   **The Ghost Border:** If accessibility requires a container boundary, use the `outline-variant` token at **15% opacity**. It should be felt, not seen. 100% opaque borders are strictly forbidden.

---

## 5. Components: Precision & Light

### Buttons
*   **Primary:** A gradient-fill using `primary` to `primary-dim`. No border. Text is `on-primary`. On hover, add a `0 0 20px` glow of the same color.
*   **Secondary:** A "Ghost" style. No fill, `0.5px` border of `outline-variant` at 20% opacity. 
*   **Tertiary:** Text-only in `primary` color, with a 1px underline that only appears on hover.

### Cards & Lists
*   **No Dividers:** Lists must use `surface-container-low` backgrounds for every even item, or simply use 16px of vertical spacing to separate units.
*   **Interaction:** Upon hover, a card’s background should transition from `surface-container` to `surface-bright`.

### Input Fields
*   **State:** Default state is a `surface-container-highest` fill with no border. On focus, the bottom edge gains a 2px `primary` (Cyan) glow, and the background subtly brightens.

### Signature Component: The "Intelligence Glow"
*   For AI-generated content or "Active" AI states, use a `primary` color border with a `box-shadow: inset 0 0 10px rgba(0, 242, 255, 0.2)`. This makes the container look like it's charging with energy.

---

## 6. Do's and Don'ts

### Do
*   **DO** use extreme asymmetry. Align a headline to the left and the supporting body text to the far right of the grid to create "tension."
*   **DO** use `secondary` (#00e0fe) for technical metadata and `primary` (#99f7ff) for calls to action.
*   **DO** leave at least 120px of padding between major vertical sections.

### Don't
*   **DON'T** use pure white (#FFFFFF) for long-form body text; use `on-surface-variant` (#adaaaa) to reduce eye strain in dark mode.
*   **DON'T** use rounded corners larger than `xl` (0.75rem) for cards. We want "Sophisticated Tech," not "Playful Mobile App."
*   **DON'T** use 1px solid white lines. Ever. Use tone, space, or glass blurs to define edges.