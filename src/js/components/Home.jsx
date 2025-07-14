import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			
			<div className="row text-center">
				<Card
					image="https://images.unsplash.com/photo-1506765515384-028b60a970df?w=500"
					title="En frente del mar"
					text="El mejor sitio para pensar sin lugar a duda será en el mar, las más sabias y objetivas decisiones"
				/>
				<Card
					image="https://images.unsplash.com/photo-1494526585095-c41746248156?w=500"
					title="Home just Home"
					text="Una casa materializa nuestras metas y crea un entorno de descanso y comodidad"
				/>
				<Card
					image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500"
					title="¿Un viaje?"
					text="Un viaje: un escape, un sueño y una aventura. Hazlo realidad, sean cuales sean tus planes."
				/>
				<Card
					image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500"	
					title="... Y el trabajo"
					text="El trabajo duro da como resultado las tres anteriores cartas. Depende de ti cómo las quieras crear."
				/>
			</div>

			<Footer />
		</div>
	);
};

export default Home;
