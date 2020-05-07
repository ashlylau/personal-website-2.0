import React from "react"
import Typed from 'typed.js';

const introOptions = [
    'programming',
    'listening to the Hamilton soundtrack',
    're-watching Killing Eve',
    'doodling',
    'petting a dog'
]

class HeroComponent extends React.Component {
    componentDidMount() {
        // You can pass other options here, such as typing speed, back speed, etc.
        const options = {
            strings: introOptions,
            typeSpeed: 50,
            backSpeed: 20,
            loop: true
        };
        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
        // to prevent memory leaks
        this.typed.destroy();
    }

    render() {
        return (
          <div>
              <p>I'm likely <span
                ref={(el) => { this.el = el; }}
              />.</p>
          </div>
        );
      }
}

export default HeroComponent