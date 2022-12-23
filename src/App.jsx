import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <a href="#">Logo</a>
        <span>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </span>
      </header>
      <div className="intro">
        <div className="intro-content">
          <h4>Hello I am Alex Vykl</h4>
          <h1>Front end developer React specialist</h1>
        </div>
      </div>
      <div className="projects" id="projects">
        <h2>My Projects</h2>
        <div className="projects-content">
          <div className="project">
            <img src="https://unsplash.it/350/220" alt="" />
            <div>
              <h3>Title</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The distribution of letters
              </p>
              <p className="project-link">See more</p>
            </div>
          </div>
          <div className="project">
            <img src="https://unsplash.it/350/220" alt="" />
            <div>
              <h3>Title</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The distribution of letters
              </p>
              <p className="project-link">See more</p>
            </div>
          </div>
          <div className="project">
            <img src="https://unsplash.it/350/220" alt="" />
            <div>
              <h3>Title</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The distribution of letters
              </p>
              <p className="project-link">See more</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact" id="contact">
        <h2>Contact Me</h2>
        <form>
          <label>
            Name
            <input type="text" />
          </label>
          <label>
            Email address
            <input type="email" />
          </label>
          <label>
            Your Message
            <textarea cols={20} rows={10}></textarea>
          </label>
          <button>Submit</button>
        </form>
      </div>
      <footer>
       <a>&copy; Alex 2022</a>
      </footer>
    </div>
  );
}

export default App;
