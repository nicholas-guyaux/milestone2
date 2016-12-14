DROP DATABASE IF EXISTS game;
CREATE DATABASE game;

\c game;

CREATE TABLE scores (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  score INT NOT NULL
);

INSERT INTO scores (name, score)
  VALUES ('Nick', 15);
