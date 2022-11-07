import './Button.css'


const Button = ({style, text, img, buttonClick}) => {
  return (
    <>
        <button className="btn-list" style={style} onClick={buttonClick}><img src={img} alt=''/> {text}</button>
    </>
  )
}

export default Button