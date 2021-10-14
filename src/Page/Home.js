import Header from "../component/header/Header";
import Nav from "../component/navbar/Nav";
import fond from "../Background.png";
import Section1 from "../component/body/Section1";
import Section2 from "../component/body/Section2";
import Section3 from "../component/body/Section3";
import "../component/body/body.css";
import Section4 from "../component/body/Section4";
import Section5 from "../component/body/Section5";
import Section6 from "../component/body/Section6";
import Section7 from "../component/body/Section7";
import Section8 from "../component/body/Section8";
import Footer from "../component/footer/Footer";
function Home() {
	return (
		<div className='App'>
			<div
				className='headhead'
				style={{
					backgroundImage: `url(${fond})`,
					// height: "43rem",
					backgrounPosition: "center",
					backgroundPosition: "0px -160px",
				}}
			>
				<div id='Home'>
					<Nav />

					<Header />
				</div>
			</div>
			<div className='pt-5'>
				<div>
					<Section1 />
				</div>
				<div id='Work'>
					<Section2 />
				</div>
				<div id='About'>
					<Section3 />
				</div>
				<div id='Schedule'>
					<Section4 />
				</div>
				<div>
					<Section5 />
				</div>
				<div id='Reviews' className='mt-5'>
					<Section6 />
				</div>
				<div className='mt-5'>
					<Section7 />
				</div>
				<div id='Blog' className='mt-5'>
					<Section8 />
				</div>
				<div className='mt-5'>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default Home;
