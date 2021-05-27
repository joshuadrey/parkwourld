CREATE TABLE users (
id SERIAL PRIMARY KEY,
user_name VARCHAR(100),
password VARCHAR(100));

CREATE TABLE locations (
id SERIAL PRIMARY KEY,
name VARCHAR(100),
pay BOOLEAN NOT NULL,
image VARCHAR(100));

CREATE TABLE rating (
id SERIAL PRIMARY KEY,
name VARCHAR(100),
rating SMALLINT,
date_created TIMESTAMP,
user_name VARCHAR REFERENCES users(user_name),
);

CREATE TABLE tricks (
id SERIAL PRIMARY KEY,
name VARCHAR(100),
video TEXT,
description TEXT);