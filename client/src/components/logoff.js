const Logoff = ({token}) =>{
  sessionStorage.clear()
  token = "-1"
  window.location.href = 'http://localhost:3000/'
  return null
}

export default Logoff;