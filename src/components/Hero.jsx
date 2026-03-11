const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVES THE BEST</h1>
        <p>
          Experience the comfort and style you deserve with our premium footwear
          collection.
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopon">
          <p>Shop on</p>
          <div className="shopon-icons">
            <a href="https://flipkart.com" target="_blank">
            <img src="/images/flipkart.png" alt="flipkart-logo" />
            </a>
            <a href="https://amazon.com" target="_blank">
            <img src="/images/amazon.png" alt="amazon-logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="shoe_image" />
      </div>
    </main>
  );
};

export default HeroSection;
