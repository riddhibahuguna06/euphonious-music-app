CREATE DATABASE IF NOT EXISTS music  ;

USE music ;

CREATE TABLE users(
    id INT AUTO_INCREMENT  PRIMARY KEY ,
    name VARCHAR(20) ,
    email VARCHAR(50) UNIQUE ,
    password VARCHAR(100) ,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE playlists(
    id INT AUTO_INCREMENT PRIMARY KEY ,
    name VARCHAR(50),
    user_id INT NOT NULL ,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id)
);


CREATE TABLE songs(
    id INT AUTO_INCREMENT PRIMARY KEY,
    external_id VARCHAR(100) NOT NULL UNIQUE,  -- the ID from the external API
    song_name VARCHAR(50),
    artist_name VARCHAR(50 )
);

CREATE TABLE playlists_songs(
    id INT AUTO_INCREMENT PRIMARY KEY ,
    playlist_id INT NOT NULL,
    song_id INT NOT NULL  ,
    FOREIGN KEY(playlist_id ) REFERENCES playlists(id),
    FOREIGN KEY(song_id) REFERENCES songs(id),
    UNIQUE (playlist_id, song_id)
);