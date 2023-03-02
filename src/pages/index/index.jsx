
import { useState } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button } from '@tarojs/components'


import './index.scss'

const Index = ({count, dispatch}) => { 
  const onIncrement = () => {
    dispatch({type: 'counter/increment'})
  }
  const onDecrement = () => {
    dispatch({type: 'counter/decrement'})
  }
  return (
    <View>
      <View><Text>{count}</Text></View>
      <Button onClick={onIncrement}>Increment</Button>
      <Button onClick={onDecrement}>Decrement</Button>
    </View>
  )
}

const mapStateToProps = (state) => {
  return state.counter
}

export default connect(mapStateToProps)(Index)