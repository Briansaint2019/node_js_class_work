let postsJSON = require('../posts.json')

exports.home = (req, res)=>{
    const posts = postsJSON.posts;
    res.render('home',{
        title: 'posts',
        posts: posts
    })
}