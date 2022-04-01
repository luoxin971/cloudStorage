# 面试题整理

**不要紧张，说话要中气十足**

**提高语言表达能力**

**注意基础！！！**



以后可以提高的点：

写博客，记录遇到的问题

自己捣鼓一些小项目





-   ```java
    public class A {
        A(){}
    }
    // 像这样的类，是无法被其他包的类继承的，会报这个错
    // java: A()在test1.A中不是公共的; 无法从外部程序包中对其进行访问
    ```

-   ```java
    public static void main(String[] args) {
        int[] a = new int[]{1, 2,3};
        int[] b = new int[]{1,2,3};
        System.out.println(a.equals(b));
        System.out.println(Arrays.equals(a, b));
    }
    // 输出 false true
    // 第一个是直接比较地址
    // 数组也是一个对象
    ```










-   spring mvc 的流程

    ![img](https://gitee.com/xinlx/pic/raw/master/5220087-3c0f59d3c39a12dd.png)

-   有哪些注解

    https://www.cnblogs.com/wangcp-2014/p/13604293.html

    个人觉得应该了解一下元注解

    -   @Target				描述注解的使用范围(即被修饰的注解可以用在什么地方)
    -   @Retention 	     描述注解保留的时间范围(即：被描述的注解在它所修饰的类中可以被保留到何时).	 
    -   @Documented    描述在使用 javadoc 工具为类生成帮助文档时是否要保留其注解信息。
    -   @Inherited           使被它修饰的注解具有继承性（如果某个类使用了被@Inherited修饰的注解，则其子类将自动具有该注解）。

-   mysql 优化的思路

    https://developer.aliyun.com/article/779151

    -   最大化利用索引；
    -   尽可能避免全表扫描；
    -   减少无效数据的查询；

-   sql 关键字语句执行的顺序

    -   **FROM**
        <表名> # 选取表，将多个表数据通过笛卡尔积变成一个表。
        **ON**
        <筛选条件> # 对笛卡尔积的虚表进行筛选
        **JOIN** 
        \# 指定join，用于添加数据到on之后的虚表中，例如left join会将左表的剩余数据添加到虚表中
        **WHERE**
        \# 对上述虚表进行筛选
        **GROUP BY**
        <分组条件> # 分组
        \# 用于having子句进行判断，在书写上这类聚合函数是写在having判断里面的
        **HAVING**
        <分组筛选> # 对分组后的结果进行聚合筛选
        **SELECT**
        <返回数据列表> # 返回的单列必须在group by子句中，聚合函数除外
        **DISTINCT**

-   sql 的索引、分组、union

-   lamda效率是否比传统的效率高

    lamda 函数效率要低

-   mysql中的一些函数

-   mysql 中 in exists 区别

-   having 用法

    筛选成组后的数据，也就是在聚合后对组巨鹿进行筛选

    where实在group by和having之前筛选

-   mybatis中#$的区别，为什么能防止sql注入

    \# 能够防止sql注入

    \# 会将传入的数据都当成字符串，加一个双引号

    \# 会让mybatis创建预处理语句，$ 在预处理之前就会被变量替换



-   HashMap

    数组、链表（用链地址法解决哈希冲突）、红黑树，详见[美团技术团队](https://tech.meituan.com/2016/06/24/java-hashmap.html)的文章

    <img src="https://gitee.com/xinlx/pic/raw/master/e4a19398.png" alt="HashMap 的存储方式" style="zoom: 36%;" />

    <img src="https://gitee.com/xinlx/pic/raw/master/d669d29c.png" alt="HashMap 的 put 方法" style="zoom: 50%;" />

    ```java
    // Node 是 HashMap 的内部类
    static class Node<K,V> implements Map.Entry<K,V> {
            final int hash;    //用来定位数组索引位置
            final K key;
            V value;
            Node<K,V> next;   //链表的下一个node
    
            Node(int hash, K key, V value, Node<K,V> next) { ... }
            public final K getKey(){ ... }
            public final V getValue() { ... }
            public final String toString() { ... }
            public final int hashCode() { ... }
            public final V setValue(V newValue) { ... }
            public final boolean equals(Object o) { ... }
    }
    ```

    ```java
    // HashMap 的几个字段
    int threshold;             // 所能容纳的key-value对极限 
    final float loadFactor;    // 负载因子，默认为 0.75
    int modCount;  
    int size;  // HashMap中实际存在的键值对数量
    // threshold = length * Load factor 其中 length 默认值为 16
    ```

    

-   什么时候抛出异常，什么时候 try catch

    根据业务需求来决定

    两者主要区别是：

    1. throw exception 后，后面的代码不会执行
    2. try-catch时，即使 catch 到了异常，后面的代码（try-catch后面）也会继续运行





## 深圳远望谷

常用linux命令

认证权限管理

表单+附件的接口如何编写



## 宇视科技

```
专业
学编程时间
了解我们公司吗
有心怡offer不
公司有交给你什么研究的任务不
AOP 流程，如何使用
两个服务器联通，如何将一个文件copy到另外一个
打包用什么命令
虚拟机的命令
怎么部署的
小组长
异常何时抛出何时try catch

会写 Shell 脚本吗

Maven 用过哪些依赖
怎么用 spring security， mysql等依赖

rest
怎么调试接口
Get请求参数很长怎么获取
有传输过哪些数据类型
穿出图片怎么处理
如果有%等怎么处理
状态码 405 415

优缺点
```





## 中软

```
mysql 对于一些聚合函数count in等无法使用索引等情况如何优化
spring boot 与spirng mvc 的区别
java集合类
orm框架
mybatis 的特点，动态sql
```

