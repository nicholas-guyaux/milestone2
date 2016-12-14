DROP DATABASE IF EXISTS game;
CREATE DATABASE game;

\c game;

CREATE TABLE games (
  ID SERIAL PRIMARY KEY,
  title VARCHAR,
  blogdate VARCHAR,
  entry VARCHAR
);

INSERT INTO games (title, blogdate, entry)
  VALUES ('First entry', '21 Nov 2016', 'This is the first blog post');
