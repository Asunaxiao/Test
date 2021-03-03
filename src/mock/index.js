//导入mockjs
import Mock from 'mockjs'
const Random = Mock.Random;
const data = Mock.mock({
    'name': '@cname',
    'email': '@email',
    'phone': /\d{11}/,
    'password':'@natural(100, 10000)'+'@string("lower", 4)',
})
console.log(data)
//Mock.mock(rurl ?, rtype ?, template | function (options) )
// rurl:请求路径
// rtype:请求的方式  post/get
// function: 请求的mock处理逻辑
Mock.mock('/api/login', 'post', (resp) => { //路径与请求方式

    const {name, password } = JSON.parse(resp.body);
    console.log(resp.body)
    console.log(password)
    //模拟登录请求
    if (name === data.phone && password === data.password) {
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