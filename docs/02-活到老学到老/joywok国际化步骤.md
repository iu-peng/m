# joywok国际化步骤

标签（空格分隔）： joywok

***

1.  整理待翻译的词条

2.  信息流@高国盛，发给他

3.  进入joywok目录，切到对应后台分支，git pull origin 分支

4.  将整理好的中文词条放到
    `joywok/console/siteconsole/application/siteconsole/controllers/I18nController.php`文件中

5.  将更改提交对应后台分支

6.  连接29服务器，ssh [root@192.168.1.29](mailto:root@192.168.1.29 "root@192.168.1.29")  Dogesoft!@#

7.  cd /var/www/joywok

8.  git pull

9.  git checkout 对应后台分支 （或pull该分支）

10. 更改后台对应字典文件夹权限 chmod -R 777 /var/www/joywok/public/language

11. 更改前端对应字典文件夹权限 chmod -R 777 /var/www/joywok/public/scripts/i18n

12. 登陆29翻译网站，添加英文
    [donghui@dogesoft.com](mailto:donghui@dogesoft.com "donghui@dogesoft.com")  密码 marlin

13. 将字典导入系统
    [http://192.168.1.29:8090/siteconsole/i18n/freshkeys](http://192.168.1.29:8090/siteconsole/i18n/freshkeys "http://192.168.1.29:8090/siteconsole/i18n/freshkeys")

14. 搜索label字段，找到待翻译项，填写该英文

15. 全部填写完毕后点击右上角生成文件（此时29上就有了更改）

16. 将更改提交到后台分支
    git add public/language
    git add public/scripts/i18n
    git commit -m '生成字典'
    git push origin 后台分支

17. 本地joywok目录pull下该分支更改，在gulpfile所在的joywok目录下执行gulp命令

18. 将更改提交该分支

19. \------end-----

## 添加 Joywok 字典步骤

#### 一、翻译词条准备

1.  梳理代码中待翻译的词语或语句（**在I18nController中已经有的，就不需要添加了**），边梳理边把js文件中的对应中文，替换成词条，比如

```纯文本
// 替换前
<label>姓名</label>

// 替换后
<label>{ i18n('label.name') }</label>
```

1.  按照以下规则，放到 `joywok/console/siteconsole/application/siteconsole/controllers/I18nController.php`中，放入文件时分出独立区域放置（**词条段前加上功能注释**）

**注意：这个修改要到 joywok 仓库的分支中修改，此分支可以是开发分支，也可以是上线当天切出来的后台 release 分支，修改之后，提交到对应的后台分支，比如：release\_group\_20191220**

1.  常见词条前缀的含义：

**注意： 千万不要以 ser. 开头， ser.开头是后台专用的词条，生成字典时，会生成的后台的po、mo文件中，导致前端通过i18n方法无法使用到此词条。**

*   app. 开头 多表示这个词条是某应用，如：

```纯文本
'app.as'  => '信息流',   
```

*   label. 开头 多代表是表单填写项，如：

```纯文本
'label.stat.total_num'    => '总用户数', 
```

*   filter. 开头 多代表词条为过滤类型，如：

```纯文本
'filter.reduction'  => '还原',  
```

*   btn. 开头 多代表词条为按钮，如：

```纯文本
'btn.download-assistant'=> '下载乐工助手',
```

*   tip. 开头 多代表词条为提示类文字，如：

```纯文本
'tip.help'  => '帮助',
```

*   placeholder. 开头 多代表词条为表单的 placeholder 文字，如：

```纯文本
'placeholder.search-object-or-as'  => '查找对象或搜索信息',
```

*   intro. 或 desc. 开头，说明词条为描述类文字

```纯文本
'intro.project-observer'   => '观察员可查看此项目的所有信息，可参与讨论',
```

> 词条样例

```纯文本
/* 系统管理－IAM翻译 start */

// IAM字典
'label.console.iam.origanization' => '组织架构',
'label.console.iam.name' => '名称',
'label.console.iam.require' => '必填',
'label.console.iam.inputv' => '请输入',
'label.console.iam.category' => '种类',
'label.console.iam.origin' => '组织',
'label.console.iam.requireName' => '名称必填',
'label.console.iam.editSuc' => '编辑成功',
'label.console.iam.edutFail' => '编辑失败！',
            
/* 系统管理－IAM翻译 end */

```

#### 二、到翻译服务器进行翻译操作

1、登录翻译服务器,切到对应的后台分支，把添加了词条的代码给拉取下来。后台分支以 release\_group\_20191220 为例；

```纯文本
// 1. 终端连接到29   
ssh root@192.168.1.29

// 2. 输入29服务器的密码
Dogesoft!@# 

// 3. 进入 joywok 仓库
cd /var/www/joywok

// 4. 更新代码
git pull

// 5. 切换分支
git checkout release_group_20191220
```

2、把对应的翻译文件权限改为可读写的

```纯文本
// 更改后台对应字典文件夹权限
chmod -R 777 /var/www/joywok/public/language

// 更改前端对应字典文件夹权限
chmod -R 777 /var/www/joywok/public/scripts/i18n

```

3、导入字典，并填写对应英文，生成字典

```纯文本
// 1. 登录SiteConsole；
http://192.168.1.29:8090/siteconsole/blog   donghui@dogesoft.com  密码 marlin

// 2. 通过freshkey，将字典导入系统， 此步有风险，需确保分支是从master创建的
http://192.168.1.29:8090/siteconsole/i18n/freshkeys 

// 3. 字典翻译；（ @高国盛 提供支持 )

// 4. 字典编译：点击页面的 “生成字典”即可完成字典编译。
需确保 joywok/public/language 和 joywok/public/scripts/i18n  有可写权限

```

4、提交代码，打包到dist目录

> 注： 因生产环境读取的都是 joywok/dist 目录下的资源，而生成字典的目录是 public下，所以需要进行打包操作

```纯文本
// 1. 在29上把生成的字典提交
git add joywok/public/language
git add joywok/public/scripts/i18n
git commit -m '生成群组字典'
git push origin release_group_20191220

// 2. 在 joywok 根目录，用 gulp 工具把字典文件打包到dist目录中。

如果本地 joywok 环境中有gulp工具，那么就可以把字典拉取到本地，在本地的 joywok 根目录下，执行 gulp 命令，完成字典的自动打包。

如果本地没有 gulp 工具，可以临时使用 66 环境，切到对应分支，进行打包操作。
```

5、将打包后的字典文件，提交到远程

```纯文本
git branch // 查看当前分支，确保是否是刚才进行打包操作的分支
git add joywok/dist
git commit -m 'gulp group dicts'
git push origin release_group_20191220
```

> 至此，完整的翻译工作就做完啦，随心部署到测试环境给QA测试吧～
