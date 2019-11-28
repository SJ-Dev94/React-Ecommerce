CREATE TABLE users (
  uid SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) UNIQUE NOT NULL,
  email CHAR(255) NOT NULL,
  password CHAR(60),
  date_created DATE,
  last_login DATE
);

CREATE TABLE products (
  uid SERIAL PRIMARY KEY NOT NULL,
  category VARCHAR(50) NOT NULL,
  sex VARCHAR(10) NOT NULL,
  quantity INT NOT NULL,
  price INT NOT NULL,
  image VARCHAR(150) ,
  description VARCHAR(300) NOT NULL
);

c