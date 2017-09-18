<?php
//创建连接
$fp = fsockopen('apis.baidu.com',80,$errno,$errstr,10);

if(!$fp){
	echo $errstr;die;
}

$http = '';

//请求行
$http .="GET /showapi_open_bus/weather_showapi/areaid?area=%E5%8C%97%E4%BA%AC HTTP/1.1\r\n";

//请求头
$http .= "Host: apis.baidu.com\r\n";
$http .= "Connection: close\r\n";
$http .= "apikey: 622c297e8a21017c9da129c910fef0c1\r\n\r\n";

//发送
fwrite($fp, $http);

//获取结果
$res = '';

while(!feof($fp)){
	$res .= fgets($fp);
}

header("content-type:text/html; charset=uft-8");
echo $res;
//var_dump(json_decode($res));