DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT, 
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50),
    price DECIMAL(10, 2),
    stock_quantity INT, 
    primary key (item_id)
    );

SELECT * FROM products;
