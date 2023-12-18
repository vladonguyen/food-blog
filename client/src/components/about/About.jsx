import '../about/about.css'

export default function About() {

  return (
    <section className="about-area section-padding-80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading">
              <h3>Who we are and what we do?</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h6 className="sub-heading pb-5">

            </h6>
            <p className="text-center">
              Welcome to Delicious food, your go-to destination for all things delicious, plant-based, and compassionate! Our passion for vegan cuisine and sustainable living drives us to create a space where you can explore the vibrant world of cruelty-free and environmentally friendly food.
            </p>
          </div>
        </div>
  
        <div className="row">
          <div className="col-12">
            <img className="mb-70 center" src="img/blog-img/go-vegan.webp" alt="about us" />
            <p className="text-center">
            We believe that every meal is an opportunity to make a positive impact on your health, the planet, and the well-being of animals. Our mission is to inspire and guide you on a journey towards a more mindful and sustainable lifestyle through the joy of vegan cooking.
            </p>
          </div>
        </div>
      </div>
    </section>

  );
}