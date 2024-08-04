import { useState, useEffect } from "react"
import "font-awesome/css/font-awesome.min.css"

const App = ()=> {

  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    fetchData()
  }, [])

// Http Request Ajax Request
  const fetchData = ()=> {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users')

    .then((response)=> response.json())

    .then((users)=> {
      setUserData(users)
      setLoading(false)
    })

    .catch((error)=> {
      console.log(error);
      setLoading(false)
    })
  }
  return (
    <dev>
     <div style={{
      width: '70%',
      margin: '0 auto'
     }}>
      <h1 style={{
        textAlign: 'center'
      }}>Manjit singh</h1>

      <button 
      onClick={fetchData}
        style={{
          border: 'none',
          padding: '12px 32px',
          background: 'green',
          color: 'white',
          borderRadius: 5,
          fontWeight: 600,
          fontSize: '17px'
        }}
      >Fetch data</button>

      <div style={{
            marginTop: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 24
      }}>
      
      {loading && 
        (<div> 
          <i className="fa fa-spinner fa-spin" style={{fontSize: 100}}></i> 
        </div>)}
        {
          userData.map((user, index)=>(
            <div key={index} style={{
              border: '1px solid #ccc',
              padding: 16,
              boxShadow: '0 0 10px #ddd',
              background: 'white',
              borderRadius: 4
            }}>
              <h1 style={{
                padding: 0,
                margin: 0
              }}>{user.name}</h1>

              <p style={{
                padding: 0,
                margin: 0,
                color: 'dodgerblue'
              }}>Email: {user.email}</p>

              <p style={{
                padding: 0,
                margin: 0,
                color: 'gray'
              }}>phone: {user.phone}</p>
            </div>
          ))
        }
      </div>
     </div>
    </dev>
  )
}
export default App