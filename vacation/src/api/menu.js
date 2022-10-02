import request from '../utlis/request'

const menuList = (data) => {
    return request({
        url: "/system/menu/search",
        method: "POST",
        data
    })

}
export default {
    menuList
}