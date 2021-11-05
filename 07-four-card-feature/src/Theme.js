import {useState} from 'react'

// import Images
import darkImg from './images/dark_mode.svg'
import lightImg from './images/light_mode.svg'

function Theme(props) {
  const [theme, setTheme] = useState('light')
  const [img, setImg] = useState(lightImg)

  function toggleTheme(){
    if (theme === 'light') {
      setTheme('dark')
      props.update('theme-dark')
      setImg(darkImg)
    }else if(theme === 'dark'){
      setTheme('light')
      setImg(lightImg)
      props.update('')
    }
    console.log(theme)
  }
  return(
    <div className="toggle">
      <button onClick={()=>toggleTheme()}>
        <img src={img} alt=""/>
      </button>
    </div>
  )
}

export default Theme

// // .App h1,.App h2,.App h3{
//   color: var(--text-clr-pr, hsl(234, 12%, 34%));
//   /* primary text color */
// }
