create database restful
;
use restful
;
drop table user
;
create table user(
id integer primary key auto_increment,
user_id text,
password text,
name text,
age integer)
;
select * from user
;
drop table user_login
;
create table user_login(
id integer primary key auto_increment,
user_real_id integer,
token text,
created_at DATETIME default current_timestamp)
;
select * from user_login