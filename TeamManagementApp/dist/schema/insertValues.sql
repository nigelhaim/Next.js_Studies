INSERT OR REPLACE INTO user (f_name, l_name, leader) VALUES('Nigel', 'Sebastian', true);
INSERT OR REPLACE INTO user (f_name, l_name, leader) VALUES('Kiyoshi', 'Sebastian', false);
INSERT OR REPLACE INTO shift (sallary, timeIn, timeOut, WorkHours, WorkMins, employee_id) VALUES('0', '2022-05-08 14:30:45', '2022-05-08 15:00:45', '00', '30', 2);
INSERT OR REPLACE INTO task (title, description, is_done, c_status, employee_id) VALUES('Task1', 'Task1 Description', false, 'Not Started', 2);
