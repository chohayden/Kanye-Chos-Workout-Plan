export default function Layout(props) {

    const { children } = props

    const header = (
    <header>
        <h1 className="text-gradient">Kanye Chos Workout Plan</h1>
        <p><strong>The 30 Day Workout Program To Get Chicks</strong></p>
    </header>
)

    const footer = (
    <footer>
        <p>Created by <a href="https://www.haydencho.com/" target="_blank">Hayden Cho</a><br/></p>
    </footer>
)

    return(
    
    <>   
        {header}
        {children}
        {footer}
    </> 

)
}