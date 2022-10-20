import './Button.css'

const Button = ({style, text, img}) => {
  return (
    <>
        <button className="btn-list" style={style} ><img src={img}/> {text}</button>
    </>
  )
}

export default Button