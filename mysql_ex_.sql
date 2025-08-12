-- 문제1. 
-- 쇼핑몰 프로젝트를 위해 my_test 데이터베이스를 생성하고, 해당 데이터베이스를 사용하도록 선택하라.
-- 그 후, 고객정보를 저장할 members 테이블을 생성하라. 
-- members테이블은 다음과 같은 열(column)을 가진다. 
-- id: int, 기본키 / name:  최대 50글자 문자열, not null 제약조건 /join_date : 날짜(date)

create database my_test;

use my_test;

create table members (
	id int primary key,
    name varchar(50) not null,
    join_date date
    );

DESC members;


-- 문제2. 
-- 1번 문제에서 생성한 members 테이블에 아래 두 명의 회원 데이터를 추가하고, 테이블의 전체 내용을 조회해라
-- 1> ID: 1, 이름: 션, 가입일 : 2025-01-10 
-- 2> ID: 2, 이름: 네이트, 가입일 : 2025-02-15

Insert into members (id, name, join_date)
values(1, '션', '2025-01-10'); 

Insert into members (id, name, join_date)
values(2, '네이트', '2025-02-15');

select * from members;

-- 문제3. 
-- 2번문제에서 추가한 데이터에 다음 두 가지 작업을 수행하고, 최종결과를 조회해라. 
-- 1> id가 2인 회원 '네이트'의 이름을 '네이트2'로 변경해라.
-- 2> id가 1인 회원 '션'의 정보를 삭제해라. 

update members
set name = '네이트2' where id = 2;

delete from members where id = 1;

select * from members;

-- 문제4.
-- 쇼핑몰의 products(상품) 테이블을 다음 요구사항과 제약 조건에 맞게 생겅하고, 테이블 구조를 확인해라.
-- 'product_id` : 정수, 자동으로 1씩 증가하는 기본 키(PRIMARY KEY)
-- `product_name` : 최대 100글자의 문자열, 비어 있을 수 없음(NOT NULL)
-- `product_code` : 최대 20글자의 문자열, 값이 중복될 수 없음(UNIQUE)
-- `price` : 정수, 비어 있을 수 없음(NOT NULL)
-- `stock_count` : 정수, 비어 있을 수 없으며(NOT NULL), 값을 지정하지 않으면 기본으로 0이 입력됨(DEFAULT)
-- DESC 

create table products (
	product_id int auto_increment primary key,
    product_name varchar(100) not null,
    product_code varchar(20) unique,
    price int not null,
    stock_count int not null default 0
    );
    
    desc products;
    
-- 문제5. 
-- 고객(`customers` )과 주문(`orders` ) 테이블을 생성해라. 
-- `orders` 테이블의 `customer_id` 는 `customers` 테이블의 `customer_id` 를 참조하는 외래 키(Foreign Key) 관계를 맺어야 한다.
-- `customers` 테이블 :  `customer_id` : 정수, 기본 키, 자동 증가/ `name` : 문자열(50자), 필수
-- `orders` 테이블
-- `order_id` : 정수, 자동 증가 기본 키
-- `customer_id` : 정수, 필수
-- `order_date` : 날짜와 시간(DATETIME), 기본값은 현재 시각
-- `FOREIGN KEY` 설정: `orders.customer_id` 가 `customers.customer_id` 를 참조하도록 한다.

create table customers (
	customer_id int auto_increment primary key,
    name varchar(50) not null
    );

create table orders (
	order_id int auto_increment primary key,
    customer_id int not null,
    order_date datetime default current_timestamp,
    
    constraint fk_orders_customers foreign key(customer_id)
		references customers(customer_id)
        );

-- 두 테이블을 생성한 후, '홍길동' 고객과 그 고객이 주문한 데이터를 각각 1개씩 추가하고, 두 테이블의 전체 내용을 조회해라.

insert into customers (name) values ('홍길동');
insert into orders(customer_id) values (1);

select * from customers;
select * from orders;

-- 문제6.
-- 5번 문제에서 생성한 테이블들을 이용해 아래 두 가지 잘못된 데이터 추가를 시도하고, 왜 실패하는지 그 이유를 설명해라.
-- 1> `customers` 테이블에 존재하지 않는 `customer_id` (예: 999)를 사용하여 `orders` 테이블에 새로운 주문을 추가해라.
-- 2> `customers` 테이블에 고객을 추가할 때, 필수 항목인 `name` 을 빼고 추가해라.

-- 1> 
-- insert into orders (customer_id) values(999);
--  Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`mydealdb`.`orders`, CONSTRAINT `fk_orders_customers` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`)
-- 외래 키 제약 조건 위반 

-- 2>
-- insert into customers (customer_id) values(2);
-- Error Code: 1364. Field 'name' doesn't have a default value
-- not null 제약조건 위반 

