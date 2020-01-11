## Bamazon- Online Customer Database

## ABOUT BAMAZON
The Bamazon app will display 10 items available in a Bamazon store.

## HOW TO USE LIRI

* Clone the repo to your terminal
* Run npm Install
* Cd into the folder you just created
* npm Install mysql
* npm Install inquirer
* Input command node bamazonCustomer.js
* Read the displayed information on the items (including the product name, price, and in-store quanitity).
* Opt to initialize and order for your preferred product by inputting the product's id.
* Specify the quantity of the product you wish to buy.

## EXAMPLES

EXAMPLE 1:

Input "node bamazonCustomer.js" to display the list of products with their information. Then enter "5" for product 5 (fishing pole). Then enter quantity "21" to see the results. Notice that you will receive an error for entering a quantity which exceeds the in-store quantity, and you will be asked to start the order over.


![2020-01-11 (4)](https://user-images.githubusercontent.com/55059602/72210349-9136cc80-347f-11ea-8a2d-f9d22dd22874.png)


EXAMPLE 2:

Input "node bamazonCustomer.js". Enter "5" for product 5 again. This time enter "3" to the see the results. Since you have entered a quantity that can be met, 

![2020-01-11 (6)](https://user-images.githubusercontent.com/55059602/72210390-4073a380-3480-11ea-845e-e6e87f36987e.png)


## TECHNOLOGIES USED

* Javascript
* Node.js
* Node Packages:
    * Inquirer
    * MySQL