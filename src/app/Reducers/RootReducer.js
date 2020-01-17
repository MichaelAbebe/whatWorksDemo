import { combineReducers } from "redux"
import testReducer from "../../features/testArea/testReducer"
import PostReducer from "../../features/posts/PostReducer"

const rootReducer=combineReducers({

    test:testReducer,posts:PostReducer

    
})
export default rootReducer