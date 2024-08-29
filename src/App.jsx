
import { DndProvider } from 'react-dnd'
import './App.css'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Drag from './components/Drag'

function App() {

  return (
    <>
    <DndProvider backend={HTML5Backend}>

    <div className="text-center w-screen h-screen">
      <h1 className='text-[25px] font-bold m-auto'>React Drag and Drop</h1>
    <Drag/>
      </div>
    </DndProvider>
    </>
  )
}

export default App
