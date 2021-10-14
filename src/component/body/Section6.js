import img from "../../fond2.png";
import shape from "../../Shape.png";
import profile from "../../profile.png";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
function Section6() {
	return (
		<div
			className='form-quote mt-5 row d-flex align-items-center justify-content-arround'
			style={{
				backgroundImage: `url(${img})`,
				// height: "510px",

				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div
				className=' profile '
				style={{
					backgroundImage: `url(${shape})`,
					height: "300px",
					width: "500px",
					backgroundSize: "contain",
					backgroundRepeat: "no-repeat",
				}}
			>
				<img src={profile} />
			</div>
			<div className='quote-cont col-4'>
				<h1 className='overflow-hidden quote'>
					<ImQuotesLeft
						style={{ width: 30, height: 30, color: "gray", marginRight: 20 }}
					/>
					Blandit feugiat viverra est tortor commodo, tellus. pellentesque diam,
					id felis viverra diam. Molestie solli semper ornare dolor augue aucto.
					<ImQuotesRight
						style={{ width: 30, height: 30, color: "gray", marginLeft: 0 }}
					/>
				</h1>
				<h1 className='overflow-hidden quote2 my-4'>Justin Lubin</h1>
				<h1 className='overflow-hidden quote3'>Patient</h1>
			</div>
		</div>
	);
}

export default Section6;
