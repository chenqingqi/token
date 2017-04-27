//禁止跨域访问，防止跨域攻击
//禁止明文传输，使用post请求
//每次请求接口都携带token值，token为空代表游客，token有值代表已登录
//服务器每次都验证token值，如果过期则返回新token,否则返回原token


$.ajax({
	
    type    : "post",
    dataType: "json",
    url     : 'server.php',
    data	: { id:101, token:'ds454fasdf11112ad'},
    success	: function (data) 
    {
        //存储新token
    }
});
