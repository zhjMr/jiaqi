import request from '../utlis/request'

const advertisingList = (data) => {
    return request({
        url: "/article/advert/search",
        method: "POST",
        data
    })

}
const advertisingDel = (id) => {
    return request({
        url: `/article/advert/${id}`,
        method: "DELETE"
    })
}
export default {
    advertisingList,
    advertisingDel
}