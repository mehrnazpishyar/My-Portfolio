import "./Hero.css";

const Hero = () => {
  return (
    <div id="home" className="heroSection">
      <div className="title">
        <h1>Hi, I'm <span>Mehrnaz Pishyar</span></h1>
        <p>
        I am a passionate Frontend developer with experience in React.js, UI-UX design, and SPA development. I enjoy creating web applications that are fast, responsive, and user-friendly.
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
