-- Problem 1
SELECT  *
FROM cupcakes;

-- problem 2
select id from orders where customer_id=(select id from customers where fname='Elizabeth');

-- problem 3
select sum(num_cupcakes) from orders where not processed;

-- problem 4
select cupcakes.name, sum(orders.num_cupcakes) from cupcakes full outer join orders on cupcakes.id = orders.cupcake_id group by cupcakes.name order by cupcakes.name;

-- problem 5
select (select customers.email from customers where customers.id = customer_id), sum(num_cupcakes) from orders group by customer_id order by sum desc;

-- problem 6
select c.fname, c.lname, c.email from orders join customers c on c.id=orders.customer_id join cupcakes cp on cp.id=orders.cupcake_id where cp.name='funfetti' and orders.processed group by c.id;

-- Part 2



-- Prob 2 does not have autoincrement in the table
-- return this.humanId to get the pk back
-- Op in sequelize 1 handout
-- a directory is a string 