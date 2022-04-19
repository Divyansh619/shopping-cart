import  './App.css'
import Header from './MyComponent/Header'
import Main from './MyComponent/Main'
import Basket from './MyComponent/Basket'
import data from './MyComponent/data'
function App() {
  const{products}=data;
  return (
    <div className='App'>
      <Header></Header>
      <div className='row'>
        <Main products={products}></Main>
        <Basket></Basket>
      </div>

    </div>
  )
}

export default App