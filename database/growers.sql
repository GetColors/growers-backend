/* Drop Tables */

DROP TABLE IF EXISTS crops;

/* Create Tables */

CREATE TABLE crops
(
	id varchar(30) NOT NULL UNIQUE,
	title varchar(100) NOT NULL,
	user_id varchar(30) NOT NULL,
	PRIMARY KEY (id, title)
) WITHOUT OIDS;