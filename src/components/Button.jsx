const Button = () => {
  return (
    <a href="#counter" className='cta-wrapper'>
        <div className="cta-button group">
            <div className="bg-circle"/>
            <p className="text">See my work</p>
            <div className="arrow-wrapper">
                <img src="/images/arrow-down.svg" alt="arrow" />
            </div>
        </div>
    </a>
  )
}

export default Button