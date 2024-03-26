import lady from '../assets/image.png';

export default function Hero() {
  return (
    <div className="hero">
        <div className="hero-text">
            <p>
            Hi, there!
            </p>
            <h1>
            <span>LUXE</span> IS HERE TO BE<br/> YOUR ASSISTANCE
            </h1>
            <p>
            I am here ready to help you in making creative digital products
            </p>
            <button>
            Let’s Discuss
            </button>
        </div>
        <div className="photo-class">
            <img className="photo-1" src={lady} alt="lady" />
        </div>
    </div>
  );
}
