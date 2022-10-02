import request from '../utlis/request'

const labelList = (data) => {
    return request({
        url: "/article/label/search",
        method: "POST",
        data
    })

}
//标签删除
const labelDel = (id) => {
    return request({
        url: `/article/label/${id}`,
        method: "DELETE"
    })

}
export default {
    labelList,
    labelDel,
}