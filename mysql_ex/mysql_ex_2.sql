
use my_shop;

SET FOREIGN_KEY_CHECKS = 0; 
truncate table products;
truncate table customers;
truncate table orders;
SET FOREIGN_KEY_CHECKS = 1; 

INSERT INTO customers (name, email, password, address, join_date) VALUES
('이순신', 'yisunsin@example.com', 'password123', '서울특별시 중구 세종대로', '2023-05-01'),
('세종대왕', 'sejong@example.com', 'password456', '서울특별시 종로구 사직로', '2024-05-01'),
('장영실', 'youngsil@example.com', 'password789', '부산광역시 동래구 복천동', '2025-05-01');

INSERT INTO products (name, description, price, stock_quantity) VALUES
('갤럭시', '최신 AI 기능이 탑재된 고성능 스마트폰', 10000, 55),
('LG 그램', '초경량 디자인과 강력한 성능을 자랑하는 노트북', 20000, 35),
('아이폰', '직관적인 사용자 경험을 제공하는 스마트폰', 5000, 55),
('에어팟', '편리한 사용성의 무선 이어폰', 3000, 110),
('보급형 스마트폰', NULL, 5000, 100);

INSERT INTO orders (customer_id, product_id, quantity) VALUES
(1, 1, 1), -- 이순신 고객이 갤럭시 1개 주문
(2, 2, 1), -- 세종대왕 고객이 LG 그램 1개 주문
(3, 3, 1), -- 장영실 고객이 아이폰 1개 주문
(1, 4, 2), -- 이순신 고객이 에어팟 2개 추가 주문
(2, 2, 1); -- 세종대왕 고객이 LG 그램 1개 주문(추가 주문)


-- 1번 
-- `products` 테이블에 있는 모든 상품의 이름(`name` )과 가격(`price` ) 정보를 조회해라. 
-- 단, 조회 결과의 열 이름은 각각 '상품명'과 '판매가'로 표시되어야 한다.

select name AS 상품명, price AS 판매가 from products;

-- 2번
-- `customers` 테이블에서 '장영실' 고객의 모든 정보를 조회해라.
select * from customers where name = '장영실';


-- 3번 
-- products 테이블에서 가격이 10000원 이상이면서, 동시에 재고가 50개 미만인 상품을 조회해라.
select * from products where price >= 10000 AND stock_quantity < 50;

-- 4번 
-- products 테이블에서 products_id가 2번, 3번, 4번 중 하나에 해당하는 상품들의 이름과 가격을 조회해라.
select name, price from products where product_id in(2, 3, 4);

-- 5번 
-- customers 테이블에서 주소가 '서울특별시'로 시작하는 고객의 이름과 전체 주소를 조회해라. 
select name, address from customers where address like '서울특별시%';


-- 6번 
-- products 테이블에서 상품 설명(description)이 아직 입력되지 않은(null) 상품의 모든 정보를 조회해라.
select * from products where description is null;

-- 7번 
-- products 테이블의 모든 상품 정보를 가격이 비싼 순서대로 정렬하여 조회해라. 
select * from products order by price desc;


-- 8번
-- products테이블의 상품 정보를 먼저 가격의 오름차순으로 정렬하고, 
-- 만약 가격이 같다면 재고 수량이 많은 순(내림차순)으로 정렬하여 조회해라.
select * from products order by price asc, stock_quantity desc;

-- 9번 
-- customers 테이블에서 가장 최근에 가입한 고객 2명의 모든 정보를 조회해라.
select * from customers order by join_date desc limit 2;

-- 10번
-- orders 테이블을 참조하여, 한 번이라도 주문을 한 적이 있는 고객의 ID와 주문한 상품의 ID 조합을 중복 없이 조회해라.
select distinct customer_id, product_id from orders;

-- 11번
-- products테이블에서 가격이 3000원을 초과하고 재고가 100개 이하인 상품들을 대상으로, 
-- 재고가 많은 순서대로 정렬하여 상위 3개의 상품명과 재고 수량을 조회해라.
-- 이때 상품명은 '상품 이름'으로, 재고 수량은 '남은 수량'으로 출력해라.
select name as `상품 이름`, stock_quantity as `남은 수량`
	from products
    where price > 3000 and stock_quantity <= 100
    order by stock_quantity desc
    limit 3;
