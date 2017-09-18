<?php
//创建链接 preg_match('//',$str,$res);
$fp = fsockopen('localhost',8085,$errno,$errstr,10);

//检测
if(!$fp){
	echo $errstr;die;
}

//拼接http请求报文
$http = '';

//请求报文包括三个部分 请求行 请求头 请求体
$http .= "GET /laravel/http/server.php?uid=100&name=xiaohigh HTTP/1.1\r\n";////请求头包括三个部分  请求方式  请求脚本的绝对路径   协议的版本

//请求头信息
$http .="Host: localhost\r\n";
$http .="Connection: close\r\n\r\n";

//请求体 无


//发送请求
fwrite($fp,$http);

$res = '';

//获取结果
while(!feof($fp)){
	$res .= fgets($fp);
}

//输出内容
echo $res;