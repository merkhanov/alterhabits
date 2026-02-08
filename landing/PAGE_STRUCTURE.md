# Landing Page Structure

## Visual Layout Overview

```
┌─────────────────────────────────────────────────────────┐
│                      HERO SECTION                        │
│                    (Stone 50 bg)                         │
│                                                          │
│     Your personal AI coach for breaking habits          │
│                                                          │
│  Get support when you need it most. No judgment,        │
│  no pressure. Just personalized guidance that           │
│  adapts to you.                                         │
│                                                          │
│              [ Get started ] (Orange)                   │
│                                                          │
│        Join people who are making real progress         │
│                                                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                   HOW IT WORKS                           │
│                    (White bg)                            │
│                                                          │
│  ┌──────────────────┐  ┌──────────────────┐            │
│  │ ① Share your     │  │ ② Get personalized│            │
│  │   goal           │  │   support         │            │
│  └──────────────────┘  └──────────────────┘            │
│                                                          │
│  ┌──────────────────┐  ┌──────────────────┐            │
│  │ ③ Receive help   │  │ ④ Track your     │            │
│  │   when you need  │  │   progress        │            │
│  └──────────────────┘  └──────────────────┘            │
│                                                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                REAL SUPPORT THAT HELPS                   │
│                    (Stone 50 bg)                         │
│                                                          │
│  ┌──────────────────┐  ┌──────────────────┐            │
│  │ Support in       │  │ Adapts to your   │            │
│  │ difficult moments│  │ life             │            │
│  └──────────────────┘  └──────────────────┘            │
│                                                          │
│  ┌──────────────────┐  ┌──────────────────┐            │
│  │ Progress at      │  │ Always available │            │
│  │ your pace        │  │                  │            │
│  └──────────────────┘  └──────────────────┘            │
│                                                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                   WHO THIS IS FOR                        │
│                    (White bg)                            │
│                                                          │
│  ┌──────────────────┐  ┌──────────────────┐            │
│  │ Trying to quit   │  │ Reducing alcohol │            │
│  │ smoking          │  │ intake           │            │
│  └──────────────────┘  └──────────────────┘            │
│                                                          │
│  ┌──────────────────┐  ┌──────────────────┐            │
│  │ Overcoming       │  │ Breaking any     │            │
│  │ procrastination  │  │ habit            │            │
│  └──────────────────┘  └──────────────────┘            │
│                                                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                   BUILT ON TRUST                         │
│                    (Stone 50 bg)                         │
│                                                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │
│  │ Your data   │  │ No judgment,│  │ You're in   │    │
│  │ stays       │  │ ever        │  │ control     │    │
│  │ private     │  │             │  │             │    │
│  └─────────────┘  └─────────────┘  └─────────────┘    │
│                                                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                   FINAL CTA                              │
│                    (White bg)                            │
│                                                          │
│            Ready to make a change?                       │
│                                                          │
│     Start with one small step. Your AI coach            │
│     will be there to support you.                       │
│                                                          │
│              [ Get started ] (Orange)                   │
│                                                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                      FOOTER                              │
│                  (Border top)                            │
│                                                          │
│  Habit Coach          © 2026 Habit Coach. All rights    │
│                         reserved.                        │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## Section Breakdown

### 1. Hero (Stone 50 background)
- **Purpose**: Capture attention, communicate value
- **Key elements**: Headline, subheading, CTA, social proof
- **Padding**: py-20 md:py-32
- **Max width**: max-w-4xl

### 2. How It Works (White background)
- **Purpose**: Explain the process simply
- **Key elements**: 4 numbered steps
- **Layout**: 2x2 grid on desktop, stack on mobile
- **Padding**: py-20 md:py-28

### 3. Values (Stone 50 background)
- **Purpose**: Show real benefits
- **Key elements**: 4 value propositions
- **Layout**: 2x2 grid on desktop
- **Padding**: py-20 md:py-28

### 4. Who It's For (White background)
- **Purpose**: Help users identify themselves
- **Key elements**: 4 audience segments
- **Layout**: 2x2 grid on desktop
- **Padding**: py-20 md:py-28

### 5. Trust (Stone 50 background)
- **Purpose**: Build credibility and trust
- **Key elements**: 3 trust indicators
- **Layout**: 3 columns on desktop
- **Padding**: py-20 md:py-28

### 6. Final CTA (White background)
- **Purpose**: Convert visitors
- **Key elements**: Headline, supporting text, CTA button
- **Layout**: Centered, single column
- **Padding**: py-20 md:py-28

### 7. Footer (Border top)
- **Purpose**: Branding and legal
- **Key elements**: Product name, copyright
- **Layout**: Flex row on desktop, column on mobile
- **Padding**: py-12

## Responsive Breakpoints

- **Mobile**: Default (< 768px)
- **Tablet**: md: (≥ 768px)
- **Desktop**: lg: (≥ 1024px)

## Typography Scale

- **H1**: text-4xl md:text-5xl lg:text-6xl
- **H2**: text-3xl md:text-4xl
- **H3**: text-xl to text-lg
- **Body**: text-base to text-lg
- **Small**: text-sm

## Spacing System

- **Section padding**: 80px (py-20) to 128px (py-32)
- **Element gaps**: 32px (gap-8) to 48px (gap-12)
- **Text spacing**: 12px (space-y-3) to 32px (space-y-8)

## Color Usage

- **Backgrounds**: Alternating Stone 50 / White
- **Text**: Stone 800 (foreground) for headings
- **Secondary text**: Stone 500 (muted)
- **Accent**: Orange 600 for CTAs
- **Accent light**: Orange 200 for number badges

## Conversion Elements

1. **Primary CTA**: Orange button, appears 2x
2. **Social proof**: Subtle text below hero CTA
3. **Trust indicators**: Privacy, no judgment, control
4. **Clear value props**: Focus on user benefits
5. **Low-pressure copy**: "Get started" not "Buy now"
