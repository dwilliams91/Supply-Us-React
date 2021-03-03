# Overview:

Supply Us is a single page application which allows teachers to upload supply lists for their classes and allows parents and students to see one single list with all the supplies they need. 

By creating a standardized way for teachers to create their lists, items on lists can be added together to produce the total amount of an item needed. For example, if one teacher wants students to have 2 packs of mechanical pencils, and another teacher wants students to have 1 pack of pre-sharpened pencils, parents and students can see in one line that they need to buy 3 packs of pencils, with detials to show the specific breakdown. 

#View
https://supply-us.herokuapp.com/login
Teacher Login:
email: teacher@teacher.com
password: 123

Parent Login:
email: parent@parent.com
password: 123

# Features

Supply Us allows for teachers to add classes, then create a supply list for that class. They can find an item through a dropdown menu, and they can filter that dropdown menu through a search bar or another dropdown. Once they select an item, they put in the number of that item students need to buy, and can add any other description. Teachers can also edit supplies in the database or add an item. Lastly, teachers can delete items from a list or entire classes. 

Parents can login and see a dropdown menu of all the classes available. They can filter that dropdown my specific teacher. Once they select a class, they can save it and see that class's supply list. They can add as many classes as needed and see the cumulative added lists. Lastly, they can view each individual list. 



# Technologies:

Supply Us is created through React.js. It is styled with Boostrap React and the database is a json file. 

# Demoing:

Local Demo:
1) git clone repository URL in your terminal
2) go to the supply-us-API directory. Within that directory, run the json server by typing in the command "json-server -p 8088 -w database.json". This starts the json server. 
3) Go to the root directory and type in "npm install"
4) Then from the root directory, type the command "npm run". From there it starts the App. 

To view the teacher side of the app, create an account as a teacher. To view the parent side of the app, create an account as a parent. 
