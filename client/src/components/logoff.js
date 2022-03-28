const Logoff = ({token}) =>{
  localStorage.clear()
  token = "-1"
  window.location.href = '/'
  return null
}

export default Logoff;