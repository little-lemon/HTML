<?php
#echo phpinfo();
$redis = new Redis();
$redis->connect('127.0.0.1',6379);
$redis->set('name','lession');
echo $redis->get('name');

$redis->select(5);
$redis->set('weather','snow');
echo $redis->get('weather');
echo "<br />";

$redis -> mset(array('week1'=>'noe','week2'=>'tow'));
var_dump($redis->mget(array('week1','week2')));

//利用“反射Reflection”获得一个类中所有的可操作方法。
$me = new ReflectionClass('Redis');
var_dump($me -> getMethods());