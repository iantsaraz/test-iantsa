import logo from "../../logofooter.png";
import footer from "../../footer.png";
import { BsTelephoneOutbound } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import "./nav.css";
import { height } from "@mui/system";
function Footer() {
	return (
		<div
			className='foot d-flex align-items-center '
			style={{
				backgroundImage: `url(${footer})`,
				height: "447px",
				backgrounPosition: "center",
				backgroundPosition: "0px -160px",
			}}
		>
			<div className='d-flex justify-content-around' style={{ width: "100%" }}>
				<div>
					<img src={logo} className='logo text-white' alt='logo' />
					<h1 className='text-white fs-6 fw-light mt-3 overflow-hidden'>
						10 New Town Street, V2 5NW,
					</h1>
					<h1 className='text-white fs-6 fw-light overflow-hidden'>
						Newstate, USA.
					</h1>
					<p className='p2 mt-4 d-flex text-white  align-items-center'>
						<BsTelephoneOutbound
							style={{
								marginRight: 5,
								width: 20,
								height: 20,
								color: "white",
							}}
						/>
						+88 01924 184 461
					</p>
					<p className='p2 mt-4 d-flex text-white  align-items-center'>
						<AiOutlineMail
							style={{
								marginRight: 5,
								width: 20,
								height: 20,
								color: "white",
							}}
						/>
						shovasatkhira@gmail.com
					</p>
					<div className='d-flex jystify-content'>
						<div
							className=' border rounded-circle border-white d-flex justify-content-center align-items-center'
							style={{ width: 35, height: 35 }}
						>
							<FiTwitter
								style={{
									marginRight: 5,
									width: 20,
									height: 20,
									color: "white",
								}}
							/>
						</div>
						<div
							className=' border rounded-circle border-white d-flex justify-content-center align-items-center mx-3'
							style={{ width: 35, height: 35 }}
						>
							<FiFacebook
								style={{
									marginRight: 5,
									width: 20,
									height: 20,
									color: "white",
								}}
							/>
						</div>
						<div
							className=' border rounded-circle border-white d-flex justify-content-center align-items-center'
							style={{ width: 35, height: 35 }}
						>
							<FiInstagram
								style={{
									marginRight: 5,
									width: 20,
									height: 20,
									color: "white",
								}}
							/>
						</div>
						<div
							className=' border rounded-circle border-white d-flex justify-content-center align-items-center mx-3'
							style={{ width: 35, height: 35 }}
						>
							<FiLinkedin
								style={{
									marginRight: 5,
									width: 20,
									height: 20,
									color: "white",
								}}
							/>
						</div>
					</div>
				</div>
				<div>
					<h1 className='text-white fs-4'>Menu</h1>
					<p className='text-white'>Work</p>
					<p className='text-white'>About</p>
					<p className='text-white'>Schedule</p>
					<p className='text-white'>Blog</p>
				</div>
				<div>
					<h1 className='text-white fs-4'>Useful link</h1>
					<p className='text-white'>Privecy Policy</p>
					<p className='text-white'>Cookie Policy</p>
					<p className='text-white'>Purchasing</p>
					<p className='text-white'>Terms</p>
				</div>
				<div>
					<h1 className='text-white fs-4 overflow-hidden'>Contact</h1>
					<p className='text-white'>Blandit feugiat viverra est tortor </p>
					<p className='text-white' style={{ width: 310 }}>
						commodo, tellus. Neque, pellentesque diam, id felis viverra diam.
						Molestie sollicitudin semper ornare dolor augue{" "}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
