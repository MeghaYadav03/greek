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
      {/* Hero Section */}
      <div id="hero">
        <ParallaxLayer
          depth="0.10"
          backgroundImage="https://everytexture.com/wp-content/uploads/2020/12/everytexture.com-stock-nature-00012.jpg"
        />

        <ParallaxLayer depth={0.50}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/011/222/157/non_2x/blue-sky-with-cloud-background-nature-vertical-free-png.png"
            alt="Cloud"
            style={{
              position: 'absolute',
              left: 0,
              top: -400,
              width: '100%',
              height: 'auto',
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer depth={0.40}>
          <p
            style={{
              position: 'absolute',
              left: '30%',
              bottom: '52%',
              transform: 'translate(-50%, 50%)',
              fontSize: '5em',
              fontFamily: '"Playfair Display", serif',
              fontWeight: '1000',
              color: 'black',
              letterSpacing: '0.05em',
              zIndex: 10,
              lineHeight: '1.2',
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
              right: -10,
              bottom: 80,
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
              bottom: -480,
              width: '100%',
              height: 'auto',
            }}
          />
        </ParallaxLayer>
      </div>

       

      {/* Blog Section */}
      <div id="content">
        <section className="blog-section">
          <div className="blog-post">
            <div className="left-column">
              <div className="sculpture-container">
                <img
                  src="https://i.pinimg.com/originals/ae/6b/79/ae6b7988f9d7ba32191dae6db6e31127.png" // Replace with the actual path to your sculpture PNG
                  alt="Sculpture"
                  className="sculpture-image"
                />
              </div>
            </div>
            <div className="right-column">
              <h2 className="blog-title">The Timeless Beauty of Greek Sculpture</h2>
              <p className="blog-content">
                The artistry of ancient Greek sculpture is a timeless treasure. It reflects the culture and ideals of a civilization
                that still influences modern art to this day. The detailed sculptures capture the essence of human form, often conveying
                emotions and stories through stone.
              </p>
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


   
      </div>
    </>
  );
};

export default App;
