/**
 * 生成表格插件
*/
define(['../common','exports','jquery'],function (common,exports,$) {
	/**
	 * @description 生成表格
	 * @param {Object} oGridinfo 表格的数据	传入一个对象
	 * 
	 */		
	 
    exports.createGrid = function(oGridinfo){
    	
   		var result = '<table class="table table-responsive">';
   		result += '<tr class="tabletitle"><th width="3%"></th>';
   		for(var i=0,len=oGridinfo.colModel.length;i<len;i++){
   			result += '<th>'+ oGridinfo.colModel[i].display +'</th>'
   		}
   		result += '<th width="3%"></th>';
   		for(var i=0,len=oGridinfo.data.length;i<len;i++){
   			result += '<tr class="trhover"><td></td>';
   			for(var index in oGridinfo.data[i]){
   				result += '<td>'+oGridinfo.data[i][index]+'</td>';
   			}
   			result += '<td></td></tr>';
   		}
   		result += '</table>';
   		
   		return result;
    }
});