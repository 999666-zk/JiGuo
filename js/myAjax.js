// 这里是封装的ajax

/* 
参数说明：
type 请求类型
url 请求地址
data 传参
successfn 成功回调
errorfn 失败回调
*/

//封装ajax
function request(type, path, data, successfn, errorfn) {
  // 默认选择post 请求
  type =
    type == null || type == "" || typeof type == "undefined" ? "get" : type;
  // 默认不进行传参
  data = data == null || data == "" || typeof data == "undefined" ? {} : data;
  $.ajax({
    type: type,
    url: "http://localhost:3000" + path,
    dataType: "json",
    data: data,
    success: function (res) {
      successfn(res);
    },
    error: function (res) {
      errorfn(res);
    },
  });
}
