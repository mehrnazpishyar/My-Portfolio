import { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [loop, setLoop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Mehrnaz Pishyar", "a Web Developer", "a UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 50);;
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loop % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoop(loop + 1);
      setDelta(100);
    }
  };

  return (
    <div id="home" className="heroSection">
      <div className="title">
        <h1>
          {`Hi I'm `} <span className="wrap">{text}</span>{" "}
        </h1>
        <p>
          I am a passionate Frontend developer with experience in React.js,
          UI-UX design, and SPA development. I enjoy creating web applications
          that are fast, responsive, and user-friendly.
        </p>
        <div className="mail">
          <a href="mailto:mpishyar.de@gmail.com">Let's connect</a>
        </div>
      </div>
     <img src="/my_pic.jpg" alt="my_pic"/>
    </div>
  );
};

export default Hero;
