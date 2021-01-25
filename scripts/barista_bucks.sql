
CREATE TABLE IF NOT EXISTS `tbl_users` (
  `id` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `email_address` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `contact_no` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `tbl_users` VALUES ('08a4cd59-6026-4b26-92d2-df5b7c7b0c2b','jack1','abc1@gmail.com','abc',123123123),('08a4cd59-6026-4b26-92d2-df5b7c7b0c2c','jack2','abc2@gmail.com','abc',123123123),('2d826bcc-9d2c-43c4-9417-a02f6da98877','jack3','abc3@gmail.com','abc',123123123),('62ab4451-07e1-46de-a37c-bafe81e3c84b','jack4','abc4@gmail.com','abc',123123123),('738a4d65-f595-4909-b868-fd75617564b0','jack5','abc5@gmail.com','abc',123123123),('c6bbc9a0-b36a-4e30-8bbd-1a7453c4ef0b','jack6','abc6@gmail.com','abc',123123123),('edcda16e-c166-417e-b5bb-ad0e31c03c80','jack7','abc7@gmail.com','abc',123123123);

CREATE TABLE IF NOT EXISTS `tbl_coffee_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `tbl_coffee_type` VALUES (1,'Traditional','Simple Coffee'),(2,'Espresso Drinks','Strong');

CREATE TABLE IF NOT EXISTS `tbl_coffee` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `type_id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_coffee_type_id` (`type_id`),
  CONSTRAINT `fk_tbl_coffee_type_id` FOREIGN KEY (`type_id`) REFERENCES `tbl_coffee_type` (`id`)
);

INSERT INTO `tbl_coffee` VALUES (1,'Plain Coffee',1,20,100),(2,'French Press',1,50,100),(3,'Llatte',2,150,200);

CREATE TABLE IF NOT EXISTS `tbl_coffee_rating` (
  `coffee_id` int(12) NOT NULL,
  `rating_value` varchar(12) NOT NULL,
  `user_id` varchar(45) NOT NULL,
  KEY `fk_tbl_coffee_rating_user_id` (`user_id`),
  KEY `fk_tbl_coffee_rating_coffee_id_idx` (`coffee_id`),
  CONSTRAINT `fk_tbl_coffee_rating_coffee_id` FOREIGN KEY (`coffee_id`) REFERENCES `tbl_coffee` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_coffee_rating_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`id`)
);

INSERT INTO `tbl_coffee_rating` VALUES (3,'POSITIVE','edcda16e-c166-417e-b5bb-ad0e31c03c80');

CREATE TABLE IF NOT EXISTS `tbl_orders` (
  `id` varchar(12) NOT NULL,
  `user_id` varchar(45) NOT NULL,
  `created_at` datetime NOT NULL,
  `total_price` int(11) NOT NULL,
  `payment_status` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_orders_user` (`user_id`),
  CONSTRAINT `fk_tbl_orders_user` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`id`)
);

CREATE TABLE IF NOT EXISTS `tbl_order_detail` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `order_id` varchar(12) NOT NULL,
  `coffee_id` int(12) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_order_detail_order_id` (`order_id`),
  CONSTRAINT `fk_tbl_order_detail_order_id` FOREIGN KEY (`order_id`) REFERENCES `tbl_orders` (`id`)
);
