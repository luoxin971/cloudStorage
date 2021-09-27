# 面试题整理

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

-   









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