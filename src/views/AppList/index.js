import React from 'react'
import { useNavigate} from 'react-router-dom'

import './index.less'

function AppList() {
  const navigate = useNavigate()
  const goPath = (path) => {
    navigate(`${path}`)
  }
  // const goBack = () => {
  //   navigate('/bank')
  // }
  // const goHelp = () => {
  //   navigate('/help')
  // }
  return (
    <div className='app-list'>
      <div className='app-item'>
        农场
      </div>
      <div className='app-item'>
        矿场
      </div>
      <div className='app-item'>
        牧场
      </div>
      <div className='app-item'>
        生产工场
      </div>
      <div className='app-item'>
        仓库
      </div>
      <div className='app-item'>
        人才中心
      </div>
      <div className='app-item'>
        研发中心
      </div>
      <div className='app-item' onClick={ () => goPath('/market') }>
        交易市场
      </div>
      <div className='app-item' onClick={ () => goPath('/bank') }>
        银行
      </div>
      <div className='app-item'>
        影子银行
      </div>
      <div className='app-item'>
        资产负债表
      </div>
      <div className='app-item' onClick={ () => goPath('/help') }>
        帮助
      </div>
    </div>
  )
}

export default AppList
