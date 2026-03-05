# Plan: Fix Contact Us Page Layout

## File to modify
`app/contact-us/page.tsx`

## Changes

### 1. Increase container max-width (line 31)
**Current:**
```jsx
<div className="max-w-[860px] w-full mx-auto">
```
**Change to:**
```jsx
<div className="max-w-[1140px] w-full mx-auto">
```

### 2. Adjust section horizontal padding (line 30)
**Current:**
```jsx
<section className="w-full pt-24 lg:pt-32 xl:pt-36 pb-14 lg:pb-20 xl:pb-24 px-4 sm:px-6 lg:px-8">
```
**Change to:**
```jsx
<section className="w-full pt-24 lg:pt-32 xl:pt-36 pb-14 lg:pb-20 xl:pb-24 px-4 sm:px-6 lg:px-12 xl:px-[10.4%]">
```

### 3. Update left column flex-basis (lines 70-73)
**Current:**
```jsx
style={{
  gap: 'clamp(14px, 1.67vw, 24px)',
  flexBasis: 'clamp(240px, 23.6vw, 340px)',
}}
```
**Change to:**
```jsx
style={{
  gap: 'clamp(14px, 1.67vw, 24px)',
  flexBasis: 'clamp(300px, 33.3%, 479px)',
}}
```

### 4. Fix Contact Information card border (lines 77-81)
**Current:**
```jsx
style={{
  border: '1.5px solid #14358A',
  borderRadius: '12px',
  padding: 'clamp(14px, 1.67vw, 24px)',
}}
```
**Change to:**
```jsx
style={{
  border: '3px solid #14358A',
  borderRadius: '10px',
  padding: 'clamp(14px, 1.67vw, 24px)',
}}
```

### 5. Fix Primary Inquiry card border (lines 172-176)
**Current:**
```jsx
style={{
  border: '1.5px solid #14358A',
  borderRadius: '12px',
  padding: 'clamp(14px, 1.67vw, 24px)',
}}
```
**Change to:**
```jsx
style={{
  border: '3px solid #14358A',
  borderRadius: '10px',
  padding: 'clamp(14px, 1.67vw, 24px)',
}}
```

### 6. Fix Expression of Interest card border (lines 243-249)
**Current:**
```jsx
style={{
  border: '1.5px solid #14358A',
  borderRadius: '12px',
  padding: 'clamp(16px, 1.94vw, 28px)',
  flex: 1,
  minWidth: 0,
}}
```
**Change to:**
```jsx
style={{
  border: '3px solid #14358A',
  borderRadius: '10px',
  padding: 'clamp(16px, 1.94vw, 28px)',
  flex: 1,
  minWidth: 0,
}}
```

### 7. Also fix any internal border references for inquiry buttons (line 204)
**Current:** `border: \`1.5px solid ${selectedInquiry === i ? '#14358A' : 'transparent'}\``
**Change to:** `border: \`1.5px solid ${selectedInquiry === i ? '#14358A' : 'transparent'}\`` (keep as-is, these are internal button borders, not card borders)

## Summary of all changes
| Property | Current | New |
|---|---|---|
| Container max-width | 860px | 1140px |
| Section horizontal padding (lg) | lg:px-8 | lg:px-12 xl:px-[10.4%] |
| Left column flex-basis | clamp(240px, 23.6vw, 340px) | clamp(300px, 33.3%, 479px) |
| Card border-width (3 cards) | 1.5px | 3px |
| Card border-radius (3 cards) | 12px | 10px |
