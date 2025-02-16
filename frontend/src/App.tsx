import { Provider } from 'react-redux'
import LeftSection from './components/LeftSection/LeftSection'
import MiddleSection from './components/MiddleSection/MiddleSection'
import { store } from './state/store'

function App() {
  
  return (
    <>
      <Provider store={store}>
        <LeftSection></LeftSection>
        <MiddleSection></MiddleSection>
      </Provider>
    </>
  )
}

export default App
