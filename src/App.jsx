import "./App.css";
import { useState } from "react";




function App() {
  const [secondHeadingText,setsecondHeadingText] = useState("Guess My Fav Dish?");
  const [headingText, setHeadingText] = useState(
    " I swear by my pretty floral bonnet, I will end you."
  );

  function handleHomeClick() {
    setHeadingText("Hello First struggle");
  }

  function handleAboutClick() {
    setHeadingText(
      "Hello! I am a motivated and enthusiastic individual currently pursuing my B.Tech degree in the third year at Sushant University. With a passion for technology"
    );
  }

  function handleContactClick(){
    setHeadingText("My Email is sumit182003@gmail.com");
  }
  function handleButtonClick(){
    setsecondHeadingText("FAV DISH IS RAJMA-RICE");
  }


  let cars = ["Ferrari","Alto","Baleno"];
  function MyList(props) {
    return (
      <>
        <ol>
          {cars.map((car)=>{
            return <li key={car} >{car}</li>
          })}
        </ol>
      </>
    );
  }

  

  return (
    <>
      <navbar>
        <ul>
          <a href="#intro">
            <li onClick={handleHomeClick}>Home</li>
          </a>
          <a href="#Heading">
            <li onClick={handleAboutClick}>About</li>
          </a>
          <li onClick={handleContactClick}>Contact</li>
          <a href="https://github.com/sumit-1803">
            <li>Github</li>
          </a>
        </ul>
      </navbar>

      <div id="intro" className="intro">
        Genius is one percent inspiration and ninety-nine percent perspiration.
      </div>

      <h1 id="Heading">{headingText}</h1>
      <h2>{secondHeadingText}</h2>
      <button onClick={handleButtonClick}> View Fav Dishes</button>

      <MyList />
    </>
  );
}

export default App;
