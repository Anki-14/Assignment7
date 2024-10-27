import React from 'react';

const ServiceDetails = ({ service }) => {
  return (
    <div>
  {/*    <h2>{service}</h2>
      <p>Details about our {service} services.</p>
   */}
    
      {service === "Courses" && (
        <div className="courses-container">
          <h1>Trending Courses of 2024</h1>

	  <div className="course-container">
             <div className="course-card">
                <div className="image">
                  <img src="https://www.innomatics.in/wp-content/uploads/2023/01/No-1-best-data-science-course-training-institute-in-hyderabad.jpg"></img>
                </div>

                <div className="label">
		  <h2>NASSCOM Futureskills Prime Certified Data Science</h2>
                </div>

                <div className="content">
		  <p>This is a great choice for tech geeks, students, working professionals and aspiring data scientists who want to upskill and build a better foundation is the stream of Data Science.</p>
               </div>
               
                <button>Read More</button>
            </div>


            <div className="course-card">
                <div className="image">
                  <img src="https://www.innomatics.in/wp-content/uploads/2023/01/Full-Stack-Web-Development-training-program-Innomatics-research-labs-india.png"></img>
                </div>

                <div className="label">
                  <h2>Full Stack Development</h2>
                </div>

                <div className="content">
                  <p>Learn the right skills to break into a development career & advance yourself as a full-stack Developer. It includes Frontend, Backend, databases, debugging & testing.</p>
               </div>

                <button>Read More</button>
            </div>


            <div className="course-card">
                <div className="image">
                  <img src="https://www.innomatics.in/wp-content/uploads/2023/01/digital-marketing-course-training-hyderabad.jpg"></img>
                </div>

                <div className="label">
                  <h2>Digital Marketing</h2>
                </div>

                <div className="content">
                  <p>Digital Marketing Course at Innomatics is perfect for Entrepreneurs, Freelancers, Job seekers, Wanna be Entrepreneurs, working professionals who want to enhance their skill.</p>
               </div>

                <button>Read More</button>
            </div>

    
            <div className="course-card">
                <div className="image">
                  <img src="https://www.innomatics.in/wp-content/uploads/2023/01/big-data-analytics-with-hadoop-training-in-hyderabad-india.jpg"></img>
                </div>

                <div className="label">
                  <h2>NASSCOM Futureskills Prime Certified Predictive Analytics</h2>
                </div>

                <div className="content">
                  <p>Predictive Analytics Modeler is to gain knowledge in analytics models to collect, data mining, data collection, data visualization, and integration, nodes, and statistical analysis.</p>
               </div>

                <button>Read More</button>
            </div>



           <div className="course-card">
                <div className="image">
                  <img src="https://www.innomatics.in/wp-content/uploads/2023/01/AWS-training-institute-Innomatics-research-labs-Kukatpallihyderabad.jpg"></img>
                </div>

                <div className="label">
                  <h2>Amazon Web Services</h2>
                </div>

                <div className="content">
                  <p>Right from the jobseeker or existing professional who wants to accelerate their career with advanced concepts of cloud computing, AWS and core services.</p>
               </div>

                <button>Read More</button>
            </div>

           <div className="course-card">
                <div className="image">
                  <img src="https://www.innomatics.in/wp-content/uploads/2023/01/Devops-institute-Innomatics-research-labs-KukatpallyHyderabad.jpg"></img>
                </div>

                <div className="label">
                  <h2>Devops</h2>
                </div>

                <div className="content">
                  <p>This is a must-learn course for the individuals who started her journey in the DevOps and cloud world and is ideally suited to developers, Cloud Admin, Solutions Architects and managers.</p>
               </div>

                <button>Read More</button>
            </div>


          </div>

        </div>       
      )}










      
      {service === "Placements" && (
        <div className="placement-container">

          <h1>Placements at Innomatics</h1>

	  <div className="placements">
             <div className="placement-card">
		<div className="image-frame">
		   <img src="https://www.innomatics.in/wp-content/uploads/2024/01/Yeruva_Vamsidhar_Reddy.jpg"></img>		  
		</div>
             </div>
             
   	     <div className="placement-card">
                <div className="image-frame">
                   <img src="https://www.innomatics.in/wp-content/uploads/2024/01/yeluru_poojitha_.jpg"></img>
                </div>
             </div>

	     <div className="placement-card">
                <div className="image-frame">
                   <img src="https://www.innomatics.in/wp-content/uploads/2024/01/yaswanth.jpg"></img>
                </div>
             </div>

	     <div className="placement-card">
                <div className="image-frame">
                   <img src="https://www.innomatics.in/wp-content/uploads/2024/01/Yadagiri-Praveen-kumar-placement-flyer.png"></img>
                </div>
             </div>

	     <div className="placement-card">
                <div className="image-frame">
                   <img src="https://www.innomatics.in/wp-content/uploads/2024/01/WhatsApp_Image_2023-11-08_at_10.27.50_AM_1.jpeg"></img>
                </div>
             </div>

             <div className="placement-card">
                <div className="image-frame">
                   <img src="https://www.innomatics.in/wp-content/uploads/2024/01/Vyshnavi_Chidire_-_HBIC.jpg"></img>
                </div>
             </div>

             <div className="placement-card">
                <div className="image-frame">
                   <img src="https://www.innomatics.in/wp-content/uploads/2024/01/VINAY.jpg"></img>
                </div>
             </div>

             <div className="placement-card">
                <div className="image-frame">
                   <img src="https://www.innomatics.in/wp-content/uploads/2024/01/VENKATESH-MAMIDALA-FLYER-1-scaled.jpg"></img>
                </div>
             </div>

          </div>
	

      



        </div> 
      )}




      
    </div>
  );
};

export default ServiceDetails;
