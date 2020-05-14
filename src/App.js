import React from 'react';
import Carousel from './components/Carousel';
import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <div className="Header-content"> */}
      <img src="images/uofu_h.png"></img>
     <div>
      <p><a href="https://nrotc.utah.edu/" className="astyle"> DEPARTMENT OF NAVAL SCIENCE </a> <div className="headDiv"></div></p>
      <p><a href="https://csbs.utah.edu/"className="bstyle">   COLLEGE OF SOCIAL & BEHAVIORAL SCIENCE</a></p>
      </div>
      {/* </div> */}
      Menu =
      </header>
      <Carousel ></Carousel>
      <body className="body">
      <section className="sectionOne">  
      <img src="images/rotc.png"></img>  
      <p className="p1">NAVAL RESERVE OFFICER TRAINING CORPS  <br></br> UNIVERSITY OF UTAH</p>
       
      </section>
      <hr class="divider"></hr>

      <section className="sectionTwo">
      <hr></hr>
      <p className="p2"> The Naval Reserve Officer Training Corps (NROTC) at the University of Utah exists to educate and commission college graduates for service as Navy and Marine Corps Officers.  Students enrolled in the program lead normal college student lives, but participate in additional classes and activites that will prepare them to lead as officers in the Navy and Marine Corps.  Upon successul completion of the program, NROTC students will become either Navy Ensigns or Marine Corps Second Lieutenants and go on to serve in one of the many exciting career fields within the United States Navy or United States Marine Corps. </p> <br></br>
      <p className="p2"> The NROTC program at the University of Utah is open to any enrolled student who meets service eligibility REQUIREMENTS.  There are several avenues that can lead you along the path to becoming an Officer in the Navy or Marine Corps.  A nationally awarded NROTC Scholarship is not required to participate, although affiliated NROTC College Program students will have numerous opportunities to compete for financial benefits to include full tuition, book stipends, and a $250 subsistence allowance.</p> <br></br>
      <p className="p2">For more information regarding these opportunities and how to apply, please review the links provided below for your convenience: </p> <br></br>
      </section>
      <div className="options">
      <div className="boxSelect">
      <img src="/images/rotc_big2.jpg" className="imgframe"></img>
      <Button variant="outline-danger">I HAVE ALREADY BEEN AWARDED OR INTEND TO PURSUE A NATIONAL NROTC SCHOLARSHIP AND AM INTERESTED IN THE UNIVERSITY OF UTAH</Button>
      </div>
      <div className="boxSelect">
      <img src="/images/rotc_big4.jpg"  className="imgframe"></img>
      <Button variant="outline-danger">
        
        <p classname="p2">I HAVE NOT BEEN AWARDED A NATIONAL NROTIC SCHOLARSHIP, BUT I AM INTERESTED IN PARTICIPATING AS A COLLEGE PROGRAM STUDENT</p>
        
        
        </Button>
      </div>


      </div>


      </body>
      
    </div>
  );
}

export default App;
