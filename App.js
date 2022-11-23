

import { Box, NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import { Counter } from './Components/features/Counter';
import { store } from './Components/store';

export default function App() {
  return (

  
    <NativeBaseProvider>
      <Provider store={store}>
      
      
      <Box flex={1} bg={'white'} mt={'20%'} mx={'10'} _text={{fontSize:33,textAlign:'center',mb:10}}> Hellow World
      <Counter></Counter>

      </Box>
      </Provider>
    </NativeBaseProvider>
  );
}

