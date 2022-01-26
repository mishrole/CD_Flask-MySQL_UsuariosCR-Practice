Create database users_cr;
Use users_cr;

Create table users (
	id int primary key auto_increment,
	first_name varchar(45),
    last_name varchar(45),
    email varchar(45),
	created_at datetime,
    updated_at datetime
);
