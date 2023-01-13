import { createSlice } from '@reduxjs/toolkit';

export const materialsSlice = createSlice({
  name: 'materials', // 命名空间，在调用action的时候会默认的设置为action的前缀
  // 初始值
  initialState: {
    // 米、面、其他
    // 棉花，麻，其他
    // 金属 铁、铜、金、银、其他
    // 春夏秋冬服装
    // 交易市场
    // 房产，单身公寓，小户型，大户型，商铺，别墅
    // 汽车，卡车，动车
    // 石油

  },
  // 这里的属性会自动的导出为actions，在组件中可以直接通过dispatch进行触发
  reducers: {
    // increment(state, { payload }) {
    //   // console.log(action);
    //   state.count = state.count + payload.step; // 内置了immutable
    // },
    // decrement(state) {
    //   state.count -= 1;
    // },
  },
});

// 导出actions
// export const { increment, decrement } = counterSlice.actions;

// // 内置了thunk插件，可以直接处理异步请求
// export const asyncIncrement = (payload) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(increment(payload));
//   }, 2000);
// };

export default materialsSlice.reducer; // 导出reducer，在创建store时使用到