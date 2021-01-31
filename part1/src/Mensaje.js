
const Mensaje = (props) => {
  return(<>
    <h1>Hola Mundo</h1>
    <p style={{color: props.color}}>  { props.msg }</p>
    </>
  )

}

export default Mensaje;