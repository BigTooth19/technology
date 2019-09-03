---
sidebar: auto
---
# MySQL

## 介绍
MySQL 是最流行的关系型数据库管理系统，在 WEB 应用方面 MySQL 是最好的 RDBMS(Relational Database Management System：关系数据库管理系统)应用软件之一。

### 什么是数据库？
数据库（Database）是按照数据结构来组织、存储和管理数据的仓库。

每个数据库都有一个或多个不同的 API 用于创建，访问，管理，搜索和复制所保存的数据。

我们也可以将数据存储在文件中，但是在文件中读写数据速度相对较慢。

所以，现在我们使用关系型数据库管理系统（RDBMS）来存储和管理的大数据量。所谓的关系型数据库，是建立在关系模型基础上的数据库，借助于集合代数等数学概念和方法来处理数据库中的数据。

RDBMS 即关系数据库管理系统(Relational Database Management System)的特点：
1. 数据以表格的形式出现
2. 每行为各种记录名称
3. 每列为记录名称所对应的数据域
4. 许多的行和列组成一张表单
5. 若干的表单组成database

### RDBMS 术语
在我们开始学习MySQL 数据库前，让我们先了解下RDBMS的一些术语：
- **数据库**: 数据库是一些关联表的集合。
- **数据表**: 表是数据的矩阵。在一个数据库中的表看起来像一个简单的电子表格。
- **列**: 一列(数据元素) 包含了相同的数据, 例如邮政编码的数据。
- **行**：一行（=元组，或记录）是一组相关的数据，例如一条用户订阅的数据。
- **冗余**：存储两倍数据，冗余降低了性能，但提高了数据的安全性。
- **主键**：主键是唯一的。一个数据表中只能包含一个主键。你可以使用主键来查询数据。
- **外键**：外键用于关联两个表。
- **复合键**：复合键（组合键）将多个列作为一个索引键，一般用于复合索引。
- **索引**：使用索引可快速访问数据库表中的特定信息。索引是对数据库表中一列或多列的值进行排序的一种结构。类似于书籍的目录。
- **参照完整性**: 参照的完整性要求关系中不允许引用不存在的实体。与实体完整性是关系模型必须满足的完整性约束条件，目的是保证数据的一致性。
MySQL 为关系型数据库(Relational Database Management System), 这种所谓的"关系型"可以理解为"表格"的概念, 一个关系型数据库由一个或数个表格组成, 如图所示的一个表格:

![图片alt](/technology/mysql.jpg)
- 表头(header): 每一列的名称;
- 列(col): 具有相同数据类型的数据的集合;
- 行(row): 每一行用来描述某条记录的具体信息;
- 值(value): 行的具体信息, 每个值必须与该列的数据类型相同;
- 键(key): 键的值在当前列中具有唯一性。

### MySQL数据库
MySQL 是一个关系型数据库管理系统，由瑞典 MySQL AB 公司开发，目前属于 Oracle 公司。MySQL 是一种关联数据库管理系统，关联数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性。
- MySQL 是开源的，所以你不需要支付额外的费用。
- MySQL 支持大型的数据库。可以处理拥有上千万条记录的大型数据库。
- MySQL 使用标准的 SQL 数据语言形式。
- MySQL 可以运行于多个系统上，并且支持多种语言。这些编程语言包括 C、C++、Python、Java、Perl、PHP、Eiffel、Ruby 和 Tcl 等。
- MySQL 对PHP有很好的支持，PHP 是目前最流行的 Web 开发语言。
- MySQL 支持大型数据库，支持 5000 万条记录的数据仓库，32 位系统表文件最大可支持 4GB，64 位系统支持最大的表文件为8TB。
- MySQL 是可以定制的，采用了 GPL 协议，你可以修改源码来开发自己的 MySQL 系统。

