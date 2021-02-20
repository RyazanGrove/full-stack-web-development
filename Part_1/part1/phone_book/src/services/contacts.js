import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const remove = (i) => {
    return axios.delete(`${baseUrl}/${i}`)
}

export default {
    getAll: getAll,
    create: create,
    remove: remove
}