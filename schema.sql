
DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE  employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE department (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) /*to hold department name*/
);

CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30), /*to hold role title*/
    salary DECIMAL, /*to hold role salary*/
    department_id INT /*to hold reference to department role belolngs to*/
);

CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30), /*to hold employee first name*/
    last_name VARCHAR(30), /*to hold employee last name*/
    role_id INT, /*to hold reference to role employee has*/
    manager_id INT /*to hold reference to another employee that manages the employee being created. This field may be null if the emplyoee has no manager.*/
);