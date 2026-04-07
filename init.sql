CREATE TABLE IF NOT EXISTS tasks (id SERIAL PRIMARY KEY, name TEXT, status TEXT);
INSERT INTO tasks (name, status) VALUES ('Task 1', 'pending'), ('Task 2', 'completed');