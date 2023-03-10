import { createSlice } from '@reduxjs/toolkit'
import { getTimeText } from '@/utils'

export const userSlice = createSlice({
  name: 'user',
  // 初始值
  initialState: {
    time: 0, // 运行时间 天数
    timeText: '1年1月1日', // 时间文本
    timeState: 0, // 0 暂停 1 一倍速，最高5倍
    assetsSum: 0, // 总资产
    cashSum: 100000, // 总现金
    assetsList: [], // 资产列表
    liability: [], // 负债列表
    bankBorrow: [], // 银行借款
    shadowBankBorrow: [], // 影子银行借款
  },
  // 这里的属性会自动的导出为actions，在组件中可以直接通过dispatch进行触发
  reducers: {
    pauseTime(state) {
      state.timeState = 0
    },
    changeTimeState(state) {
      let timeState = state.timeState += 1
      if (timeState > 5) {
        timeState = 1
      }
      state.timeState = timeState
    },
    addTime(state) {
      if (!state.timeState) return
      state.time = state.time + state.timeState;
      state.timeText = getTimeText(state.time)
    },
    addBankBorrow(state, { payload }) {
      state.bankBorrow.push({
        ...payload.item,
        id: `borrow-${Math.random()}`
      })
    }
  },
})

export const { pauseTime, changeTimeState, addTime } = userSlice.actions

export default userSlice.reducer; // 导出reducer，在创建store时使用到
