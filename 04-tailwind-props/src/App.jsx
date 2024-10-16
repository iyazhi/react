import Card from '../components/card'
import './App.css'
function App() {
const uName = {
  first : "harry",
  last : "kumar"
}

  return (
    <>
      
    <h2> Review</h2>
    <section>
      <Card userName="Click me" newObj={uName}  />
      <br/>
      <Card userName="CTA"/>
      <br/>
      <Card /> 
    </section>




    </>
  )
}

export default App
