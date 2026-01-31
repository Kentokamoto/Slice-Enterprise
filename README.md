# Slice Enterprise

A SvelteKit web application for Slice Enterprise - a running organization that combines runnning and food in a single event.

## Description

Slice Enterprise hosts a number of running events around the city of Seattle to host with a theme around food. Some of these events include:

- **Slice-a-Thon**: Half Marathon run making stops at local pizza joints
- **Taco Ocho**: 8 miles, 8 Tacos, all on August 8th
- **Eggnog Leg Jog**: Kicking off the holiday season with some baked goods and dancing around Greenlake

The webapp provides a landing page for all information regarding the organization and races being hosted by Slice Enterprise.

## Requirements

- **Bun**: Version 1 or higher
- **Modern Browser**: Chrome, Firefox, Safari, or Edge with ES6 support

## Install

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd slice-enterprise
   ```

2. **Install dependencies**:
   ```bash
   bun install
   ```

## Running Locally

1. **Start the development server**:
   ```bash
   bun run dev
   ```

2. **Open your browser** and navigate to `http://localhost:5173`

3. **Build for production**:
   ```bash
   bun run build
   ```

4. **Preview production build**:
   ```bash
   bun run preview
   ```

## Tech Stack

- **Framework**: SvelteKit
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Build Tool**: Vite
- **Testing**: Vitest
- **Linting**: ESLint + Prettier (These will be updated to use oxlint and oxfmt)
- **Icons**: Font Awesome

## Project Structure
TBD

## Deployment
The website can be up uploaded to either GitHub Pages or Vercel.

### Vercel
Follow the setup instructions on Vercel's [Projects and Deployments](https://vercel.com/docs/getting-started-with-vercel/projects-deployments) page.

The [Vercel Config](./vercel.json) file serves as a place to customize the deployment.

### GitHub Pages
Use the [GitHub Workflow](./.github/workflows/deploy.yml) to deploy

## License

This project is private and proprietary to the Seattle Slice Enterprise organizers.

## Contact

For questions about the event, contact: (seattlesliceenterprise@gmail.com)[mailto:seattlesliceenterprise@gmail.com]
