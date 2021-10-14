import img from "../../Image.png";
import "./header.css";
function Header() {
	return (
		<div className=' head '>
			<div className=' index'>
				<h1 className='stay'>STAY STRONG, LIVE LONG.</h1>
				<h1 className='of mt-2 mb-4'>
					<span>Take care</span> &nbsp; of your body and it will take care of{" "}
					<span>you</span>.
				</h1>
				<p className=''>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. blandit
					feugiat viverra est suspendisse porta tortor commodo, tellus. Neque,
				</p>
				<div className='mt-4 mb-4 button '>
					<button className='get mb-3'>Get appointment</button>
					<button className='view'>View profile</button>
				</div>
			</div>
			<div
				className='image'
				style={{
					backgroundImage: `url(${img})`,
					height: "45rem",
					backgroundPosition: "-30px -80px",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			></div>
		</div>
	);
}

export default Header;
