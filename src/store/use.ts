import {counterStore} from "./counter"
export default{
    setup(){
        const store = counterStore()
        return {store}
    }
}