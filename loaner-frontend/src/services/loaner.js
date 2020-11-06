import axios from 'axios'

const baseurl = 'http://localhost:3001/api/loaners'

const getAll = () => {
    const request = axios.get(baseurl)
    return request.then(response => response.data)
}

const create = (newLoaner) => {
    const request = axios.post(baseurl, newLoaner)
    return request.then(response => response.data)
}

const deleteLoaner = (id) => {
    const request = axios.delete(`${baseurl}/${id}`)
    return request.then(response => response.data)
}

const update = (id, newObj) => {
    const request = axios.put(`${baseurl}/${id}`, newObj)
    return request.then(response => response.data)
}

export default { getAll, create, deleteLoaner, update }