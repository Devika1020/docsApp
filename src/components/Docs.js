import React, { useEffect, useRef, useState, } from 'react'
import Modal from './Modal';
import { collection,addDoc,onSnapshot, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

// import Modal from '@mui/material/Modal';
export default function Docs({
  database
}) {
  const collectionRef = collection(database, 'docsData')
  const addData=()=>{
    addDoc(collectionRef, {
      title: title
  })
  .then(() => {
      alert('Data Added')
  })
  .catch(() => {
      alert('Cannot add data')
  })
  }
  const getData = () => {
    onSnapshot(collectionRef, (data) => {
       setDocsData(data.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
        }))
    })
}
const isMounted = useRef()
useEffect(() => {
  if(isMounted.current){
      return 
  }

  isMounted.current = true;
  getData()
}, [])
const [docsData, setDocsData] = useState([]);
const getId=(id)=>{
navigate(`/docsEdit/${id}`)
}
let navigate=useNavigate();
  const [title, setTitle] = useState('')
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    
  return (
    <div className='d'>
        <h1>DOCS APP</h1>
        <button onClick={handleOpen} className='ad'> + Add a Document</button>
        <div className='gm'>
                {docsData.map((doc) => {
                    return (
                        <div className='gc' onClick={()=>getId(doc.id)}>
                            <p>{doc.title}</p>
                            {doc.docsDesc}

                        </div>
                    )
                })}
            </div>  
                    
         <Modal
                open={open}
                setOpen={setOpen}
                title={title}
                setTitle={setTitle}
                addData={addData}
            /> 
    </div>
  )
}