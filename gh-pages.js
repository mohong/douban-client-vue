/**
 * 把dist文件夹下面的内容推送至github gh-pages分支
 * Created by mohong on 2016/12/12.
 */
var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, 'dist'), function(err) { '发布成功！' });