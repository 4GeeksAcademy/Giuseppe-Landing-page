import React from "react";
import Navbar from "./navbar";
import Card from "./card"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>

		<div className="container">
       
			
		   <div className="jumbotron">
              <h1 className="display-4">A Warm Welcome!</h1>
               <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus risus, dignissim vel luctus non, interdum vitae turpis. Pellentesque laoreet eget nunc sit amet tincidunt. Aenean placerat id mi eget vehicula. Curabitur enim libero, venenatis et tellus non, lobortis rhoncus ante. Integer varius hendrerit orci, eget euismod sem ullamcorper non</p>
             
              <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
            </div>
			<div className="row" style={{paddingTop:"2%"}}>
				<div className="col">
					<Card title="mercedez" description="Mercedez amg gle"/>
				</div>
				<div className="col">
					<Card title="mercedez 2"description="Mercedez amg gle motor v8"/>
				</div>
				<div className="col">
					<Card title="mercedez 3"description="Mercedez amg gle motor v8 aros 23 titanium"/>
				</div>
				<div className="col">
					<Card title="mercedez 4"description="Mercedez amg gle motor v8 aros 23 titanium full extras asientos de cuero electrico"/>
				</div>
			</div>
			
		</div>
		

		
		</>
	);
};

export default Home;
