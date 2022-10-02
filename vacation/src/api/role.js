import request from '../utlis/request'

const roleList = (data) => {
    return request({
        url: "/system/role/search",
        method: "POST",
        data
    })

}
const roleDel = (id) => {
    return request({
        url: `/system/role/${id}`,
        method: "DELETE"
    })
}
export default {
    roleList,
    roleDel
}