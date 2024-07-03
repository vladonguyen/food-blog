# Vegan Blog SPA Documentation

This Single Page App (SPA) is a project developed as part of a **React JS Course** at SoftUni. The project revolves around a vegan blog featuring both blog posts and recipes. The application has public pages accessible without authentication, and users can register and log in to create, edit, and delete their own publications. Users also have a personal area where they can manage their blog posts and recipes.

# Live Website
This SPA is deployed on Firebase and is live at [https://food-blog-react-exam.web.app/](https://food-blog-react-exam.web.app/).

## Project Structure

You can download the project code from the GitHub repository 'food-blog.' The project is organized into two main folders:

### Client (Frontend)

The frontend is built using React JS + Vite. To set up the client, ensure you have Node.js installed. Open your preferred IDE (preferably Visual Studio Code) and run the following commands in your terminal:

```bash
cd ./client/
npm install
npm run dev
```
This will start the client part of the SPA.

### Server
The server is a modification of the SoftUni Practice Server GitHub repository. Please note that the **seed data in it is modified as well as some validation options added. So use the server version in the project.** In order to start the server you need to open a new terminal in your IDE, to open the server folder. The command to start the server is:
```bash
cd ./server/
node ./server.js
```
### Additional Information
- The home page provides information about 2 blog posts and 6 recipes
- In the recipe details page, there is a possibility to check ingredients checkboxes serving as a shopping list
- There is a rich text editor for blog and recipe posts create and edit. The HTML sent with this editor is sanitized with dompurify component.
- Delete is also possible after login.
- There is basic server-based login and register validation
- There is validation of the creation of new posts and comments checking for missing/empty form fields


