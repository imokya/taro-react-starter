import { useSelector, useDispatch } from 'react-redux'
import { View, Text, Button } from '@tarojs/components'

import './index.scss'

const Index = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  const onIncrement = () => {
    dispatch({ type: 'counter/increment' })
  }
  const onDecrement = () => {
    dispatch({ type: 'counter/decrement' })
  }
  return (
    <View>
      <View>
        <Text>{count}</Text>
      </View>
      <Button onClick={onIncrement}>Increment</Button>
      <Button onClick={onDecrement}>Decrement</Button>
    </View>
  )
}

export default Index
