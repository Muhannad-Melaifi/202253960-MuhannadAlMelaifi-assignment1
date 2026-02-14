# Technical Documentation (Assignment 1)

## Overview
This project is a personal portfolio web app built with:
- HTML for structure
- CSS for styling and responsive layout
- JavaScript for interactivity (theme toggle, greeting, validation)

## Pages & Sections
### `index.html`
Contains:
- Header navigation with links to page sections
- Hero section with greetings
- About section with intro + skills
- Projects section with two project cards
- Contact section with a form (no backend)
- Footer with dynamic year

## Styling (`css/styles.css`)
### Responsive Design
- Desktop uses multi-column grids (`grid-template-columns`)
- Tablet/mobile collapses to single-column layout using media queries:


### Theme System
- Uses CSS variables (custom properties) in 
- Light mode overrides variables in 

## JavaScript (`js/script.js`)
### Features
1. Theme toggle
   - Toggles `data-theme` attribute on `<html>`

2. Time-based greeting
   - Reads current hour and sets a greeting message in the hero section

3. Mobile navigation
   - Toggles menu visibility on small screens
   - Closes menu when a link is clicked

4. Contact form validation
   - Checks:
     - Name length ≥ 2
     - Email matches a simple regex
     - Message length ≥ 10
   - Displays inline error messages
   - Shows a toast message on success or failure
   - No backend submission

5. Footer year
   - Updates year automatically with JavaScript

## Known Limitations
- Contact form does not send messages (no backend).
- Project links are not included; can be added later.

## How to Extend
- Add GitHub/LinkedIn links in the Contact sidebar
- Add a “Skills” or “Achievements” section
- Add project buttons linking to demos or repositories
