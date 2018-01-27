var mysql = require("mysql");
var inquirer = require("inquirer");
var consoleTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log(`Connected as ID ${connection.threadId} \n`);
    displayInventory();
});

function displayInventory() {
    console.log("Welcome to Bamazon! Check out our products: \n");
    connection.query('SELECT item_id AS "Product ID", product_name AS "Product Name", price AS "Price per Unit" FROM products', function (err, res) {
        if (err) throw err;
        console.table(res);

        inquirer.prompt([{
                name: "getID",
                type: "input",
                message: "Please enter the ID for the product you'd like to buy: "
            },
            {
                name: "getQuantity",
                type: "input",
                message: "How many units of this item do you want to buy?"
            }
        ]).then(function (response) {
            //response.getID is the ID of the product user wants
            //response.getQuantity is the quantity
            //res is the entire table as an object
            // console.log(res);
            // console.log(res[response.getID - 1]);
            var sSQL = "SELECT * FROM products WHERE item_id=" + res[parseInt(response.getID) - 1];
            connection.query(sSQL,
            function(err, result) {
                if (err) throw err;
                if (res.length == 1 && res.stock_quantity >= response.getQuantity){
                    //sufficient stock, reduce inventory and update DB
                    sSQL = "UPDATE products set stock_quantity = stock_quantity - " || response.getQuantity || " WHERE item_id = " + res[response.getID - 1];
                    connection.query(sSQL,
                    function(err, result){
                        if (err) throw err;
                        console.log("Bamazon order completed!");
                        console.log("You ordered " + response.getQuantity + " of " + res[response.getID - 1]["Product Name"]);
                    })
                }
            });

        });
    });
}