import {useEffect, useState} from 'react'


function App() {
  // const [shows , setShows] = useState("")
  const [peoples, setPeople] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setPeople(data))
  },[])



  const handleSubmit =(e)=>{
    e.preventDefault()
    const form = e.target;
    const name = form.username.value;
    const password = form.password.value;
    const result = {name, password};
    
  }
  return (
    <div>
    <div className="flex justify-center">
    <form onSubmit={handleSubmit} className='mt-5'>
    <input type="text" name='username' placeholder="username" className="input input-bordered w-full max-w-xs" />
     <input type="password" name='password' placeholder="password" className="input input-bordered w-full max-w-xs my-5" />
     <button className='btn btn-primary block mx'>Post</button>
    </form>
    </div>
  <div className="text-center block">
  {
    peoples.map(p => <p key={p.id}>{p.email}</p>)
   }
   {/* <p>{shows}</p> */}
   
  </div>
    </div>
  );
}

export default App;
