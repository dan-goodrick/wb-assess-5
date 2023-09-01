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
-- problem 6


-- group by for probs 4, 5


-- Prob 2 does not have autoincrement in the table
-- return this.humanId to get the pk back
-- Op in sequelize 1 handout
-- a directory is a string 