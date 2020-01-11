var mysql = require("mysql");

var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    port: 3306,
  
    user: "root",
  
    password: "MHane!952",
    database: "bamazon"
  });

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayAllProducts();
  });

  function displayAllProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.log("Items up for sale: ");
      console.log("-----------------------------------");
      for (var i = 0; i < res.length; i++) {
        console.log("ID: " + res[i].item_id + " || Product: " 
                    + res[i].product_name + " || Department: " 
                    + res[i].department_name + " || Price: " 
                    + res[i].price + " || Quantity: " 
                    + res[i].stock_quantity 
                    );
        console.log("------------------");
      };
      console.log("-----------------------------------");
       querySpecificProduct();
    });
     
  };

function querySpecificProduct() {
    inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "Which product (by item_id) would you like to buy?",
        },
        {
            type: "input",
            name: "quantity",
            message: "How much of the product (Quantity) do you want to buy?"
        }
    ])
    .then(function(answer) {
        var query = "SELECT product_name, price, stock_quantity FROM products WHERE item_id = ?";
        connection.query(query, [answer.id], function(err, res) {
           var numSold = answer.quantity;
           var totalCost = res[0].price * numSold;
           var newQuantity = parseInt(res[0].stock_quantity - numSold)
        if (err) throw err;
        if (res[0].stock_quantity < answer.quantity) {
            console.log("ERROR: Insufficient store quantity.")
            console.log("-----------------------------------");
            console.log("Please answer again:")
            console.log("------------------");
            querySpecificProduct();
         } else {
            connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?" [newQuantity, answer.id]);
            console.log("Your order for " + numSold + " units of " + res[0].product_name + " has been placed.")
            console.log("You spent $" + totalCost + " on your purchase.");
            connection.end();
         };
       });
    
    });
};

