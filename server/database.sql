CREATE DATABASE bandpauto;

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(50) NOT NULL,
  logged_in BOOLEAN DEFAULT FALSE
);

CREATE TABLE maintenance(
  maintenance_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES user(user_id),
  car_make VARCHAR(50) NOT NULL,
  car_model VARCHAR(50) NOT NULL,
  CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES user(user_id)
);