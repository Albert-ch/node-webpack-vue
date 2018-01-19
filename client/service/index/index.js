import axios from 'axios'

export default {
    getInfo( id ){
        return axios.get(`/api/user/info/${id}?a=1&b=2`)
    }
}