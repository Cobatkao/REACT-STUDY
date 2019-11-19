import { takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import axios from 'axios'
import { getListAction } from './actionCreators'
 
function* mySaga() {
    // 等待GET_MY_LIST这个action执行时，执行getList函数
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
    console.log('getlist saga获取异步数据')
    // axios.get('http://yapi.demo.qunar.com/mock/38004/mock/api/v1/getlist')
    //         .then((res) => {
    //             const data = res.data
    //             const action = getListAction(data) // 返回action配置对象
    //             put(action) //传入到store内
    //         })

    // 使用yield改写 否则会报错
    const res = yield axios.get('http://yapi.demo.qunar.com/mock/38004/mock/api/v1/getlist')
    const action = getListAction(res.data)
    yield put(action) //传入到store内
}

export default mySaga;