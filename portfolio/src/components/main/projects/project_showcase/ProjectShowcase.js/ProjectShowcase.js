import React from 'react';
import './ProjectShowcase.css';
import Carousel from "../carousel/Carousel.js";

function ProjectShowcase() {
  return (
    <div className="ProjectShowcase" id="about">
      <div class="maintitle bubble">
        <h1 class="showcasetitle">Most Recent Projects</h1>
        <Carousel/>
      </div>
      
      <div class="projects_holder bubble">
        <h1 class="showcasetitle">Other Projects</h1>
        <div className="projects">
          <div className="project">
            <img
              src="https://uploads.codesandbox.io/uploads/user/e710feef-8b3e-426f-8d96-9a3bfec5832e/iBKW-primary1.png"
              alt="project"
            />
            <h2>Title</h2>
            <h8>Dates of Development</h8>
            <h6>Role</h6>
            <p>Project Desc</p>
            <h6>Tech Stack Used</h6>
            <div class="deployed_codebase">
              <a href=""><i class="fas fa-globe"></i></a>
              <a href=""><i class="fab fa-github"></i></a>
            </div>
          </div>

          <div className="project">
            <img
              src="https://uploads.codesandbox.io/uploads/user/e710feef-8b3e-426f-8d96-9a3bfec5832e/iBKW-primary1.png"
              alt="project"
            />
            <h2>Title</h2>
            <h8>Dates of Development</h8>
            <h6>Role</h6>
            <p>Project Desc</p>
            <h6>Tech Stack Used</h6>
            <div class="deployed_codebase">
              <a href=""><i class="fas fa-globe"></i></a>
              <a href=""><i class="fab fa-github"></i></a>
            </div>
          </div>

          <div className="project">
            <img
              src="https://uploads.codesandbox.io/uploads/user/e710feef-8b3e-426f-8d96-9a3bfec5832e/iBKW-primary1.png"
              alt="project"
            />
            <h2>Title</h2>
            <h8>Dates of Development</h8>
            <h6>Role</h6>
            <p>Project Desc</p>
            <h6>Tech Stack Used</h6>
            <div class="deployed_codebase">
              <a href=""><i class="fas fa-globe"></i></a>
              <a href=""><i class="fab fa-github"></i></a>
            </div>
          </div>

          <div className="project">
            <img
              src="https://uploads.codesandbox.io/uploads/user/e710feef-8b3e-426f-8d96-9a3bfec5832e/iBKW-primary1.png"
              alt="project"
            />
            <h2>Title</h2>
            <h8>Dates of Development</h8>
            <h6>Role</h6>
            <p>Project Desc</p>
            <h6>Tech Stack Used</h6>
            <div class="deployed_codebase">
              <a href=""><i class="fas fa-globe"></i></a>
              <a href=""><i class="fab fa-github"></i></a>
            </div>
          </div>

          <div className="project">
            <img
              src="https://uploads.codesandbox.io/uploads/user/e710feef-8b3e-426f-8d96-9a3bfec5832e/iBKW-primary1.png"
              alt="project"
            />
            <h2>Title</h2>
            <h8>Dates of Development</h8>
            <h6>Role</h6>
            <p>Project Desc</p>
            <h6>Tech Stack Used</h6>
            <div class="deployed_codebase">
              <a href=""><i class="fas fa-globe"></i></a>
              <a href=""><i class="fab fa-github"></i></a>
            </div>
          </div>

          <div className="project p">
            <img
              src="https://uploads.codesandbox.io/uploads/user/e710feef-8b3e-426f-8d96-9a3bfec5832e/iBKW-primary1.png"
              alt="project"
            />
            <h2>Title</h2>
            <h8>Dates of Development</h8>
            <h6>Role</h6>
            <p>Project Desc</p>
            <h6>Tech Stack Used</h6>
            <div class="deployed_codebase">
              <a href=""><i class="fas fa-globe"></i></a>
              <a href=""><i class="fab fa-github"></i></a>
            </div>
          </div>

          {/* <div className="project p">
            <img
              src="https://uploads.codesandbox.io/uploads/user/e710feef-8b3e-426f-8d96-9a3bfec5832e/iBKW-primary1.png"
              alt="project"
            />
            <h2>Title</h2>
            <h8>Dates of Development</h8>
            <h6>Role</h6>
            <p>Project Desc</p>
            <h6>Tech Stack Used</h6>
            <div class="deployed_codebase">
              <a href=""><i class="fas fa-globe"></i></a>
              <a href=""><i class="fab fa-github"></i></a>
            </div>
          </div>

          <div className="project p">
            <img
              src="https://uploads.codesandbox.io/uploads/user/e710feef-8b3e-426f-8d96-9a3bfec5832e/iBKW-primary1.png"
              alt="project"
            />
            <h2>Title</h2>
            <h8>Dates of Development</h8>
            <h6>Role</h6>
            <p>Project Desc</p>
            <h6>Tech Stack Used</h6>
            <div class="deployed_codebase">
              <a href=""><i class="fas fa-globe"></i></a>
              <a href=""><i class="fab fa-github"></i></a>
            </div>
          </div>

          <div className="project p">
            <img
              src="https://uploads.codesandbox.io/uploads/user/e710feef-8b3e-426f-8d96-9a3bfec5832e/iBKW-primary1.png"
              alt="project"
            />
            <h2>Title</h2>
            <h8>Dates of Development</h8>
            <h6>Role</h6>
            <p>Project Desc</p>
            <h6>Tech Stack Used</h6>
            <div class="deployed_codebase">
              <a href=""><i class="fas fa-globe"></i></a>
              <a href=""><i class="fab fa-github"></i></a>
            </div>
          </div>

          <div className="project p">
            <img
              src="https://uploads.codesandbox.io/uploads/user/e710feef-8b3e-426f-8d96-9a3bfec5832e/iBKW-primary1.png"
              alt="project"
            />
            <h2>Title</h2>
            <h8>Dates of Development</h8>
            <h6>Role</h6>
            <p>Project Desc</p>
            <h6>Tech Stack Used</h6>
            <div class="deployed_codebase">
              <a href=""><i class="fas fa-globe"></i></a>
              <a href=""><i class="fab fa-github"></i></a>
            </div>
          </div> */}
        </div>
      </div>
      
    </div>
  );
}

export default ProjectShowcase;
