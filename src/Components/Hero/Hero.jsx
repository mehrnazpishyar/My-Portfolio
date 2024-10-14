import "./Hero.css";

const Hero = () => {
  return (
    <div className="heroSection">
      <div className="title">
        <h1>Hi, I'm <span>Mehrnaz Pishyar</span></h1>
        <p>
          I'm a Front-End Developer. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. In eum quibusdam adipisicing elit. In eum quibusda.
        </p>
        <div className="mail">
          <a href="mailto:mpishyar.de@gmail.com">Contact me</a>
        </div>
      </div>
      <img src="./myPic.JPG" alt="myPic" />
    </div>
  );
};

export default Hero;
