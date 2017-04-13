# Employee Management App
MEAN App using - Angular2 and Mongoose

# Steps to Run
1. Open Terminal and run >> npm install << from main App folder

2. Run >> npm install -g @angular/cli << to install angular-cli globally. Verify that you are running at least node 6.9.x and npm 3.x.x by running node -v and npm -v in a terminal/console window. Older versions produce errors, but newer versions are fine.

3. Run >> ng new client << to Create Client folder inside App Folder. It'll install all the angular 2 dependencies.

4. Carefully copy paste files in app>src folderincluding index.html and replace with existing ones.

5. Now from client folder run >> bower install bootstrap.

6. After making changes to client folder run >> ng-build << and it'll create dist folder in client. Our node server is pointing to this path for all static files.

7. Start mongodb.

8. Start server from main App folder by running >> node server << or install nodemon to detect if anything changes in server files.
