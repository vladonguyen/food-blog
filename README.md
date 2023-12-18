# food blog
This web SPA (Single Page App) is an project for a React JS Course in SoftUni. The topic and theme of the project are vegan blog with blog posts as well as recipes. There is a public part and pages that are accessible without authentication. After registration and login the user is able to create, edit and delete his/her own publications. They have also their own personal area, where can see their own blog posts and recipes as well as logout.

You can download the project code from my github repository 'food blog'. After you download the files, there are two main folders - client and server.

Client
Frontend (client) is build using React JS+ Vite. In order to install and make it work, you need to have Node.js installed. If that step is done, you can open your IDE (preferably Visual Studio Code) and type the following line in your terminal (you might need first to go with command cd .\client\ in order to open client folder) :
npm install 

After installation of the project and all dependencies is done, please type:
npm run dev

This will start the client part of the SPA.

Server
The server is a modification of the Softuni Practice Server github repository. Please note that the seed data in it is modified as well as some validation options added. So use the server version in the project.
In order to start the server you need to open new terminal in your IDE, to open the server folder ( cd .\server\). The command to start the server is:
node .\server.js

Additional information:

- The home page provides information about 2 blog posts and 6 recipes
- In the recipe details page there is a possibility to check ingredients checkboxes serving as a shopping list
- There is rich text editor for blog and recipe posts create  and edit. The html send with this editor is sanitized with dompurify component. 
- Delete is also possible after login.
- There is basic server based login and register validation
- There is a validation of creation of new posts and comments checking for missing/empty form fields

