import Branding from '../assets/Branding.png';
import Ui from '../assets/Ui Design.png';
import Product from '../assets/Product.png'

function Footer () {
  return (
    <div>
        <p className="footer">
        OUR SERVICES
        </p>
        <div className="footer-1">
            <div className="logo-1">
                <img src={Branding} alt="icon"/>
                <div className="last1">
                    <p>Branding</p>
                    <p>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. </p>
                </div>
            </div>
            <div className="footer-2">
                <img src={Ui} alt="icon"/>
                <div className="logo-2">
                
                    <p>UI/UX</p>
                    <p>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. </p>
                </div>
            </div>
            <div className="footer-3">
                <img src={Product} alt="icon"/>
                <div className="logo-3">
                    <p>Product Design</p>
                    <p>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. </p>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Footer