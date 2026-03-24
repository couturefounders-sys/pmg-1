# Supertag Convention

## What is a Supertag?

A **supertag** is a small label that appears **above** a section's main heading. It provides brief context or a category label for the section, visually guiding the reader before they read the primary heading.

### Visual hierarchy (top to bottom):
1. **Supertag** — small, bold label above the heading
2. **Main Heading** — large, prominent section title
3. **Subheading / body copy** — supporting text

### Example:
```
The PMG Thesis          ← supertag (small, black, bold)
Read Our Latest Insights  ← main heading (large, navy #14358A, bold)
```

## Supertag Styling Rules

**All supertags in this project must be styled as follows:**

- **Color: `#000000` (black)** — always black, never navy or gray
- **Font:** DM Sans, bold (`font-dm-sans font-bold`)
- **Font size:** `clamp(14px, 1.25vw, 20px)`
- **Line height:** `105%`
- **Margin bottom:** `0.5rem` (8px) — tight gap above the main heading
- **Element:** Use a `<p>` tag (not an `<h>` tag, since it is not a semantic heading)

### Code template:
```tsx
<p
  className="font-dm-sans font-bold mb-2"
  style={{
    fontSize: 'clamp(14px, 1.25vw, 20px)',
    lineHeight: '105%',
    color: '#000000',
  }}
>
  Supertag Text Here
</p>
```

## When to add a Supertag

Add a supertag whenever a section needs a short categorical or thematic label above its main heading. Every supertag must be black — do not use the brand navy (`#14358A`) or any other color for supertags.
