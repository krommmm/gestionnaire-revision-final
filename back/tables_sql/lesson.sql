CREATE TABLE lesson (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  matiere ENUM('js_icon', 'php_icon', 'nodejs_icon', 'react_icon', 'debian_icon', 'github_icon', 'java_icon', 'jest_icon', 'python_icon',"ts_icon") NOT NULL,
  date DATE NOT NULL,
  step INT NOT NULL DEFAULT 1
) ENGINE=InnoDB;

ALTER TABLE lesson MODIFY COLUMN matiere ENUM('sql_icon','mysql_ico','js_icon', 'php_icon', 'nodejs_icon', 'react_icon', 'debian_icon', 'github_icon', 'java_icon', 'jest_icon', 'python_icon',"ts_icon") NOT NULL,