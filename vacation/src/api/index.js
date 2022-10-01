import request from '../utlis/request'

const articleList = () => {
    return request({
        url: "/article/article/search",
        method: "POST"
    })

}

export default {
    articleList
}