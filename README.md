# Contact Manager

A simple, responsive web application for managing your contacts, built with React.

## Features

- **View Contacts:** See a list of all your contacts with their names and mobile numbers.
- **Search:** Quickly filter your contact list by typing a name or mobile number into the search bar.
- **Add Contact:** Fill out a form to seamlessly add a new contact with their Name, Email, Mobile, and Address.
- **Edit Contact:** Update details for any existing contact through an intuitive slide-out form.
- **View Details:** Click on a contact to view their full data card, including Name, Email, Mobile, and Address.
- **Delete Contact:** Easily remove contacts you no longer need.

*(Note: Currently, initial data is fetched from an external sample JSON file, and newly added contacts are stored in the temporary React state. Refreshing the page will reset the list to its initial state.)*

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone or download the project files.
2. Open your terminal and navigate to the project folder:
   ```bash
   cd contactmanager
   ```
3. Install the required project dependencies:
   ```bash
   npm install
   ```

### Running the App

To launch the app in development mode, run:

```bash
npm start
```

Your default web browser will automatically open and navigate to [http://localhost:3000](http://localhost:3000) to display the app. The page will reload if you make any edits to the code.

### Building for Production

When you are ready to deploy your app, you can create an optimized production build:

```bash
npm run build
```

This will bundle React in production mode and optimize the build for the best overall performance. The files will be generated securely inside a `build` folder.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **React Hooks:** Utilizing `useState` and `useEffect` for state management and fetching API data.
- **Vanilla CSS:** Custom styling injected directly via `App.css` to keep the application lightweight and modern.
