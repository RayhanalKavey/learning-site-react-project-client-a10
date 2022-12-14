import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img3 from "../../assets/image/debugging.png";
import img1 from "../../assets/image/context-api.png";
import img2 from "../../assets/image/react-hooks.png";
import "./Home.css";
import { Accordion } from "react-bootstrap";
const Home = () => {
  return (
    <div className="mb-5">
      <Carousel className="text-light  mx-auto pb-1 mb-5 " fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carousal-image"
            src={img2}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousal-image"
            src={img1}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousal-image"
            src={img3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      {/* RB */}
      <Accordion className="mb-5" defaultActiveKey="0">
        <h2 className="text-start pb-2">Lean React at a Glance</h2>
        <Accordion.Item eventKey="0">
          <Accordion.Header> React and React's key feature:</Accordion.Header>
          <Accordion.Body>
            <p className="mb-2">
              {" "}
              React is a JavaScript library for building the user interface for
              web and mobile, developed by Facebook in 2011. It is open-sourced
              recently in 2015, but it has one of the largest communities
              supporting it.
            </p>
            <ul>
              <li>
                JSX: It is a JavaScript syntax extension that describes the
                visual appearance of the user interface. With the help of JSX,
                we can write HTML-like structures in JavaScript files.
              </li>
              <li>
                Virtual dom(VDOM): React’s virtual DOM is a JavaScript
                representation of the actual DOM. When updates are made React
                compares the current DOM to the virtual DOM and only updates the
                differences between the two. Virtual DOM synced with the real
                DOM by a library such as ReactDOM. This process is called
                reconciliation. When the state of an object changes virtual DOM
                only changes that object in the real DOM, rather than updating
                the whole DOM. This results in a much faster web application.
              </li>
              <li>
                Divide into components: Splits the user interface into
                independent components, so that independent components can be
                processed separately. React breaks web elements down into
                reusable components making it easy to manage complex web
                interfaces.
              </li>
              <li>
                Unidirectional data binding: React support unidirectional in
                other words one-way data binding, which means nesting child
                components within parent components.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Single Page Application (SPA)</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                Only one web page, and each time something happens, only part of
                the page is reloaded while the rest of the HTML remains
                unchanged All user interaction with this service is carried out,
                using one screen (page)
              </li>
              <li>
                Load all the necessary HTML, CSS, and JavaScript in the initial
                page load, and then dynamically update their DOM and retrieve
                extra data, based on user interactions{" "}
              </li>
              <li>
                Give the users the illusion that they are accessing different
                pages or paths
              </li>
              <li>
                Enables to combine a complex functionality of a MAP with
                convenient navigation ( a hybrid approach)
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/*RB  */}

      <div>
        <h2>About Us</h2>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={img2}
                className="img-fluid rounded-start w-full h-100"
                alt=""
              />
            </div>
            <div className="col-md-8 ">
              <div className="card-body ">
                <p className="card-text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which dont look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
