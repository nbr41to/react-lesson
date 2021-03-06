const Textbox = ({ color, text }) => {
  console.log(color)
  console.log(text)
  const styleDiv = {
    border: '1px solid #000',
    borderRadius: '4px',
    margin: '8px 20%',
    padding: '8px',
    textAlign: 'center'
  }
  return (
    <div style={styleDiv}>
      <p style={{ color: color }}>{text}</p>
    </div>
  )
}

export default Textbox
