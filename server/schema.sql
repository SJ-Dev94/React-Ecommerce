/* fix schema of foreign keys for gender */

---------------
/* USERS */
---------------

CREATE TABLE users (
  uid SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) UNIQUE NOT NULL,
  email CHAR(255) NOT NULL,
  password CHAR(60),
  date_created DATE,
  last_login DATE
);

---------------
/* PRODUCTS */
---------------
CREATE TABLE products (
  uid SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(50) NOT NULL,
  category VARCHAR(50) REFERENCES categories(category) NOT NULL,
  gender VARCHAR(6) references categories(gender) NOT NULL,
  quantity INT NOT NULL,
  price INT NOT NULL,
  sizes text[],
  image VARCHAR NOT NULL,
  description VARCHAR(300) NOT NULL
);

INSERT INTO products VALUES (
  DEFAULT,
  'Basic Shirt',
  'Shirts',
  'Women',
  50,
  25,
  ARRAY['XS','Small', 'Medium', 'Large'],
  'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-demo.appspot.com/o/womensshirts%2Fgoods_12_414443.jpg?alt=media&token=7f7d9a9b-04b9-4274-8028-3016944351d5',
  'A cozy t-shirt for casual attire.'
);

INSERT INTO products VALUES (
  DEFAULT,
  'Crew Neck Long Sleeve Shirt ',
  'Shirts',
  'Women',
  50,
  25,
  ARRAY['XS','Small', 'Medium', 'Large'],
  'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-demo.appspot.com/o/womensshirts%2Fgoods_36_418234.jpg?alt=media&token=a7c26fd2-8a06-4b88-8329-aa480757dc5e',
  'A cozy crew neck for casual attire.'
);

---------------
/* GENDER */
---------------

CREATE TABLE gender (
  id SERIAL PRIMARY KEY NOT NULL,
  gender VARCHAR(6) UNIQUE NOT NULL
);

INSERT INTO gender VALUES (DEFAULT, 'Men');
INSERT INTO gender VALUES (DEFAULT, 'Women');

---------------
/* CATEGORIES */
---------------

CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  category VARCHAR(50) UNIQUE NOT NULL,
  gender VARCHAR(6) UNIQUE NOT NULL,
  image VARCHAR NOT NULL
);


INSERT INTO categories VALUES (DEFAULT, 'Shirts', 'Women', 'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-demo.appspot.com/o/categoryimages%2Fmensshirts.jpg?alt=media&token=df713cd9-ea81-459a-b6cf-b1eb0765b24c');

INSERT INTO categories VALUES (DEFAULT, 'Pants', 'Women', 'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-demo.appspot.com/o/categoryimages%2Fwomenspants.jpg?alt=media&token=53a8b742-eb67-411b-88b3-3e3eb96e0e66');

INSERT INTO categories VALUES (DEFAULT, 'Jackets', 'Women', 'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-demo.appspot.com/o/categoryimages%2Fwomensjackets.jpg?alt=media&token=52b7c0d7-9134-4a26-8de0-eb7dfe8587e7');



INSERT INTO categories VALUES (DEFAULT, 'Shirts', 'Men', 'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-demo.appspot.com/o/categoryimages%2Fmensshirts.jpg?alt=media&token=df713cd9-ea81-459a-b6cf-b1eb0765b24c');

INSERT INTO categories VALUES (DEFAULT, 'Pants', 'Men', 'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-demo.appspot.com/o/categoryimages%2Fmenspants.jpg?alt=media&token=5a0ff9c7-7241-48b4-9012-aadb692143d8');

INSERT INTO categories VALUES (DEFAULT, 'Jackets', 'Men', 'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-demo.appspot.com/o/categoryimages%2Fmensjackets.jpg?alt=media&token=15fa3bba-d07b-41ab-92ad-5ef5b95349bb');
