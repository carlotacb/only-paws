CREATE DATABASE IF NOT EXISTS onlypaws;

USE onlypaws;

CREATE TABLE onlypaws.public.users (
  nickname STRING PRIMARY KEY,
  pet_name STRING,
  name STRING,
  user_type STRING,
  pet_type STRING,
  days STRING,
  creation_time TIMESTAMPTZ,
  update_time TIMESTAMPTZ
);
