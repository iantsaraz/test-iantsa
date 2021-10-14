import "./body.css";
import icone from "../../Icon.svg";
import icone1 from "../../Icon (1).svg";
import icone2 from "../../Icon (2).svg";
import icone3 from "../../Icon (3).svg";
function Section2() {
	return (
		<div className='mt-5 cards row'>
			<div
				class='card mb-4'
				style={{ width: "13rem", backgroundColor: "rgba(242, 90, 60 ,0.09)" }}
			>
				<div className='d-flex justify-content-center'>
					<div
						className='rounded-circle d-flex justify-content-center align-items-center my-4'
						style={{ backgroundColor: "#F25A3C", width: 120, height: 120 }}
					>
						<img src={icone} alt='icone' style={{ width: 80, height: 80 }} />
					</div>
				</div>
				<div class='card-body'>
					<h5 class='card-title text-center'>Patient safety</h5>
					<p class='card-text text-center '>
						feugiat viverra est suspendis porta tortor commodo
					</p>
				</div>
			</div>
			<div
				class='card mb-4'
				style={{ width: "13rem", backgroundColor: "rgba(204, 121, 38 ,0.09)" }}
			>
				<div className='d-flex justify-content-center'>
					<div
						className='rounded-circle d-flex justify-content-center align-items-center my-4'
						style={{ backgroundColor: "#CC7926", width: 120, height: 120 }}
					>
						<img src={icone1} alt='icone' style={{ width: 80, height: 80 }} />
					</div>
				</div>
				<div class='card-body'>
					<h5 class='card-title text-center'>Patient safety</h5>
					<p class='card-text text-center '>
						feugiat viverra est suspendis porta tortor commodo
					</p>
				</div>
			</div>
			<div
				class='card mb-4'
				style={{ width: "13rem", backgroundColor: "rgba(115, 157, 30 ,0.09)" }}
			>
				<div className='d-flex justify-content-center'>
					<div
						className='rounded-circle d-flex justify-content-center align-items-center my-4'
						style={{ backgroundColor: "#739D1E", width: 120, height: 120 }}
					>
						<img src={icone2} alt='icone' style={{ width: 80, height: 80 }} />
					</div>
				</div>
				<div class='card-body'>
					<h5 class='card-title text-center'>Patient safety</h5>
					<p class='card-text text-center '>
						feugiat viverra est suspendis porta tortor commodo
					</p>
				</div>
			</div>
			<div
				class='card mb-4'
				style={{ width: "13rem", backgroundColor: "rgba(32, 187, 161 ,0.09)" }}
			>
				<div className='d-flex justify-content-center'>
					<div
						className='rounded-circle d-flex justify-content-center align-items-center my-4'
						style={{ backgroundColor: "#20BBA1", width: 120, height: 120 }}
					>
						<img src={icone3} alt='icone' style={{ width: 80, height: 80 }} />
					</div>
				</div>
				<div class='card-body'>
					<h5 class='card-title text-center'>Patient safety</h5>
					<p class='card-text text-center '>
						feugiat viverra est suspendis porta tortor commodo
					</p>
				</div>
			</div>
		</div>
	);
}

export default Section2;
