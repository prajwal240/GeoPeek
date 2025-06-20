# GeoPeek

GeoPeek is a static, interactive, and educational web application that provides detailed information about countries across the globe. From official and common names, to flags, geographic details, and intelligent responses via chatbot, GeoPeek serves as your one-stop platform to explore the world.

### Appllication Link: http://geopeek.vercel.app/

## Features

-  **Homepage**
  - A warm welcome section with four featured country cards (official + common names with flags).
  - Embedded Google Map displaying a wide view of Asia.
  
-  **About**
  - Overview of the GeoPeek platform and its purpose.

-  **CountryList**
  - Displays a scrollable list of countries with:
    - Common & official names
    - National flags
    - "Know More" links to access detailed info
  - Implements **infinite scroll** for smooth performance and user experience.

-  **Info**
  - Detailed country information including:
    - Flag (fetched via API)
    - Country data (fetched using **Gemini 2.0 Flash model**)
    - Embedded Google Map specific to the selected country
  - Country data can be accessed via:
    - Searchbar
    - Clicking “Know More” from Homepage or CountryList
  - Flag data passed via `useContext` (if navigated from CountryList or Homepage)

-  **InfoBot (Chatbot)**
  - Smart chatbot interface powered by **Gemini 2.0 Flash**
  - Responds only to questions related to countries/nations
  - Provides quick, AI-generated responses about any nation

## Tech Stack

- **Frontend**: React.js (with Next.js) / Typescript
- **Styling**: Tailwind CSS 
- **AI Model**: Gemini 2.0 Flash
- **State Management**: React Hooks, Context API
- **Maps**: Google Maps Embed (iframe)
- **Performance**: Infinite scroll for optimized data rendering


## Usage Guide

### 1. Clone the Repository
```bash
git clone https://github.com/prajwal240/GeoPeek.git
cd GeoPeek
```
### 2. Install Dependencies
```
npm install
```
### 3. Run the Development Server
```
npm run dev
```
