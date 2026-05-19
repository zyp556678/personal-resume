# 张宇鹏 - 个人简历

## 📞 基本信息

- **求职意向**：Java后端开发工程师
- **电话**：18745397398
- **邮箱**：taitanyunluo2@126.com
- **性别**：男
- **出生年月**：2005年12月
- **政治面貌**：共青团员
- **个人信息网站**：https://www.hellozypzyp.online/

## 🎓 教育经历

### 黑龙江科技大学 | 软件工程（本科）

**时间**：2023年09月 - 2027年06月  
**主修课程**：Java、数据结构与算法、计算机系统基础、数据库原理及应用、计算机网络、操作系统、算法设计与分析、软件工程

## 💼 实习经历

### 上海金仕达股份有限公司 | 软件开发工程师

**时间**：2026年04月 - 2026年05月  
**技术栈**：SpringBoot、MyBatis-Plus、MySQL、Redis、FIX协议、EFT电子资金转账  
**项目**：外汇交易清算系统（FFA）—— 为银行间外汇交易提供清算、对账、客户管理、报表生成等核心功能

**主要职责**：

- 负责客户报表与对账单模块的设计与开发，实现多维度报表的动态查询与分页导出，优化慢查询SQL提升报表响应速度
- 参与主数据维护模块的接口开发，完成核心实体的CRUD及业务校验逻辑，封装通用DTO转换工具类减少重复代码
- 负责清算日志与状态控制功能开发，基于Redis缓存热点清算数据降低数据库压力
- 参与FIX协议通信报文的解析与监控配置文件的动态加载与热更新功能

## 💻 职业技能

### 后端开发

- 熟练掌握 Java 核心（面向对象、集合、多线程并发与锁机制）
- 精通 Spring 生态（IOC/AOP、Bean 生命周期、自动装配）、Spring MVC、Spring Cloud 全家桶
- 熟悉 MyBatis-Plus 及常用设计模式

### 数据库与缓存

- 熟悉 MySQL 索引设计、事务隔离与慢查询治理
- 掌握 Redis 核心数据结构、持久化、分布式锁及多级缓存架构设计

### 消息与分布式

- 熟悉 RabbitMQ / Kafka 消息队列
- 了解分布式系统基本原理与常见解决方案

### AI 工程

- 熟悉 Spring AI 框架集成、RAG 检索增强、Function Calling、向量数据库
- 熟练使用 OpenCode、Claude Code、Codex 等 AI 编程工具

### 前端基础

- 熟悉 Vue 全家桶及 Element-UI，能完成前后端联调
- 扎实的网络基础（HTTP/HTTPS、TCP/UDP）

## 🚀 项目经验

### 1. 鲲鹏外卖点餐平台 | 后端开发工程师

**时间**：2025年06月 - 2025年09月  
**技术栈**：SpringBoot、MyBatis-Plus、MySQL、Redis、Vue.js、Element-UI、Vant  
**项目概述**：一个功能完整的单体式架构外卖点餐系统，采用主流技术栈实现。系统包含后台管理系统（面向商家管理员）和移动端H5（面向消费者）两大部分，提供从菜品管理、用户下单到订单履约的全流程解决方案。

**核心功能**：
- **后台管理**：员工管理、分类管理、菜品管理（图片上传、口味配置）、套餐管理、订单管理
- **用户端**：手机号+短信验证码登录、点餐浏览、购物车、下单支付、个人中心

**主要职责**：

- 负责后端全部模块及接口的设计与开发
- 实现基于Filter的统一登录拦截与权限校验（LoginCheckFilter）
- 基于MyBatis-Plus的通用CRUD与字段自动填充（MyMetaObjectHandler）
- 基于Redis的短信验证码存储与套餐数据缓存
- 设计统一响应结果封装（R.java）与ThreadLocalUtil存储当前登录用户ID
- 完成从前端到后端再到数据库的完整数据流打通，确保系统各核心业务流程正常运转

**项目链接**：
- GitHub：https://github.com/zyp556678/take_out_system
- Gitee：https://gitee.com/zyp556678/take_out_system

---

### 2. 悦物在线商城系统 | 后端开发工程师

**时间**：2025年11月 - 2026年03月  
**技术栈**：SpringBoot、SpringCloud(Nacos)、MyBatis-Plus、MySQL 8.0、Redis(Redisson)、RabbitMQ、Elasticsearch 7.x、JWT、Swagger  
**项目概述**：基于Spring Cloud (Nacos)微服务架构的大型分布式电商系统，涵盖商品管理、购物车、订单处理、支付、搜索、全文检索等核心电商功能模块，并针对高并发场景（秒杀、购物车）进行了性能优化。

