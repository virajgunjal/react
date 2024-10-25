import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(true);
  const [Password,setPassword] = useState("");
  const passwordRef = useRef(null);
  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    //passwordRef.current.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(Password);
  },[Password])


  const passwordGenerator = useCallback(()=>{
    let pass="";
    let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuioplkjhgfdsazxcvbnm";
    if(numberAllowed){str += "0123456789";}
    if(charAllowed){str+="!@#$%^&*()_+-/~[]";}
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char);    
    }
    setPassword(pass);

  } , [length, numberAllowed, 
    charAllowed, setPassword]) ;

  useEffect(()=>{
    passwordGenerator()
  },[length,charAllowed,numberAllowed,passwordGenerator])


  return (
    
     <div className='w-full max-w-md mx-auto shadow-md
     rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        
        <input
          type="text"
          value={Password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
        />
      <button

      onClick={copyPassword}
      onMouseOver={PointerEvent}
      className='outline-none bg-blue-700 text-white 
      px-3 py-0.5 shrink-0 active:bg-blue-800'>copy</button>
      </div>

      <div className='flex text—sm gap—x—4'>
        <div className= 'flex items-center gap-x—2'>
          <input type="range"
          min={6}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}} />
          <label>Length: {length} </label>
        </div>
        <div className='flex items-center gap-x-2'> 
        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>{
            setnumberAllowed((prev) => !prev) ;
          }}
          />
          <label htmlFor="numberInput"> Numbers </label>
          </div><div className='flex items-center gap-x-2'>
          <input
          type="checkbox"
          defaultChecked={charAllowed}
          id="characterInput"
          onChange={()=>{
            setcharAllowed((prev) => !prev) ;
          }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
    
  )
}

export default App
