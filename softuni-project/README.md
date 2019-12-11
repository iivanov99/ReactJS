# ForeverLean - Gym Apparel React Ecommerce Application
ForeverLean is a single page ecommerce application build entirely on the latest JavaScript technologies such as React.js & Node.js as a project for the SoftUni ReactJS Course. It's purpose is to provide a user-friendly web platform where user can browse different types and models of gym apparel, according to their needs and wishes. On the other side, the application also provides an admin functionality where everything can be easily managed - user orders can be accepted or declined, new apparel can be created & already created apparel can be modified.

The application has three levels of accessibility: guest user, registered user and administator.

The guest user can only browse through the different types and models of apparel, but is not authenticated to see or use ther add to cart or checkout functionalities.

The already logged in user is authenticated to not only see the different apparel, but also to see and use "My Orders" & "Cart" pages. The user is authorized to perform actions such as adding items to his corresponding cart and making an order with the items in it throught the "Checkout" button in the "Cart" page. The items then go to the "My Orders" page where information about every order is displayed.

The administrator of the application is only one. He has full access to the system and is authorized to perform actions such as acceptding/declining users' orders through the "Pending Orders" page, editing & deleting whatever apparel he wants throught the corresponding buttons on the apparel cards and also create new apparel throught the "Add New" dropdown pages ("Men", "Women", "Accessories").

## Application Dependancies
When the project is downloaded or cloned open the terminal in both project-rest-api & project-front-end folders and type the following command: 
```
npm install
```
## Run the rest api
To start the rest api type in the corresponding terminal the following command:
```
node index
```
## Run the React app
To start the React app type in the corresponding terminal the following command:
```
npm start
```
The React application will be listening on: 
```
localhost:3000
```