CREATE TABLE users (
  uid SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  email VARCHAR(255),
  email_verified BOOLEAN,
  date_created DATE,
  last_login DATE
);

CREATE TABLE products (
  uid SERIAL PRIMARY KEY,
  category VARCHAR(50),
  sex VARCHAR(10),
  quantity INT,
  price INT,
  image VARCHAR(150),
);

CREATE TABLE carts (
  uid SERIAL PRIMARY KEY,
  user INT REFERENCES users(uid),
  products,
)
