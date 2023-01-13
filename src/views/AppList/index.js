import React from 'react'
import { useNavigate} from 'react-router-dom'

import './index.less'

function AppList() {
  const navigate = useNavigate()
  const goHelp = () => {
    navigate('/help')
  }
  return (
    <div className='app-list'>
      <div className='app-item'>
        农场
      </div>
      <div className='app-item'>
        矿场
      </div>
      <div className='app-item'>
        仓库
      </div>
      <div className='app-item'>
        人才中心
      </div>
      <div className='app-item'>
        交易市场
      </div>
      <div className='app-item'>
        银行
      </div>
      <div className='app-item'>
        影子银行
      </div>
      <div className='app-item'>
        资产负债表
      </div>
      <div className='app-item' onClick={ goHelp }>
        帮助
      </div>
    </div>
  )
}

export default AppList
