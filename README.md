This program will take a bill id and spit out a list of members of congress associated with the bill along with their term end dates. The list is in image format in order to be more visible on social networking sites. The point of this is to get people to remember who to vote for in future elections.

Input is currently static. Ideally, people would select a bill from the current congress and their preferred vote.

Requirements:
PHP
Node.js
-express
-node-caption (Old code exists that uses it. Should be removed. The program now uses HTML5 canvas.)
-govtrack-node
ImageMagick (for node-caption)
Run the node.js server. Default port is 8081 but you change it.
node server.js

Serve up the PHP directory. The easiest way to do this locally is to just run PHP's own webserver.
php -S http://localhost:8082

Open a web browser and browse to the index.html file. It will load the headings in the image and then the members of congress a few seconds later.

For more information:
https://www.govtrack.us/developers/api
https://github.com/jesseditson/node-caption

Also, just FYI, I wrote this in about an hour or two so stuff is all over the place.
