import { useEffect, useState } from 'react'
import{del,edit} from './redux/cardSlice'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import AddNote from './component/AddNote'
import Descicon from './assets/description.svg'

function App() {
  let dispatch = useDispatch()
  let notesObj = useSelector((state)=>state.cardnote)
  console.log('notes initial state-----> ',notesObj);
  const [initialState, setInitialState] = useState(notesObj)

  useEffect(()=>{
    setInitialState(notesObj)
  },[notesObj])

  return (
    <>
      <div  className=' row '>
      <div className="col-3">
          <h1>Notes App</h1>
          <div className="notes-btn">
            <img src={Descicon} />&nbsp;&nbsp;
            <label>Notes</label>
          </div>
        </div>
        <div className='col-9'>
        <AddNote/>
          <div className="card-title mb-2 mt-5">
              <i class="fa-regular fa-note-sticky"></i>&nbsp;&nbsp;
                  My Notes</div>
                  <label className="card-text">Recently viewed</label>
        
        <div className="d-flex  mt-2 scroll-card">
          {initialState.notes.map((e,index)=>{
            return (
              <div className="card tile-card p-4 ">
              <div className="row">
                <div className=" col-10 card-title ">{e.title}</div>
                <div className=" col-2 card-btns ">
                
                    <i className="fa-solid fa-pen" onClick={()=>dispatch(edit(index))} ></i> &nbsp;&nbsp;
                    <i className="fa-regular fa-trash-can" onClick={() => dispatch(del(index))} ></i>
                </div>
              </div>
              
                <label className="card-text card-body-text">{e.bodyText}</label>
              
              <div className="card-text">{e.footText}</div>
            </div>
            )
          })}
          </div>
          </div>
        </div>
       
    </>
  )
}

export default App
