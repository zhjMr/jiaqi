import request from '../utlis/request'

const classifyList = (data) => {
    return request({
        url: "/article/category/search",
        method: "POST",
        data
    })

}
//分类删除
const classifyDel = (id) => {
    return request({
        url: `/article/category/${id}`,
        method: "DELETE"
    })

}
export default {
    classifyList,
    classifyDel
}