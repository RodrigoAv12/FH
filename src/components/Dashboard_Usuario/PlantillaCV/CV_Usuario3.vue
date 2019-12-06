<template>
  <div>
    <!-- Header-->
    <header>
      <h1>Your Name</h1>
      <p>Job Title or Skill Set</p>
    </header>

    <div class="container">
      <!-- Introduction-->
      <section class="center">
        <h1>Welcome!</h1>
        <p>
          This is a good place to introduce yourself. What do you love to do?
          Where are you from? What is your current job? This also might be a
          good place to link to your resume, email, or portfolio as well.
        </p>
      </section>

      <hr />

      <!-- Testimonials-->
      <section class="testimonial">
        <div class="row">
          <div class="grid-2">
            <img
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            />
            <h2>Their Name</h2>
            <p>
              You can use this as a place to put recommendations, accolades and
              testimonials
            </p>
          </div>

          <div class="grid-2">
            <img
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            />
            <h2>Their Name</h2>
            <p>
              You can use this as a place to put recommendations, accolades and
              testimonials
            </p>
          </div>

          <div class="grid-2">
            <img
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            />
            <h2>Their Name</h2>
            <p>
              You can use this as a place to put recommendations, accolades and
              testimonials
            </p>
          </div>
        </div>
      </section>
    </div>
    <!-- End container-->

    <!-- Spotlight -->
    <section class="spotlight">
      <div class="container">
        <div class="row">
          <div class="grid-3">
            <img
              src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            />
          </div>
          <div class="grid-3">
            <h1>Project Spotlight</h1>
            <p>
              Give a brief description of what this project is and what role you
              played. It can also be helpful to include a link
            </p>
            <a href="#">View Project</a>
          </div>
        </div>
      </div>
    </section>

    <!-- New container-->
    <div class="container">
      <section class="education">
        <h2>
          B.S. Information Systems and Operations Management from the University
          of Maryland.
        </h2>
      </section>

      <hr />

      <!--Experience Tables-->
      <section class="experience">
        <div class="row">
          <div class="grid-2">
            <h2>Company Name</h2>
            <p>Nov. 2013 - Dec. 2014</p>
          </div>
          <div class="grid-4">
            <ul>
              <li>
                This is a place to give highlights of your work and
                responsibilities
              </li>
              <li>
                This is a place to give highlights of your work and
                responsibilities
              </li>
              <li>
                This is a place to give highlights of your work and
                responsibilities. This is an example of a longer block with more
                text.
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="grid-2">
            <h2>Company Name</h2>
            <p>Sept. 2012 - Nov. 2013</p>
          </div>
          <div class="grid-4">
            <ul>
              <li>
                This is a place to give highlights of your work and
                responsibilities
              </li>
              <li>
                This is a place to give highlights of your work and
                responsibilities
              </li>
              <li>
                This is a place to give highlights of your work and
                responsibilities. This is an example of a longer block with more
                text.
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="grid-2">
            <h2>Company Name</h2>
            <p>Aug. 2011 - Sept. 2012</p>
          </div>
          <div class="grid-4">
            <ul>
              <li>
                This is a place to give highlights of your work and
                responsibilities
              </li>
              <li>
                This is a place to give highlights of your work and
                responsibilities
              </li>
              <li>
                This is a place to give highlights of your work and
                responsibilities. This is an example of a longer block with more
                text.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr />

      <section>
        <!--List of skills-->
        <div class="row">
          <div class="grid-2">
            <h1>Skills</h1>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Angular.js</li>
              <li>Photoshop</li>
              <li>Git</li>
            </ul>
          </div>

          <div class="grid-4">
            <h1>In Conclusion</h1>
            <p>
              This is a good spot to highlight experiance and skills. Make sure
              to include a call to action like a link to your website, or your
              email address. If you find bugs, want features, or have questions,
              feel free to submit an <a href="">issue</a>. You are free to use
              without attribution. If you're ok sharing, I would love seeing
              what you make! Shoot me an <a href="" target="_top">email</a> or
              <a href="">tweet</a> at me.
            </p>
          </div>
        </div>
      </section>

      <!--Footer-->
      <footer class="center">
        <hr />
        <span>&copy; Your Name 2014</span>
      </footer>
    </div>
    <!-- End Container -->
  </div>
</template>

<style>
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font: 100% sans-serif;
  margin: 0em;
  background-color: #fff;
  color: #666;
}

h1,
h2,
h3 {
  font-family: "Lato", sans-serif;
  font-weight: 300;
}

a {
  color: #3d6dbe;
  text-decoration: none;
}

a:focus,
a:hover {
  color: #6594e0;
}

p {
  font-size: 1em;
  line-height: 1.8;
  margin-top: 0em;
}

img {
  max-width: 100%;
}

