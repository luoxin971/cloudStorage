-   wait 和 sleep 的区别
    1.  wait 是 Object 类的成员方法，sleep 是 Thread 类的静态方法
    2.  wait 必须在同步代码块中，sleep 可以在任何地方调用
    3.  wait 会释放锁，sleep 不会释放锁
    4.  wait 不需要捕获异常，sleep 必须要捕获异常



-   Lock 锁

    >   Synchronized 和 lock 的区别

    1.  Synchronized 是内置的 java 关键字，Lock 是一个 java 类
    2.  Synchronized 无法判断获取锁的状态，Lock 可以判断是否获取到了锁
    3.  Synchronized 会自动释放锁，Lock 必须要手动释放，否则会造成死锁
    4.  Synchronized 某一线程阻塞，会导致其他相关线程等待，Lock 就不一定会等待下去
    5.  Synchronized 可重入锁，不可以中断，非公平，Lock 可重入锁，可以判断锁，非公平（可以自己设置）
    6.  Synchronized 适合锁少量代码同步问题，Lock 适合锁大量的同步代码





线程池

三大方法，七大参数，四种拒绝策略

-   线程池的好处

    1.  降低资源的消耗
    2.  提高相应的速度
    3.  方便管理

    线程复用，可以控制最大并发数，管理线程

```java
package com.luoxin.learn.juc;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;


/*
    int corePoolSize, 核心线程池的大小
    int maximumPoolSize, 最大核心线程池大小
    long keepAliveTime, 超时没有人调用就会释放
    TimeUnit unit, 超时单位
    BlockingQueue<Runnable> workQueue, 阻塞队列
    ThreadFactory threadFactory, 线程工厂
    RejectedExecutionHandler handler 拒绝策略
 */
public class Pool {
    public static void main(String[] args) {
        // 单个线程
        ExecutorService pool1 = Executors.newSingleThreadExecutor();
        // 创建一个固定大小的线程池
        ExecutorService pool2 = Executors.newFixedThreadPool(5);
        // 可伸缩的
        ExecutorService pool3 = Executors.newCachedThreadPool();

        for (int i = 0; i < 100; i++) {
            pool3.execute(() -> {
                System.out.println(Thread.currentThread().getName());
            });
        }

        // 线程池用完要关闭
        pool3.shutdown();


    }
}
```



最大线程数该如何定义

1.  CPU 密集型，物理cpu的核数
2.  IO 密集型，判断程序中十分耗IO的线程，一般设置两倍，eg：15个IO的任务，就设置30个



四大函数式接口

lambda 表达式，链式编程，函数式接口，Stream 流式计算

>   函数式接口：只有一个方法的接口
>
>   `@FunctionalInterface`