# GeneratorNumberRandom.com

A free, fun, and fast random number generator website built with Next.js 14+ and deployed on Vercel.

## Features

- **Random Number Generator** - Generate numbers in any range with customizable options
- **Coin Flip** - Heads or tails with animation
- **Dice Roller** - Roll 1-10 virtual dice
- **Yes/No Generator** - Quick binary decisions
- **Random Number Picker** - Pick from your own list of numbers
- **Random Name Picker** - Randomly select names from a list
- **Random Letter Generator** - Generate A-Z letters
- **Random Color Generator** - Discover random colors with HEX/RGB codes
- **Random Date Generator** - Pick random dates in any range
- **10 SEO Preset Pages** - Pre-configured ranges (1-10, 1-100, 1-20, etc.)

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Analytics:** Google Analytics 4 (optional)
- **Monetization:** Google AdSense (optional)

## Getting Started

### Prerequisites

- Node.js 20.9.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/generatornumberrandom.git

# Navigate to the project
cd generatornumberrandom

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
# Google Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google AdSense (optional)
NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=ca-pub-XXXXXXXXXXXXXXXX
```

## Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Homepage (Random Number Generator)
│   ├── coin-flip/           # Coin Flip tool
│   ├── dice-roller/         # Dice Roller tool
│   ├── yes-no-generator/    # Yes/No Generator
│   ├── random-number-picker/# Number Picker from list
│   ├── random-name-picker/  # Name Picker from list
│   ├── random-letter-generator/
│   ├── random-color-generator/
│   ├── random-date-generator/
│   ├── random-number-[min]-[max]/ # Dynamic SEO preset pages
│   ├── privacy-policy/
│   ├── terms/
│   ├── about/
│   ├── contact/
│   ├── sitemap.ts           # Auto-generated sitemap
│   └── robots.ts            # Robots.txt
├── components/
│   ├── tools/               # Individual tool components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ToolCard.tsx
│   ├── ToolChips.tsx
│   ├── PageContent.tsx
│   └── ...
└── globals.css              # Global styles and CSS variables
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Configure environment variables (if using Analytics/AdSense)
4. Deploy

The site will be live at your Vercel URL or custom domain.

### Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test all tools on mobile and desktop
- [ ] Submit sitemap to Google Search Console
- [ ] Configure Google Analytics (optional)
- [ ] Set up Google AdSense (optional)

## Design Principles

- **100% Free** - No premium features, subscriptions, or hidden costs
- **No Account Required** - No signup, login, or email capture
- **Privacy First** - All randomization happens client-side
- **Fast & Instant** - Static-first rendering, minimal JavaScript
- **Fun Design** - Playful animations and dark mode interface

## License

MIT License - Feel free to use this project as a template for your own random generator site.
