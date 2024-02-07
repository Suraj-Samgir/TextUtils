import React, {useState} from "react";

export default function About() {

  const [myStyle, setStyle] = useState({
    color : 'black',
    backgroundColor : 'white'
  })

  const [buttonText, setbtnText] = useState("Enable Dark Mode")

  let changeMode = () => {
    if (buttonText === "Enable Dark Mode") {
        setbtnText("Enable Light Mode");
        setStyle({
            color: 'white',
            backgroundColor: 'black'
        })
    }
    else
    {
        setbtnText("Enable Dark Mode")
        setStyle({
            color: 'black',
            backgroundColor: 'white'
        })
    }
  }

  return (
    <div className="container mb-4" style={myStyle}>
        <h1 className="my-4 text-center">About US</h1>
      <div class="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
        <div class="accordion-item" style={myStyle}>
          <h2 class="accordion-header" id="flush-headingOne" style={myStyle}>
            <button
              class="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
          style={myStyle}
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body.
            </div>
          </div>
        </div>

        <div class="accordion-item" style={myStyle}>
          <h2 class="accordion-header" id="flush-headingTwo" style={myStyle}>
            <button
              class="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
          style={myStyle}
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              second item's accordion body. Let's imagine this being filled with
              some actual content.
            </div>
          </div>
        </div>

        <div class="accordion-item" style={myStyle}>
          <h2 class="accordion-header" id="flush-headingThree" style={myStyle}>
            <button
              class="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
          style={myStyle}
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              third item's accordion body. Nothing more exciting happening here
              in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>

      </div>
        <div className="container">
      <button className="btn btn-primary my-3" onClick={changeMode}>{buttonText}</button>
      </div>
    </div>
  );
}
