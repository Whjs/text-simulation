// 美式数字
export const americanStyleNum = (num) => {
  const decimal = `${num}`.split('.')[1] || ''
  const list = `${num}`.split('.')[0].split('').reverse()
  const reuslt = []
  for (let i = 0; i < list.length; i++) {
    if (i > 0 && i % 3 === 0) {
      reuslt.push(',')
    }
    reuslt.push(list[i])
  }
  return reuslt.reverse().join('') + `${decimal ? `.${decimal}` : ''}`
}

// 获取时间
export const getTimeText = (time) => {
  const year = Math.floor(time / 360) + 1
  const month = Math.floor((time % 360) / 30) + 1
  const day = time % 30 + 1
  return`${year}年${month}月${day}日`
}