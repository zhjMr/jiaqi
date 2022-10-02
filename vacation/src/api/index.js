import request from '../utlis/request'

const articleList = (data) => {
    return request({
        url: `/article/article/search`,
        method: "POST",
        data,
    })

}
export default {
    articleList
}