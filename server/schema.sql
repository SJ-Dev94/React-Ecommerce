

/*
 ----READ ME----
 the order in which these tables are displayed is the order in which you must create them due to foreign key restraints

 gender -> users -> categories -> products  -> 
 ---------------
 */

---------------
/* GENDER */
---------------

CREATE TABLE gender (
  gender VARCHAR(6) PRIMARY KEY NOT NULL
);

INSERT INTO gender VALUES ('Men');
INSERT INTO gender VALUES ('Women');

---------------
/* CATEGORIES */
---------------

CREATE TABLE categories (
  category VARCHAR(50) PRIMARY KEY NOT NULL UNIQUE,
  gender VARCHAR(6) REFERENCES gender(gender),
  image VARCHAR NOT NULL
);


INSERT INTO categories VALUES ('Women''s Shirts', 'Women', 'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-demo.appspot.com/o/categoryimages%2Fmensshirts.jpg?alt=media&token=df713cd9-ea81-459a-b6cf-b1eb0765b24c');

INSERT INTO categories VALUES ('Women''s Pants', 'Women', 'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-demo.appspot.com/o/categoryimages%2Fwomenspants.jpg?alt=media&token=53a8b742-eb67-411b-88b3-3e3eb96e0e66');

INSERT INTO categories VALUES ('Women''s Jackets', 'Women', 'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-demo.appspot.com/o/categoryimages%2Fwomensjackets.jpg?alt=media&token=52b7c0d7-9134-4a26-8de0-eb7dfe8587e7');

INSERT INTO categories VALUES ('Men''s Shirts', 'Men', 'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-demo.appspot.com/o/categoryimages%2Fmensshirts.jpg?alt=media&token=df713cd9-ea81-459a-b6cf-b1eb0765b24c');

INSERT INTO categories VALUES ('Men''s Pants', 'Men', 'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-demo.appspot.com/o/categoryimages%2Fmenspants.jpg?alt=media&token=5a0ff9c7-7241-48b4-9012-aadb692143d8');

INSERT INTO categories VALUES ('Men''s Jackets', 'Men', 'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-demo.appspot.com/o/categoryimages%2Fmensjackets.jpg?alt=media&token=15fa3bba-d07b-41ab-92ad-5ef5b95349bb');

---------------
/* USERS */
---------------

CREATE TABLE users (
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(60),
  date_created DATE,
  last_login DATE
);

---------------
/* PRODUCTS */
---------------

CREATE TABLE product_sizes (
  size VARCHAR PRIMARY KEY NOT NULL
);

CREATE TABLE product_images (
  url VARCHAR PRIMARY KEY NOT NULL UNIQUE
);

CREATE TABLE products (
  uid SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(50) NOT NULL,
  category VARCHAR(50) REFERENCES categories(category) NOT NULL,
  gender VARCHAR(6) references categories(gender) NOT NULL,
  quantity INT NOT NULL,
  price INT NOT NULL,
  size VARCHAR references product_sizes(size),
  image VARCHAR references product_images(url),
  description VARCHAR(300) NOT NULL
);

CREATE TABLE cart (
 session int PRIMARY KEY NOT NULL,
 username VARCHAR references users(username),
)

CREATE TABLE cart_items (
  session int references cart(session) PRIMARY KEY,
  product_id int references products(uid),
)
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

