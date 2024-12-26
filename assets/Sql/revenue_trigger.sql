DROP TRIGGER IF EXISTS trig_courseproject_revenue;

DELIMITER $$

CREATE TRIGGER trig_courseproject_revenue
AFTER UPDATE ON orders
FOR EACH ROW
BEGIN
        DECLARE v_amount DECIMAL(7,2);
        DECLARE v_date DATE;
        DECLARE v_oldstatus CHAR(20);
        DECLARE v_newstatus CHAR(20);
        SET v_amount = NEW.amount;
        SET v_date = OLD.order_date;
        SET v_oldstatus = OLD.order_status;
        SET v_newstatus = NEW.order_status;
    IF v_newstatus <> v_oldstatus THEN
        INSERT INTO daily_revenue VALUES (DEFAULT,v_amount,v_date) ON DUPLICATE KEY UPDATE amount=amount+v_amount;
        INSERT INTO monthly_revenue VALUES (UPPER(MONTHNAME(v_date)),YEAR(v_date),v_amount) ON DUPLICATE KEY UPDATE amount=amount+v_amount;
        INSERT INTO yearly_revenue VALUES (DEFAULT,v_amount,YEAR(v_date)) ON DUPLICATE KEY UPDATE amount=amount+v_amount;
    END IF;
END;
$$

DELIMITER ;