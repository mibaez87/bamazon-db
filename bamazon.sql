CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	product_name VARCHAR(55) NOT NULL,
    department_name VARCHAR(55) NOT NULL,
    price DECIMAL (10,2) NOT NULL,
    stock_quantity INT NOT NULL
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dining Table", "FURNITURE", 799.99, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Queen Bedroom Set", "FURNITURE", 975.00, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Recliner", "FURNITURE", 259.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mattress Set", "FURNITURE", 850.00, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TV", "ELECTRONICS", 555.00, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hoverboard", "ELECTRONICS", 184.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Laptop", "ELECTRONICS", 624.98, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Washing Machine", "APPLIANCES", 599.00, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dryer", "APPLIANCES", 480.00, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Refrigerator", "APPLIANCES", 1021.98, 3);