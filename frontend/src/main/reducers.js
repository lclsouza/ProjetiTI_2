import { combineReducers } from 'redux'
import filialReducer from '../filial/filialReducer'

const rootReducer = combineReducers({
    filialTI: filialReducer
})

export default rootReducer