## 安装
### window下安装MySQL
[下载地址](https://dev.mysql.com/downloads/mysql/)
![图片alt](/technology/mysql1.jpg)
点击 Download 按钮进入下载页面，点击下图中的 No thanks, just start my download. 就可立即下载：
![](/technology/mysql2.jpg)
下载完后，我们将 zip 包解压到相应的目录，这里我将解压后的文件夹放在 D:\mysql\mysql 下

接下来我们需要配置下 MySQL 的配置文件

打开刚刚解压的文件夹 D:\mysql\mysql ，在该文件夹下创建 my.ini 配置文件，编辑 my.ini 配置以下基本信息：
```
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8
 
[mysqld]
# 设置3306端口
port = 3306
# 设置mysql的安装目录
basedir=D:\\mysql\\mysql
# 设置 mysql数据库的数据的存放目录，MySQL 8+ 不需要以下配置，系统自己生成即可，否则有可能报错
# datadir=D:\\mysql\\mysql\\sqldata
# 允许最大连接数
max_connections=200
# 服务端使用的字符集默认为8比特编码的latin1字符集
character-set-server=UTF8MB4
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
```
### 启动
接下来我们来启动下 MySQL 数据库：
以管理员身份打开 cmd 命令行工具，切换目录：

```cd D:\mysql\mysql\bin```

初始化数据库：
```mysqld --initialize --console```

执行完成后，会输出 root 用户的初始默认密码，如：

```2018-04-20T02:35:05.464644Z 5 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: APWCY5ws&hjQ```

APWCY5ws&hjQ 就是初始密码，后续登录需要用到，你也可以在登陆后修改密码。

输入以下安装命令：
```mysqld install```

启动mysql输入以下命令即可：
```net start mysql```
![](/technology/mysql1_2.jpg)
### 登录
当 MySQL 服务已经运行时, 我们可以通过 MySQL 自带的客户端工具登录到 MySQL 数据库中, 首先打开命令提示符, 输入以下格式的命名:

```mysql -h 主机名 -u 用户名 -p```

参数说明：
- h : 指定客户端所要登录的 MySQL 主机名, 登录本机(localhost 或 127.0.0.1)该参数可以省略;
- u : 登录的用户名;
- p : 告诉服务器将会使用一个密码来登录, 如果所要登录的用户名密码为空, 可以忽略此选项。

如果我们要登录本机的 MySQL 数据库，只需要输入以下命令即可：

```mysql -u root -p```

按回车确认, 如果安装正确且 MySQL 正在运行, 会得到以下响应:

```Enter password:```

若密码存在, 输入密码登录, 不存在则直接按回车登录。登录成功后你将会看到 *Welcome to the MySQL monitor...* 的提示语。

然后命令提示符会一直以 *mysq>* 加一个闪烁的光标等待命令的输入, 输入 *exit* 或 *quit* 退出登录。
![](/technology/mysql1_3.jpg)
### 修改密码
忘记密码，初始化root密码（针对8.0以上版本）
如果服务在运行，停止服务

```net stop mysql```

新建个文件D:\mysql-init.txt，文件内容为

```ALTER USER 'root'@'localhost' IDENTIFIED BY '新密码';```

切换到mysql安装路径

```D:\mysql> cd "D:\mysql\mysql\bin"```

执行修改密码命令

```D:\mysql\mysql\bin> mysqld --init-file=D:\\mysql-init.txt```

退出服务

```ctrl+c```

启用服务

```net start mysql```

登录
```mysql -u root -p```

按回车
```Enter password: 新密码```

![](/technology/mysql1_4.jpg)
参考地址：https://dev.mysql.com/doc/refman/8.0/en/default-privileges.html

### HeidiSQL
mysql可视化工具，[下载](https://www.heidisql.com/download.php?download=installer)
![](/technology/mysql1_5.jpg)
1. 打开HeidiSQL
2. 点左下角“新建”按钮，创建会话，右侧就会出现新的会话界面
3. 在“密码”栏输入密码（点左下角“保存”按钮，可以保存密码）
4. 点击右下角“打开”按钮，进入数据库主界面
![](/technology/mysql1_6.jpg)

### nodejs连接mysql 8.0以上版本报错
原因8.0mysql引入了caching_sha2_password模块作为默认身份验证插件，nodejs还没有跟进
解决办法：
启用mysql之后运行
`ALTER USER 'root'@'localhost' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER;`
`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '你的新密码'`

再运行

`flush privileges`

也可以在HeidiSQL中输入
![图片alt](/technology/mysql3.jpg)

## mysql语法
- 创建数据库   `CREATE DATABASE <数据库名>`
- 删除数据库   `drop database <数据库名>`
- 选择数据库,后续的操作都会在该数据中  `use <数据库名>`
- 创建数据表   `CREATE TABLE table_name (column_name column_type)`,例如：
```
CREATE TABLE IF NOT EXISTS `runoob_tbl`(
   `runoob_id` INT UNSIGNED AUTO_INCREMENT,
   `runoob_title` VARCHAR(100) NOT NULL,
   `runoob_author` VARCHAR(40) NOT NULL,
   `submission_date` DATE,
   PRIMARY KEY ( `runoob_id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
```
- 删除数据表  `DROP TABLE table_name`
- 插入数据  
```
INSERT INTO table_name ( field1, field2,...fieldN )
                       VALUES
                       ( value1, value2,...valueN )
```
- 查询数据
```
SELECT column_name,column_name
FROM table_name
[WHERE Clause]
[LIMIT N][ OFFSET M]
```

### 本机mysql和phpstudy自带的mysql冲突问题
1. phpstudy->其他选项菜单->mysql工具->打开数据库目录(打开phpstudy自带mysql的文件夹)
2. 用本机mysql文件替换到phpstudy自带mysql中的文件，然后两都就可以共存了
>引用：[菜鸟教程](https://www.runoob.com/mysql/mysql-tutorial.html)