import Login,{Profile} from './importComponent'
function App(){
  return(
    <div>
      <h1>First component</h1>
      <Fruit></Fruit>
      <Login></Login>
      <Profile />
    </div>
    
  )
}


function Fruit(){
  return(
    <h1>Apple</h1>
  )
}
export default App;