**项目结构**：
- **common**：公共模块（common-util工具类、rabbit-util消息队列、service-util服务层配置、web-util拦截器）
- **model**：实体类与枚举（数据库模型）
- **service-client**：Feign远程调用客户端（cart、item、list、order、product、user）
- **service**：核心业务微服务（cart购物车、item商品详情、list搜索、order订单、payment支付、product商品管理、user用户）
- **server-gateway**：API网关（全局过滤、鉴权）

**核心模块**：
- **商品服务**：SKU/SPU管理、三级分类体系、品牌管理、@GmallCache注解实现高效缓存
- **购物车服务**：登录/未登录状态数据合并、@Async异步写入优化、Redis缓存策略
- **搜索服务**：Elasticsearch索引同步、多维度复杂检索（分类、品牌、属性、价格区间、关键字）、排序与分页
- **订单服务**：库存校验、交易令牌防重、RabbitMQ延迟队列实现超时自动取消、状态机控制
- **支付服务**：支付宝统一下单、异步通知处理、幂等性保障
- **网关服务**：路由分发、AuthGlobalFilter全局鉴权、跨域配置

**主要职责**：

- 负责商品服务、购物车服务、搜索服务、订单服务等核心微服务模块的设计与开发
- 在商品服务中，使用自定义注解@GmallCache实现缓存切面，提升查询性能
- 在购物车服务中，采用@Async异步写入和Redis缓存策略优化高并发下的购物车操作
- 在搜索服务中，基于Elasticsearch实现商品全文检索和多维度搜索
- 在订单服务中，利用RabbitMQ延迟队列实现超时未支付订单自动取消
- 基于Spring Cloud Gateway实现统一鉴权与路由，确保系统安全性与可扩展性

**项目链接**：
- GitHub：https://github.com/zyp556678/yuewu_parent
- Gitee：https://gitee.com/zyp556678/yuewu_parent

---

### 3. 穿戴管家 (WearWise) | AI开发工程师

**时间**：2026年04月 - 2026年05月  
**技术栈**：Flutter、Dart、Provider、SQLite(sqflite)、Open-Meteo API、高德定位SDK、Camera、OpenCode  
**项目概述**：一款跨平台衣橱管理应用，帮助用户智能管理衣物、搭配穿搭、记录日常OOTD。支持Android/iOS/Web/Desktop多端运行，采用Flutter框架开发，集成天气服务、相机拍照、GPS定位等功能。

**功能特性**：
- **首页**：最近存入、快捷入口、个人信息、天气卡片（Bento Grid布局）
- **衣橱**：衣物管理、分类浏览、瀑布流展示
- **闲置**：闲置衣物管理、支持选择开始/结束日期和存放地点、闲置时长显示
- **日志**：操作记录时间线追踪
- **录入**：拍照/相册添加衣物、智能识别确认、闲置管理
- **我的**：个人中心、地点管理、主题设置、穿搭日志

**主要特点**：
- 五组主题配色（冰川蓝、翡翠绿、玫瑰金、星空紫、月光银）
- 深色模式支持（浅色/深色/跟随系统三档）
- 现代化拍照界面：全屏预览、闪光灯切换、对焦动画、双指缩放
- Material Design 3界面、毛玻璃UI组件
- 高德定位SDK（国内优化）、Open-Meteo天气API（免费、全球支持）
- SQLite本地数据持久化、操作日志记录

**主要职责**：

- 采用OpenCode AI编程工具开发
- 使用Provider实现全局状态管理，sqflite实现本地数据持久化（数据库版本v7）
- 集成Open-Meteo天气API实现7天预报，设计三级Geocoding策略，解决国内城市编码兼容问题
- 封装高德定位SDK实现GPS定位，实现相机模块的双指缩放、点击对焦、闪光灯切换等功能
- 通过Bento Grid布局优化首页信息展示，设计毛玻璃UI组件（GlassCard、GlassButton、GlassNavBar）
- 实现闲置衣物管理（日期范围+存放地点）、操作日志追踪、天气穿搭建议等功能
- 设计城市经纬度映射表解决手动选择城市无法获取天气的问题

**项目链接**：
- GitHub：https://github.com/zyp556678/wareManager
- Gitee：https://gitee.com/zyp556678/wareManager

## 📝 自我评价

- 有良好的编程习惯和学习新技术的能力，能够快速适应工作需求变化
- 有责任感，在复杂多变的工作环境中能够保持冷静思考
- 善于沟通交流，有效促进团队内部的合作氛围

---

> 最后更新：2026年5月19日  
> 简历持续更新中，欢迎联系进一步交流。