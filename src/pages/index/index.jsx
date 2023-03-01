
import { useState } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

const Index = () => {
  const [count, setCount] = useState(0)

  const onIncrement = () => {
    setCount(count+1)
  }
  const onDecrement = () => {
    setCount(count-1)
  }
  return (
    <View>
      <View><Text>{count}</Text></View>
      <Button onClick={onIncrement}>Increment</Button>
      <Button onClick={onDecrement}>Decrement</Button>
    </View>
  )
}

export default Index