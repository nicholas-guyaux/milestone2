

CREATE TABLE scores (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  score INT NOT NULL
);

INSERT INTO scores (name, score)
  VALUES ('', 0),('', 0),('', 0),('', 0),('', 0),
  ('', 0),('', 0),('', 0),('', 0),('', 0);
