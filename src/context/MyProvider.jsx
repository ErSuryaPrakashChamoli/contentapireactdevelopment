import MyContext from './MyContext'

function MyProvider( { children } ) {
 
   const [user,setUser] = useState({ name: "surya", loggedIn:true }); 

  return (
      <MyContext.Provider  value = {{ user, setUser }}>
         {children}
      </MyContext.Provider>
  )
}

export default MyProvider