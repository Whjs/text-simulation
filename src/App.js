// import Router from './routers'
import React from 'react'
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

import { pauseTime, changeTimeState, addTime } from '@/store/features/userSlice'

import '@/assets/style/app.less'

let timer = null
const timeEvents = {}
const setTimer = () => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    for (const key in timeEvents) {
      timeEvents[key]()
    }
    setTimer()
  }, 500)
}

setTimer()

function App() {
  const dispatch = useDispatch()
  const { timeText, timeState, assetsSum, cashSum } = useSelector((state) => state.user)
  const pauseTimeClick = () => {
    if (timeState !== 0) {
      dispatch(pauseTime())
    } else {
      dispatch(changeTimeState())
    }
  }
  const speedClick = () => {
    if (timeState === 0) return
    dispatch(changeTimeState())
  }
  timeEvents['addTime'] = () => {
    dispatch(addTime())
  }
  return (
    <div className='app-container'>
      <div className='app-head'>
        <div className='app-head-left'>
        <span className='split-line'>总资产: { assetsSum }元</span>
        <span>总现金: { cashSum }元</span>
        </div>
        <div className='app-head-right'>
          <span className='split-line'>时间: { timeText }</span>
          <span className='split-line' onClick={ speedClick }>倍数: { timeState }</span>
          <span onClick={ pauseTimeClick }>{ timeState !== 0 ? '暂停' : '开始' }</span>
        </div>
      </div>
      <Outlet />
      {/* <h1>Bookkeeper</h1> */}
      {/* <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link>|{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet /> */}
    </div>
  )
}

export default App
