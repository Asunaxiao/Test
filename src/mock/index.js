//导入mockjs
import Mock from 'mockjs'

//配置用户真实的用户名和密码信息
const data = {
    "username": "12345678910",
    "password": "zjj123456",
};
//Mock.mock(rurl ?, rtype ?, template | function (options) )
// rurl:请求路径
// rtype:请求的方式  post/get
// function: 请求的mock处理逻辑
Mock.mock('/api/login', 'post', (resp) => { //路径与请求方式

    const {name, password } = JSON.parse(resp.body);
    console.log(resp.body)
    console.log(password)
    //模拟登录请求
    if (name === data.username && password === data.password) {
        //登录成功
        return {
            code: 200,
            data: data,
            message: "登录成功"
        }
        
    } else {
        //登录失败
        return {
            code: 300,
            data: '',
            message: "登录失败"
        }
    }
})

//Mock 导出
export default Mock;