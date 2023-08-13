import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './store/slice/userSlice';

function App() {
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  // store data
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addUser(data));
  }

  // get Data
  const collection = useSelector((state) => {
    return state.users;
  })

  useEffect(() => {
    console.log(collection);
  })

  return (
    <>
      <form>
        <label htmlFor="inputField">Enter something: </label>
        <input onChange={e => setData(e.target.value)} type="text" id="inputField" name="inputField" />
        <button type="submit" onClick={submitHandler}>Submit</button>
      </form>
    </>
  )
}

export default App
