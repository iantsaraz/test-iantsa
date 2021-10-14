import "./body.css";
import img from "../../Image(3).png";
import {
	BsTelephoneOutbound,
	BsArrowReturnRight,
	BsCalendarDate,
} from "react-icons/bs";

import { BiTimeFive } from "react-icons/bi";

import { FiLink2 } from "react-icons/fi";

import { ImLocation } from "react-icons/im";

function Section4() {
	return (
		<div className=' conte mt-5   '>
			<div className='desc2 '>
				<h1 className='about'>SCHEDULE</h1>
				<h1 className='name mt-2 '>
					let's See <strong>my schedule</strong>{" "}
				</h1>
				<h1 className=' actually '>
					<strong>
						time! When i <span className='patient'>Free.</span>
					</strong>
				</h1>

				<p className='d-flex align-items-center'>
					<BsArrowReturnRight
						style={{
							marginRight: 5,
							width: 20,
							height: 20,
							color: "#0bccc5",
						}}
					/>
					<span className='text'>
						Blandit feugiat viverra est tortor commodo, tellus Neque.{" "}
					</span>
				</p>
				<p className='' style={{ width: "90%" }}>
					Diam, id felis viverra diam. Molestie sollicitudin semper ornare dolor
					augue auctor eget nisl.Lorem ipsum dolor sit.
				</p>
				<h1 className='about'>Medical check-up reviews:</h1>
				<div className='row'>
					<div className='mt-4 mb-4  col-6'>
						<h1 className='piece  fs-6'>
							<FiLink2
								style={{
									marginRight: 5,
									width: 20,
									height: 20,
									color: "#fcf93e",
								}}
							/>{" "}
							Heartbeat Rate
						</h1>
						<h1 className='piece  fs-6'>
							<FiLink2
								style={{
									marginRight: 5,
									width: 20,
									height: 20,
									color: "#fcf93e",
								}}
							/>{" "}
							Heartbeat Rate
						</h1>
					</div>
					<div className='mt-4 mb-4 col-6 '>
						<h1 className='piece  fs-6'>
							<FiLink2
								style={{
									marginRight: 5,
									width: 20,
									height: 20,
									color: "#fcf93e",
								}}
							/>{" "}
							Heartbeat Rate
						</h1>
						<h1 className='piece  fs-6'>
							<FiLink2
								style={{
									marginRight: 5,
									width: 20,
									height: 20,
									color: "#fcf93e",
								}}
							/>{" "}
							Heartbeat Rate
						</h1>
					</div>
				</div>
			</div>
			<div className='bloc2'>
				<img src={img} className='dr' />
				<div className='shadow img3 '>
					<div className='mt-3 px-3 '>
						<h1
							className='text-center fs-6 overflow-hidden'
							style={{ color: "#fcf93e" }}
						>
							Get an appointment
						</h1>
					</div>
					<div className='formulaire mt-4'>
						<div>
							<h1 className='form overflow-hidden'>
								<BsCalendarDate
									style={{
										marginRight: 5,
										width: 15,
										height: 15,
									}}
								/>{" "}
								Date
							</h1>
							<h1 className='val overflow-hidden  text-center'>25 Aug :</h1>
						</div>
						<div>
							<h1 className='form overflow-hidden'>
								<BiTimeFive
									style={{
										marginRight: 5,
										width: 15,
										height: 15,
									}}
								/>{" "}
								Time
							</h1>
							<h1 className='val overflow-hidden  text-center'>11:30 PM :</h1>
						</div>
						<div>
							<h1 className='form overflow-hidden'>
								<ImLocation
									style={{
										marginRight: 5,
										width: 15,
										height: 15,
									}}
								/>{" "}
								Location
							</h1>
							<h1 className='val overflow-hidden  text-center'>Sen Road :</h1>
						</div>
					</div>
					<div className='d-flex justify-content-center my-3'>
						<button className='get mb-3 px-5 mx-3'>Select</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Section4;
