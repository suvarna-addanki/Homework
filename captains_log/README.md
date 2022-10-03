Practice What You Learned
The Captain's Log

Full CRUD app with a mongo database
Links to an external site.Prerequisites
JavaScript
Express / Node
Mongo / Mongoose


Every great captain, whether on the waters or in the skies, keeps a daily log.

Let's build the perfect Captain's Log App for our extraordinary captains.

There are many ways to get started building an app. This lab follows a specific order for two reasons:

to align with the content of lecture
to give you an order to guide you to create small bits of functionality and test each one before moving on to the next part
If you finish lab early consider:

adding some CSS and practice styling your app
try working with the date object! Try to make it look human readable in HTML. It's tricky! A HintLinks to an external site.
try working through the next section of the lab before it is covered in lecture - see what you can figure out
SUPER BONUS - Once you finish this whole lab, add a second model for comments, it should have the name of the person who wrote it, and some text for the comment (maybe time stamps?). This model should 'belong' to the post, the data should be related in some way. Do your own research on how to set up a one-to-many relationship (one post can have many comments, one comment only belongs to one post), in MongoDB. Use Mongo Documents, Google.
Links to an external site.Set up
Let's keep track of our Restful Routes as we build out our app. Copy/paste this table into a fresh file, open an excel/sheets spreadsheet or draw on a piece of paper. Feel free to add more columns and notes to help you put it all together.

Index, New and Create has been completed for you.

Links to an external site.Restful Routes
#	Action	URL	HTTP Verb	jsx view filename	mongoose method
1	Index	/logs/	GET	Index.jsx	Log.find()
2	Show				
3	New	/logs/new	GET	New.jsx	none
4	Create	/logs/	POS T	none	Log.create(req.body)
5	Edit				
6	Update				
7	Destroy				
 

In your homework folder
mkdir captains_log
cd captains_log
create a new express app
Links to an external site.New
create a new route in your server.js- be sure to follow the Restful convention
just have it res.send('new')as the response for now
make a views directory
install express-react-views react react-dom
touch views/New.jsx
Create the view, it should contain a form with the following:
form with action="/logs"and method="POST"
input type text for a title
input type textarea for an entry
input type checkbox for shipIsBroken
input type submit
change your res.send to res.render this view
Links to an external site.Create
create a createroute in your server.js- be sure to follow the Restful convention
just have it res.send('received')as the response for now
use and configure body-parserin your server.js(note, this package was once separate, but has been added back in to express more detailsLinks to an external site.
check to make sure it works by changing the res.sendfrom a string to sending the req.body- it should send the data you inputted to your newform
upgrade your data
change the input of your checkbox to be true/false rather than on
now when you check your res.send(req.body)you should see true/false rather than 'on/off' - the rest of your data should stay the same
Links to an external site.Mongo
install mongoose and configure it in your server.js
Links to an external site.Logs Model
mkdir models
touch models/logs.js
Create the logs schema
title: string
entry: string
shipIsBroken: Boolean (bonus: set a default to true)

Super bonus:

as a second argument to mongoose.Schema(), add { timestamps: true }
Links to an external site.Upgrade your Create Route
upgrade your code to create your log in MongoDB
have your route redirect to the show page after create
Stretch: make a seed file and seed it
Links to an external site.Index Route
In server.jsmake an index route, be sure to follow the Restful convention
first, just test it by having it res.send('index')
Don't forget to fill out your Restful table!
create Index.jsxand change your res.sendto res.renderthis page
upgrade your route and jsx to render all the logs in your database, just make an unordered list of the titles for now
Add a link to the create page
Links to an external site.Show Route
Fill out your Restful table
In server.jsmake a show route, be sure to follow the Restful convention
create a mongo query and res.sendyour data as a string
upgrade your Index.jsxso that each title links to its show page
Create a Show.jsxand add HTML
show the title
show the entry
show whether the ship is broken or not
add a link back to the index page
bonus:
if you had added time stamps to your model, display the date the entry was created
upgrade your res.sendto a res.renderof your Show.jsx
Links to an external site.Delete Route
Fill out your Restful table
in your Index.jsx, add a delete form
install and configure method-override
upgrade your delete form to have the appropriate action and method
make your delete route in your server.js
make your delete route delete your log and redirect back to your index route
Links to an external site.Edit Route
Fill out your Restful table
in your Index.jsx, add a link to your edit route
create your edit route in your server.js
create your Edit.jsx
test it to make sure it works as expected (be sure to populate your form with your log's data)
Links to an external site.Put Route
Fill out your Restful table
upgrade yourEdit.jsxform to have the appropriate action and method
create your PUT route
First, just have it res.sendthe updated log and check it is as expected
change the res.sendto a res.redirectto your index page
Links to an external site.Router
mkdir controllers
touch controllers/logs.js
work on refactoring your code so your logs routes are in your controller file, rather than in server.js
Links to an external site.Bonuses
The captain wants to keep track of eating habits: make a new set of routes in a new file in your controller folder called foodlogs
build out the 7 restful routes for foodlogs, include a new model with whatever properties make sense
make a seed file and seed it
have your update route redirect to the show page of the log that was edited
research res.redirect('back')
create a seed file and seed your database
work on your css, make this Captain's Log look awesome!
if you have timestamps, figure out how to edit/display the edited date