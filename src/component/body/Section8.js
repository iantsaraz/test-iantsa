import "./body.css";
import img from "../../covid.png";
import doctor from "../../doctor.png";
import avatar from "../../avatar.png";
import blood from "../../blood.png";
import sick from "../../sick.png";
import smile from "../../smile.png";
import baby from "../../sick.png";
import { BsCalendarDate } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

function Section8() {
	return (
		<div className=' cont-vid mt-5 ml-5  justify-content-center'>
			<div className='co'>
				<img src={img} className='vid' />
				<div className=' row '>
					<div className='col-6 mt-5'>
						<h1 className='covidname d-flex align-items-center'>
							{" "}
							<img
								src={avatar}
								style={{ width: 20, height: 20, marginRight: 10 }}
							/>
							Dr. Kierra Calzoni
						</h1>
					</div>
					<div className='col-6 mt-5'>
						<h1 className='covidname d-flex align-items-center'>
							{" "}
							<BsCalendarDate
								style={{
									marginRight: 5,
									width: 15,
									height: 15,
								}}
							/>{" "}
							21/072021
						</h1>
					</div>
				</div>
				<h1 className='mt-3 fs-3 overflow-hidden' style={{ width: "90%" }}>
					Join me and respectfully fight COVID misinformation.
				</h1>
				<p className='mt-5'>
					Blandit feugiat viverra est tortor commodo, tellus. Neque,
					pellentesque diam, id felis viverra diam. Molestie sollicitudin semper
					ornare dolor augue auctor eget nisl.Lorem ipsum dolor sit amet.
				</p>
				<p>
					Blandit feugiat viverra est tortor commodo, tellus. Neque,
					pellentesque diam, id felis viverra diam. Molestie sollicitudin semper
					ornare dolor augue auctor eget nisl.Lorem ipsum dolor sit amet,
					consectetur adipiscing elit.{" "}
				</p>
			</div>
			<div className='descp '>
				<div className=' row '>
					<div className='col-6 '>
						<h1 className='covidname d-flex align-items-center overflow-hidden'>
							{" "}
							Latest news:
						</h1>
					</div>
					<div className='col-6 '>
						<h1 className='covidname d-flex align-items-center overflow-hidden'>
							{" "}
							View all
							<AiOutlineArrowRight
								style={{
									width: 15,
									height: 15,
								}}
								className='mx-2'
							/>{" "}
						</h1>
					</div>
				</div>
				<div className='row mt-5'>
					<div className='sary'>
						<img src={doctor} />
					</div>
					<div className='soratra'>
						<h1 className='fs-5  overflow-hidden'> I’m called anti-science</h1>
						<h1 className='fs-5  overflow-hidden'> I’m just an early...</h1>
						<h1 className='covidname text-danger mt-5 d-flex align-items-center overflow-hidden'>
							{" "}
							View all
							<AiOutlineArrowRight
								style={{
									width: 15,
									height: 15,
								}}
								className='mx-2'
							/>{" "}
						</h1>
					</div>
				</div>
				<div className='row mt-3' style={{ width: "100%" }}>
					<div className='sary'>
						<img src={blood} />
					</div>
					<div className='soratra'>
						<h1 className='fs-5  overflow-hidden'> I’m called anti-science</h1>
						<h1 className='fs-5  overflow-hidden'> I’m just an early...</h1>
						<h1 className='covidname text-danger mt-5 d-flex align-items-center overflow-hidden'>
							{" "}
							View all
							<AiOutlineArrowRight
								style={{
									width: 15,
									height: 15,
								}}
								className='mx-2'
							/>{" "}
						</h1>
					</div>
				</div>
				<div className='row mt-3' style={{ width: "100%" }}>
					<div className='sary'>
						<img src={sick} />
					</div>
					<div className='soratra'>
						<h1 className='fs-5  overflow-hidden'> I’m called anti-science</h1>
						<h1 className='fs-5  overflow-hidden'> I’m just an early...</h1>
						<h1 className='covidname text-danger mt-5 d-flex align-items-center overflow-hidden'>
							{" "}
							View all
							<AiOutlineArrowRight
								style={{
									width: 15,
									height: 15,
								}}
								className='mx-2'
							/>{" "}
						</h1>
					</div>
				</div>
				<h1 className='covidname mt-3 d-flex align-items-center overflow-hidden'>
					{" "}
					Coming soon:
				</h1>
				<div className='row mt-3' style={{ width: "100%" }}>
					<div className='col-4'>
						<img src={smile} />
					</div>
					<div className='col-4'>
						<img src={baby} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Section8;
