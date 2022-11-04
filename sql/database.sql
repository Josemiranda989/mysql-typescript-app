CREATE DATABASE node_mysql_ts;

CREATE TABLE posts(
    id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title varchar(200) NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT,
    created_at Timestamp DEFAULT CURRENT_TIME
)

DESCRIBE posts;