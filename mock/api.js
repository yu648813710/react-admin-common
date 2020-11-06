// import mockjs from 'mockjs';
export default {
  'POST /api/list': (req, res)=>{
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
  'GET /api/user':{name:'宇文'}
}