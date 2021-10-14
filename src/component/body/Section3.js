import "./body.css";
import img from "../../Care.svg";
import { BsTelephoneOutbound } from "react-icons/bs";
import ReactStars from "react-stars";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
function Section3() {
	return (
		<div className=' cont mt-5 ml-5  justify-content-center'>
			<div className='bloc'>
				<img src={img} className='drr' />
				<div className='shadow img2 row'>
					<div className='mt-3 px-3 descri' style={{ width: "49%" }}>
						<h1 className='name1'>Dr. Kierra Calzoni</h1>
						<p className='p2'>
							Lorem ipsum dolor sit amet conct adipiscing elit. Sed tpus donec
							ultricies molestie vel.
						</p>
						<div className=''>
							<p className='p2 d-flex align-items-center'>
								<BsTelephoneOutbound
									style={{
										marginRight: 5,
										width: 20,
										height: 20,
										color: "#0bccc5",
									}}
								/>
								+88 01924 184 461
							</p>
						</div>
					</div>
					<div className='mt-3 rate' style={{ width: "51%" }}>
						<h1 className='rating d-flex align-items-center mb-3'>
							Rating:{" "}
							<ReactStars
								count={5}
								size={20}
								value={3}
								color2={"#fcf93e"}
								edit='false'
							/>
						</h1>
						<div className='mx-3 mb-4' style={{ width: 100, height: 100 }}>
							<CircularProgressbarWithChildren value={80}>
								{/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}

								<div
									className='text-center mt-3'
									style={{ fontSize: 12, marginTop: -5 }}
								>
									<strong>66%</strong>
									<p>
										<strong>Good</strong>
									</p>
								</div>
							</CircularProgressbarWithChildren>
						</div>
					</div>
				</div>
			</div>
			<div className='desc '>
				<h1 className='about'>ABOUT ME</h1>
				<h1 className='name mt-2 '>I'm Dr. Kierra Calzoni.</h1>
				<h1 className=' actually '>
					<strong>Actually, I love to care</strong>
				</h1>
				<h1 className='patient  mb-4'>
					<strong>Patient.</strong>
				</h1>
				<p className=''>
					<span className='text'>Lorem ipsum dolor sit amet </span>, consectetur
					adipiscing elit. Tempor proin id aliquet lacinia vulputate non.
					Rhoncus,
				</p>
				<p className=''>
					Blandit feugiat viverra est{" "}
					<span className='text'>Suspendisse porta </span> tortor commodo.
				</p>
				<p className=''>
					<span className='text'>Tempor proin </span> id aliquet lacinia
					vulputate non. Rhoncus, blandit feugiat viverra est suspendisse porta
					tortor commodo, tellus. Neque.{" "}
				</p>
				<div className='mt-4 mb-4 button '>
					<button className='get mb-3'>Let's talkt</button>
				</div>
			</div>
		</div>
	);
}

export default Section3;
