
# Wealth Wave - Prototype Financial Solutions

## Project Overview

This is a prototype version of the Wealth Wave financial solutions platform designed to demonstrate the UI and interactions for a comprehensive financial services website. This prototype showcases various sections like Personal Banking, Corporate Banking, Public Banking, Investment, International Banking, and Quantitative Finance.

## Prototype Features

- Responsive design that works on desktop, tablet, and mobile
- Modern UI with a professional dark/gold theme matching financial sector expectations
- Multiple banking service sections with simplified dummy content
- Card management system (visual demonstration)
- Support and contact pages
- Interactive elements and visualizations

**Note: This is a non-functional prototype. No actual financial transactions or data processing occurs.**

## Technologies Used

This prototype is built with:

- Vite
- TypeScript
- React
- Tailwind CSS
- React Router Dom
- Recharts for data visualization
- Lucide Icons

## Getting Started

To run this prototype locally:

```sh
# Clone the repository
git clone <REPOSITORY_URL>

# Navigate to the project directory
cd wealth-wave-prototype

# Install the necessary dependencies
npm i

# Start the development server with auto-reloading and an instant preview
npm run dev
```

## Project Structure

- `/src`: Contains the source code for the application
  - `/components`: Reusable UI components
  - `/pages`: Individual page components
  - `/hooks`: Custom React hooks
  - `/lib`: Utility functions and shared logic

## Deployment

The prototype can be built for production using:

```sh
npm run build
```

This will create optimized files in the `dist` directory that can be deployed to any static hosting service.

## Prototype Limitations

As this is a prototype:
- Authentication does not actually validate credentials
- No backend connection or data persistence
- Forms submit data for demonstration only
- Financial calculations are simulated