hr {
  border-top: 1px solid #ccc;
  border-bottom: none;
  margin-top: 3em;
  margin-bottom: 2em;
}

header {
  background-color: #999;

  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin-bottom: 4em;
  text-align: center;
  height: 500px;
}

header h1 {
  color: white;
  font-size: 2em;
  margin: 0;
  letter-spacing: 1px;
  opacity: 1;
  text-shadow: 0 3px 0 rgba(0, 0, 0, 0.5);
  position: relative;
  top: 370px;
  font-weight: 700;
}

header p {
  color: #fff;
  font-size: 1.1em;
  padding-bottom: 1.3em;
  padding-top: 0.5em;
  opacity: 0.9;
  position: relative;
  top: 360px;
}

section h1 {
  font-size: 1.8em;
  line-height: 1em;
  margin-bottom: 0.6em;
}

/* Same font-size and line-height as p element */
section ul li,
section ol li {
  font-size: 1em;
  margin-left: -10px;
  line-height: 1.8;
}

footer {
  margin-bottom: 1em;
  color: #888;
}

footer hr {
  margin-top: 2em;
  margin-bottom: 1em;
}

.center {
  text-align: center;
}

@media screen and (min-width: 50em) {
  header {
    height: 700px;
  }

  header h1 {
    font-size: 3.2em;
    top: 540px;
  }

  header p {
    top: 530px;
    font-size: 1.5em;
  }
}

/* ------------------- Grid -------------------*/

.container {
  max-width: 50em;
  width: 92%;
  margin-right: auto;
  margin-left: auto;
}

.row {
  clear: both;
  margin-right: -1%;
  margin-left: -1%;
}

.row:before,
.row:after {
  content: " "; /* 1 */
  display: table; /* 2 */
}

.row:after {
  clear: both;
}

/**
 * For IE 6/7 only
 */
.row {
  *zoom: 1;
}

.grid-1,
.grid-2,
.grid-3,
.grid-4,
.grid-5,
.grid-6 {
  float: left;
  width: 100%;
  padding: 0 1%;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (min-width: 40em) {
  .grid-1 {
    width: 16.6666666%;
  }
  .grid-2 {
    width: 33.3333333%;
  }
  .grid-3 {
    width: 50%;
  }
  .grid-4 {
    width: 66.6666666%;
  }
  .grid-5 {
    width: 83.3333333%;
  }
  .grid-6 {
    width: 100%;
  }
}

/* -------------------Custom Blocks----------------- */

/* Gallery */

.gallery [class*="grid-2"],
.gallery [class*="grid-3"] {
  margin-bottom: 1%;
  margin-top: 1%;
  width: 50%;
}

.gallery a img {
  /* Fix chrome pixel shift */
  transition: opacity 0.2s ease;
  opacity: 1;
}

.gallery a img:hover {
  opacity: 0.8;
}

@media screen and (min-width: 40em) {
  .gallery .grid-2 {
    width: 33.3333333%;
  }
}

/* Experience */
.experience [class*="row"] {
  border-bottom: dotted 1px #ccc;
  padding-top: 1em;
  padding-bottom: 1em;
}

.experience h2 {
  margin-bottom: 0;
}

.experience h2,
.experience p {
  text-align: center;
}

.experience [class*="row"]:last-of-type {
  border: none;
}

@media screen and (min-width: 40em) {
  .experience h2,
  .experience p {
    text-align: left;
  }
}

/* Education Block */
.education {
  font-family: "Lato", sans-serif;
  line-height: 1.5;
  margin-bottom: 0;
  text-align: center;
  margin: 0 auto;
}

@media screen and (min-width: 40em) {
  .education {
    width: 70%;
  }
}

/* Testimonials */
.testimonial {
  text-align: center;
  margin-bottom: 30px;
}

.testimonial img {
  height: 4em;
  border-radius: 3px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top: 40px;
}

.testimonial p {
  font-style: italic;
  color: #888;
  margin-top: -15px;
}

/* Spotlight */
.spotlight {
  background-color: #f3e2d8;
  padding: 3em 1em;
  margin-top: 3em;
  margin-bottom: 3em;
  text-align: center;
}

.spotlight img {
  width: 60%;
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.spotlight h1 {
  color: #e4382c;
}

.spotlight p {
  color: #6d5e53;
  font-size: 1.1em;
}

.spotlight a {
  background-color: transparent;
  border: 3px solid #e4382c;
  padding: 7px 35px;
  border-radius: 3px;
  color: #e4382c;
  font-size: 1.1em;
  opacity: 0.8;
  margin-bottom: 10px;
}

.spotlight a:hover {
  opacity: 1;
  cursor: pointer;
}

@media screen and (min-width: 40em) {
  .spotlight {
    padding: 6em;
    text-align: left;
  }

  .spotlight h1,
  .spotlight p {
    text-align: left;
  }
}
</style>
