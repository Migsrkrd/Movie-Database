USE movies_db;

INSERT INTO movies (movie_name)
VALUES ("The Great Gatsby"),
       ("Inception"),
       ("Jaws"),
       ("The Godfather"),
       ("The Matrix"),
       ("The Lord of the Rings: The Fellowship of the Ring"),
       ("Star Wars: Episode IV - A New Hope");

INSERT INTO reviews (movie_id, review)
VALUES (1, 'good'),
       (2, 'great'),
       (3, 'bad'),
       (4, 'amazing'),
       (5, 'so bad'),
       (6, 'bad'),
       (7, 'bad');