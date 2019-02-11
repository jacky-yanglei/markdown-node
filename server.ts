const express = require('express');

const bodyParser = require('body-parser');

const md = require('markdown-it')();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

// 转化 markdown 接口
app.use('/api/transform-markdown', function (req, res) {
    if (req.body) {
        if (req.body.markdown) {
            let html = md.render(req.body.markdown);
            res.send({
                msg: '获取成功',
                data: html,
                code: 200
            });
        } else {
            res.send({
                msg: '参数错误',
                code: 400
            });
        }
    } else {
        res.send({
            msg: '参数错误',
            code: 400
        });
    }
});

app.listen(PORT,() => console.log('listening:' + PORT));