CREATE DATABASE IF NOT EXISTS onlypaws;

USE onlypaws;

CREATE TABLE IF NOT EXISTS public.users (
  nickname STRING PRIMARY KEY,
  pet_name STRING,
  name STRING,
  user_type STRING,
  pet_type STRING,
  days STRING,
  password STRING
);

CREATE TABLE IF NOT EXISTS public.session (
    id UUID PRIMARY KEY,
    nickname STRING
);
