
import { DndProvider } from 'react-dnd'
import './App.css'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Drag from './components/DragDrop'

function App() {

  return (
    <>
    <DndProvider backend={HTML5Backend}>

    <div className="App">
    <Drag/>
      </div>
    </DndProvider>
    </>
  )
}

export default App
