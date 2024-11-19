import React, { useEffect } from 'react';
import './App.css'; // Include your CSS for styling

const ParallaxLayer = ({ depth, backgroundImage, isGif, children }) => {
  return (
    <div
      className="layer"
      data-type="parallax"
      data-depth={depth}
      style={{
        backgroundImage: isGif ? 'none' : `url(${backgroundImage})`, // Conditional background
      }}
    >
      {isGif && (
        <div className="gif-container">
          <iframe
            src={backgroundImage}
            width="100%"
            height="100%"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {children}
    </div>
  );
};

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const topDistance = window.pageYOffset;
      const layers = document.querySelectorAll("[data-type='parallax']");

      layers.forEach((layer) => {
        const depth = layer.getAttribute('data-depth');
        const movement = -(topDistance * depth);
        const translate3d = `translate3d(0, ${movement}px, 0)`;
        layer.style.transform = translate3d;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
   <nav className="thin-navbar">
  <div className="navbar-container">
    <h1 className="navbar-logo">EternaMuse</h1>
    <ul className="navbar-links">
      <li><a href="#hero">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#blog">Blog</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>


<div id="hero" style={{ position: 'relative', height: '100vh' }}>
  
      <ParallaxLayer depth={0.50}>
        <img
          src="https://th.bing.com/th/id/R.1cd2609efd53ca505322de046c04b489?rik=1ZxEF215f6t%2bUQ&riu=http%3a%2f%2fessentiacounselling.com%2fwp-content%2fuploads%2f2015%2f07%2fbanner-home.png&ehk=CtgNk5vrh3WGN99UxZEQ%2fFTamdk%2bO96V7doH3r2fsi4%3d&risl=&pid=ImgRaw&r=0"
          alt="sky"
          style={{
            position: 'absolute',
            left: 0,
            top: '-400px',
            width: '100%',
            height: 'auto',
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer depth={0.50}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/011/222/157/non_2x/blue-sky-with-cloud-background-nature-vertical-free-png.png"
          alt="Cloud"
          style={{
            position: 'absolute',
            left: 0,
            top: '-400px',
            width: '100%',
            height: 'auto',
          }}
        />
      </ParallaxLayer>

      <ParallaxLayer depth={0.40}>
  <p
    style={{
      position: 'absolute',
      left: '27%',
      bottom: '61%',
      transform: 'translate(-50%, 50%)',
      fontSize: '4.3em', // Reduced the font size
      fontFamily: '"Playfair Display", serif', // Elegant serif font
      fontWeight: '1000', // Bold weight for better emphasis
      color: '#2e3d4f', // Darker grey-blue shade for more depth
      textShadow: '1px 1px 1px rgba(0, 0, 0, 0.6)', // Slightly reduced shadow for a more subtle effect
      letterSpacing: '0.04em', // Reduced letter spacing for a tighter appearance
      zIndex: 10,
      lineHeight: '1.2', // Ensures readability with better line height
      textAlign: 'center', // Keeps the text centered
      margin: 0,
      padding: 0,
      WebkitTextStroke: '0.5px black',
    }}
  >
    Eternity in Elegance
  </p>
</ParallaxLayer>

      <ParallaxLayer depth={0.30}>
        <img
          src="https://img1.picmix.com/output/stamp/normal/8/4/0/0/2500048_025f5.png"
          alt="Greek Sculpture"
          style={{
            position: 'absolute',
            right: '-10px',
            bottom: '180px',
            width: 'auto',
            height: '80%',
          }}
        />
      </ParallaxLayer>

      <ParallaxLayer depth={1.0}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/011/222/157/non_2x/blue-sky-with-cloud-background-nature-vertical-free-png.png"
          alt="Cloud"
          style={{
            position: 'absolute',
            bottom: '-400px',
            width: '100%',
            height: 'auto',
          }}
        />
      </ParallaxLayer>
    </div>
       

      <section class="blog-section">
  <div class="blog-post">
    <div class="left-column">
      <img src="https://i.pinimg.com/originals/ae/6b/79/ae6b7988f9d7ba32191dae6db6e31127.png" alt="Museum Image" class="blog-image" />
    </div>
    <div class="right-column">
      <h2 class="blog-title">Explore Our Latest Exhibition</h2>
      <div class="blog-content">
        <p>
          Discover the fascinating world of art, from ancient sculptures to modern masterpieces. Our museum
          offers a unique journey through history.
        </p>
        <p>
          In this exhibition, we highlight the works of renowned artists, such as <span>Michelangelo</span>, and
          showcase rare artifacts that have shaped our understanding of culture.
        </p>
        <p>
          Join us for a tour of the <span>Renaissance Art Collection</span>, an unforgettable experience that
          will leave you with a deeper appreciation for the beauty and complexity of our world.
        </p>
      </div>
    </div>
  </div>
</section>



      {/* Architecture Section with Background Video */}
      <section className="architecture-section">
  <div className="video-container">
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/49TsjfebAH0?autoplay=1&mute=1&loop=1&playlist=49TsjfebAH0"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="Museum Video"
      className="background-video"
    ></iframe>
  </div>

  <div className="content-overlay">
    <h2 className="section-heading">Explore the Museum</h2>
    <p className="section-description">
      Immerse yourself in the world of art and history. Discover timeless
      pieces from ancient civilizations and modern masterpieces.
    </p>
  </div>
</section>
<div className="main-content">
  <section className="ending-section">
    <div className="ending-content">
      <h2 className="ending-title">Thank You for Visiting</h2>
      <p className="ending-description">
        We hope you enjoyed exploring the timeless beauty of art, culture, and history. 
        Stay connected with us for more inspiring stories and artifacts.
      </p>
      <button className="cta-button">Subscribe for Updates</button>
    </div>
  </section>
</div>

<footer className="footer">
  <p>&copy; 2024 Eternity in Elegance. All rights reserved.</p>
  <p>
    Follow us on:
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a> | 
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a> | 
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>
  </p>
</footer>

   
      
    </>
  );
};

export default App;
