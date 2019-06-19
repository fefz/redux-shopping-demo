import data from '../mock/items.json'
const TIMEOUT = 100
export default {
    getItems : (cb, timeout) => setTimeout(() => cb(data), timeout || TIMEOUT)
}