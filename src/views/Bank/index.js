import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, message } from 'antd';

import './index.less'

import { americanStyleNum, getTimeText } from '@/utils'

function Bank() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  // 贷款列表
  const { borrowList } = useSelector((state) => state.bank)
  // 个人资产和借款信息
  const { time, assetsSum, bankBorrow } = useSelector((state) => state.user)
  // 最大额度
  const quota = Math.max(500000, Math.floor(assetsSum * 0.7))
  // 借款总额
  const borrowSum = bankBorrow.reduce((val, curVal) => val + curVal.sum , 0)
  // 借款信息
  const [borrowInfo, setBorrowInfo] = useState({
    name: '',
    sum: 0, // 贷款总额
    waitSum: 0, // 待还贷款
    rate: 0, // 贷款利率
    interest: 0, // 已还利息
    interestSum: 0, // 利息总额
    createTime: 0, // 贷款开始时间
    endTime: 0, // 贷款结束时间
    day: 0, // 贷款天数
    max: 0, // 贷款最大值
  });
  const borrowClick = (index) => {
    setBorrowInfo({
      ...borrowInfo,
      createTime: time,
      ...borrowList[index]
    })
    showDrawer()
  }
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onValuesChange = (val) => {

    setBorrowInfo({
      ...borrowInfo,
      ...val
    })
  }
  // 确定
  const onConfirm = () => {
    // onClose()
    const item = {
      ...borrowInfo
    }
    item.sum = Number(item.sum)
    item.day = Number(item.day)
    if (item.max !== 'max' && item.sum > item.max) {
      message({
        type: 'error',
        content: '不能超过最大贷款金额',
      })
      return
    }
    if (quota - borrowSum < item.sum) {
      message({
        type: 'error',
        content: '不能超过剩余贷款额度',
      })
      return
    }
    // item.
  }
  return (
    <>
      <div className='bank-container'>
        <div className='bank-quota'>
          <div>借款最大额度：{ americanStyleNum(quota) }元</div>
          <div>已借款：{ borrowSum }</div>
        </div>
        <div className='borrow-money-list'>
          {
            borrowList.map((item, index) => {
              return (
                <div key={index} className='borrow-money-item'>
                  <div className='borrow-money-text'>
                    <div>名称：{ item.name }</div>
                    <div>借款时间：{ item.time }天</div>
                    <div>借款利率：{ item.rate }%</div>
                    <div>最大金额：{ item.max !== 'max' ? `${ americanStyleNum(item.max) }元` : `无限制` }</div>
                  </div>
                  <div className='borrow-money-btn' onClick={ () => borrowClick(index) }>借款</div>
                </div>
              )
            })
          }
        </div>
        <div className='bank-borrow-list'>
          <div className='bank-borrow-title'>借款记录</div>
          {
            !bankBorrow.length ?
            (<div>无记录</div>) :
            (bankBorrow.map((item, index) => {
              return (
                <div key={index} className='bank-borrow-item'>
                  <div>借款金额：{ item.sum }</div>
                  <div>待还金额：{ item.waitSum }</div>
                  <div>借款利率：{ item.rate }</div>
                  <div>已还金额：{ item.repay }</div>
                  <div>已还利息：{ item.interest }</div>
                  <div>借款时间：{ getTimeText(item.createTime) }</div>
                  <div>还款时间：{ getTimeText(item.endTime) }</div>
                  <div>剩余时间：{ time - item.endTime }天</div>
                </div>
              )
            }))
          }
        </div>
      </div>
      <Drawer
        title="借款"
        width={'80%'}
        onClose={onClose}
        open={open}
        closable={false}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>取消</Button>
            <Button onClick={onConfirm} type="primary">
              确定
            </Button>
          </Space>
        }
      >
        <div className='borrow-money-item'>
          <div className='borrow-money-text'>
            <div>名称：{ borrowInfo.name }</div>
            <div>借款时间：{ borrowInfo.time }天</div>
            <div>借款利率：{ borrowInfo.rate }%</div>
            <div>最大金额：{ borrowInfo.max !== 'max' ? `${ americanStyleNum(borrowInfo.max) }元` : `无限制` }</div>
            <div>剩余额度：{ americanStyleNum(quota - borrowSum) }元</div>
          </div>
          <Form
            name="basic"
            layout="horizontal"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            initialValues={{ ...borrowInfo }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            onValuesChange={onValuesChange}
            autoComplete="off"
            size='small'
          >
            <Form.Item
              label="借款金额"
              name="sum"
              rules={[{ required: true, message: '请输入贷款金额' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="借款天数"
              name="day"
              rules={[{ required: true, message: '请输入贷款天数' }]}
            >
              <Input />
            </Form.Item>
          </Form>
        </div>
      </Drawer>
    </>
  )
}

export default Bank
