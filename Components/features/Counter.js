import { Button, View,Text, Input} from 'native-base'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount,decrementByAmount} from './counterSlice'
import { useCallback,useState } from 'react'

export function Counter({navigation}) {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const increaseCounter = useCallback   (() => dispatch  (increment()))

  const [incrementAmount, setIncrementAmount] = useState(5);
  const [dAmount, setDAmount] = useState(1);

  return (
    <View>
      <View>


        <Button
          aria-label="Increment value"
          onPress={increaseCounter}
        >
          Increment
        </Button>

        <Text>{count}</Text>
        <Button
          aria-label="Decrement value"
          onPress={() => dispatch(decrement())}
        >
          Decrement
        </Button>
        <View mt={1}>
    <Input value={incrementAmount} onChangeText={setIncrementAmount} w={'20%'}></Input>

        <Button
          onPress={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </Button>


        <Input value={dAmount} onChangeText={setDAmount} w={'20%'}></Input>
         <Button
         mt={1}
          onPress={() =>
            dispatch(decrementByAmount(Number(dAmount) || 0))
          }
        >
          Remove Amount
        </Button>

        
        </View>
      </View>
    </View>
  )
}