
type PropsTypes ={
  children: React.ReactNode
  classname: string
}

const Button = (props: PropsTypes) =>{
  const {children, classname} = props

  return(
    <button className={`py-2 px-5 font-medium rounded-full ${classname}`}>
      {children}
    </button>
  )
}

export default Button