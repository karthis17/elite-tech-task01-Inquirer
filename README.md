
# Library Management System

This project is a simple library management system implemented in Node.js, allowing users to perform various actions such as viewing books, adding new books, searching for books, managing patrons, and more.

## Installation

1. **Clone this repository to your local machine:**

    ```bash
    git clone 'https://github.com/karthis17/elite-tech-task01-Inquirer.git'
    ```

2. **Clone this repository which is API for where all the data are stored**

    ```bash
    git clone 'https://github.com/karthis17/elite-tech-task01-library-api.git'
    ```

3. **Install the required dependencies in both packages:**

    ```bash
    npm install
    ```

## Usage

To start the application, run the following command in library-api package:

```bash
npm start
```
**Note**: Make sure the application runs in Port number 3000 

Once library-API starts to run, run the following command in the inquirer package:

```bash
npm start
```
This will initiate the application, prompting users to sign in or sign up based on their choice. Users can interact with the library system through the command line interface (CLI) by selecting various options provided in the main menu.

## Features

- **User Authentication:** Users can sign in or sign up to access the library system.
- **Main Menu Options:**
  - List all the books
  - Search for books
  - Add a new book(Admin)
  - Update book details(Admin)
  - Delete a book(Admin)
  - Add a patron(Admin)
  - Exit the application(Admin)
- **Error Handling:** The application includes error handling for various scenarios to ensure a smooth user experience.
- **Data Management:** All the data are stored in the database API endpoint.

 **Note:** Admin only can add, update, and delete data 

## File Structure
- module/: Contains modules for different functionalities of the library system.
- madule/menu.js: Defines the main menu functionality.
- madule/DBquery.js: Contains database-related queries and operations.
- madule/questions.js: Handles user prompts and interactions using inquirer.
- index.js: Entry point of the application.
