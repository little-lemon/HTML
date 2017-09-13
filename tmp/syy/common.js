/**
 * 公共配置文件
 */

//  取得站点目录基本路径
var BASE_DOMAIN = top.document.domain.toString();
var BASE_LOCAL = top.document.location.toString();
var DOMAIN_POS = BASE_LOCAL.indexOf(BASE_DOMAIN);
var BASE_URL = BASE_LOCAL.substr(0,DOMAIN_POS+BASE_DOMAIN.length);
var PORT = top.document.location.port;

//  配置常用路径
requirejs.config({
    baseUrl: BASE_URL,
    paths: {
        js: '/js',
		jslib : '/js-lib',
		jsapp : '/js-app',
        china:'js-lib/charts/china',
        echarts:'js-lib/charts/echarts',
        jquery:'js-lib/jquery/jquery-2.1.4.min',
        jedate:'js-lib/jquery/jquery.jedate.min',
    },
    shim  : { 
    	echarts:{
    		exports:'echarts'
    	},
        jedate:{
            deps:['jquery']
        }
    }    
});