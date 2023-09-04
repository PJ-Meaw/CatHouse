import React, { useState, useRef } from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import gsap from "https://cdn.skypack.dev/gsap@3.6.1";

// GSAP timeline instance
const tl = gsap.timeline();

// Circumference of the circle of check mark
const CHECK_CIRC = 2 * Math.PI * 45;

/**
 * Subscribe interaction JSX element
 */
function SubInteraction() {
  // E-mail address value
  const [email, setEmail] = useState("");
  
  // If the element is animating
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Subscribe element
  const subElm = useRef(null);
  
  // Subscribe mask element
  const subMaskElm = useRef(null);
  
  // Circle part of the subcribe element
  const subCheckCircleElm = useRef(null);
  
  // Check part of the subcribe element
  const subCheckElm = useRef(null);
  
  // Subscribe button click event
  const subscribeClick = (evt) => {
    if (isAnimating === true) {
      return;
    }
    
    setIsAnimating(true);
    
    // Main box to circle
    tl.to(subElm.current, {
      width: "75vmin",
      height: "75vmin",
      borderRadius: "50%",
      ease: "power4.out",
      duration: 0.5
    });
    
    // Green circle scale to normal
    tl.to(subMaskElm.current, {
      scale: 1,
      ease: "power4.out",
      duration: 0.5
    }, "-=0.5");
    
    // Draw a circle
    tl.to(subCheckCircleElm.current, {
      strokeDasharray: CHECK_CIRC + " " + CHECK_CIRC,
      ease: "power3.out",
      duration: 0.5
    });
    
    // Draw a check mark
    tl.to(subCheckElm.current, {
      "--height": "100%",
      ease: "power2.out",
      duration: 0.25
    }, "-=0.5");
    
    // Draw a check mark
    tl.to(subCheckElm.current, {
      "--width": "84%",
      ease: "power2.out",
      duration: 0.25
    }, "-=0.25");
    
    // Do nothing, just to delay the reset
    tl.to(subElm.current, {
      duration: 2.5,
      onComplete: () => {
        // Clear email
        setEmail("");
        
        // Reset animating status
        setIsAnimating(false);
        
        // Reset the animation to beginning
        tl.progress(0);
        tl.clear();
        
        // Unset the size of the box
        tl.set(subElm.current, {
          width: null,
          height: null,
        });
      }
    });
  }
  
  // Render JSX
  return (
    <div className="sub" ref={subElm}>
      <div className="sub-text">
        <h2>Great! Ain't it?</h2>
        <p>Do you want to hear from us more?</p>
      </div>
      <div className="sub-form">
        <div className="field">
          <input
            type="email"
            placeholder="Enter your e-mail address"
            value={email}
            onInput={evt => { setEmail(evt.target.value); }}
          />
        </div>
        <div className="field">
          <a
            href="#"
            role="button"
            onClick={subscribeClick}
          >
            <i className="far fa-bell"></i>
            <span>Subscribe now</span>
          </a>
        </div>
      </div>
      <div className="sub-mask" ref={subMaskElm}>
        <svg
          viewBox="0 0 100 100"
          className="sub-check-circle"
          ref={subCheckCircleElm}
        >
          <circle r="45" cx="50" cy="50"></circle>
        </svg>
        <div className="sub-check" ref={subCheckElm}>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<SubInteraction />, document.querySelector("#app"));
