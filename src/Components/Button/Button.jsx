// import './Button.css'


const Button = ({style, text, img, buttonClick}) => {
  return (
    <>
        <button className="btn-list" type='submit' style={style} onClick={buttonClick}>{img} {text}</button>
    </>
  )
}

export default Button