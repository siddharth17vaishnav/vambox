import {Routes,Route} from 'react-router-dom'
import {HomeComponent ,StreamView} from './common/Path'
function App() {
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeComponent/>}/>
        <Route path='/stream' element={<StreamView/>}/>
      </Routes>
    </div>
  )
}

export default App
