import logo from './images/logo.svg'


export function BalanceBar()
{



    return(
        <>
        <div className="balance-bar">
            <div>
            My balance
            <p>£921.28</p>
            
            </div>
            <img src={logo} alt='logo' width='40px' height='40px'/>
        </div>
        </>
    )

}