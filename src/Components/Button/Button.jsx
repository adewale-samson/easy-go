import './Button.css'

const Button = ({style, text}) => {
  return (
    <>
        <button className="btn-list" style={style} >{text}</button>
    </>
  )
}

export default Button