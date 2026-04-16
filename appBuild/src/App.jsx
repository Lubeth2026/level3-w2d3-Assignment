
import './App.css'
import Title from './components/Title'
import Description from './components/Description'
import TruthOrDare from './components/TruthOrDare'

function App() {

  return (
    <>
      <h1>Welcome!!</h1>
      <Title gameName="The Truth or Dare Game"/>
      <Description message="This is a classic, verbal party game for 2 or more players where participants choose between answering a personal question truthfully or performing a DARE."/>
      <TruthOrDare/>
    </>
  )
}

export default App
