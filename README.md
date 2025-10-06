# Seattle Slice-A-Thon

A SvelteKit web application for the First Annual Seattle Slice-A-Thon - a unique running event that combines a half marathon with pizza eating at local Seattle pizza joints.

## Description

The Seattle Slice-A-Thon is a one-of-a-kind running event where participants run a half marathon distance while stopping at local pizza-by-the-slice places along the way. The event features:

- **Half Marathon Distance**: 13.1 miles through Seattle
- **Pizza Checkpoints**: Multiple stops at local pizza joints
- **Selfie Verification**: Participants take photos with their pizza slices
- **Charity Component**: Optional donations to pizza-related charities
- **Community Event**: A fun, social running experience

The webapp provides event information, registration, FAQ, route details, and countdown to the event.

## Requirements

- **Node.js**: Version 18 or higher
- **npm**: Version 8 or higher (or bun for faster package management)
- **Modern Browser**: Chrome, Firefox, Safari, or Edge with ES6 support

## Install

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd slice-a-thon
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   
   Or using bun (faster alternative):
   ```bash
   bun install
   ```

## Running Locally

1. **Start the development server**:
   ```bash
   npm run dev
   ```
   
   Or with bun:
   ```bash
   bun run dev
   ```

2. **Open your browser** and navigate to `http://localhost:5173`

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run Svelte type checking
- `npm run check:watch` - Run type checking in watch mode
- `npm run format` - Format code with Prettier
- `npm run lint` - Run ESLint and Prettier checks
- `npm run test:unit` - Run unit tests
- `npm run test` - Run tests once

## Tech Stack

- **Framework**: SvelteKit
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Build Tool**: Vite
- **Testing**: Vitest
- **Linting**: ESLint + Prettier
- **Icons**: Font Awesome

## Project Structure

```
src/
├── lib/                    # Reusable components
│   ├── assets/            # Images and static assets
│   ├── Accordion.svelte   # FAQ accordion component
│   ├── Counter.svelte     # Event countdown timer
│   ├── Details.svelte     # Event details component
│   ├── FAQ.svelte         # FAQ section
│   ├── Registration.svelte # Registration form
│   ├── Story.svelte       # Event story section
│   └── Title.svelte       # Header component
├── routes/                # Page routes
│   ├── +layout.svelte     # Main layout
│   ├── +page.svelte       # Home page
│   ├── race-day-details/  # Race day information
│   ├── taco/              # Taco page
│   └── thank-you/         # Thank you page
└── app.html               # HTML template
```

## Deployment
The application is meant to be deployed to GitHub Pages as a static site. 
Use the [GitHub Workflow](./.github/workflows/deploy.yml) to deploy

## License

This project is private and proprietary to the Seattle Slice-A-Thon organizers.

## Contact

For questions about the event, contact: seattlesliceathon@gmail.com
