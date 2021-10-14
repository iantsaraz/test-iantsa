import logo from "../../LOGO.png";
import "./nav.css";
import storage from "../../firebase/Firebase";
import { getStorage, ref, listAll } from "firebase/storage";
import { useState, useEffect } from "react";
function Nav() {
	// const [logo, setLogo] = useState();
	// const storage = getStorage();
	// useEffect(() => {
	// 	// fetchImagesLogo();
	// 	const listRef = ref(storage, "/image");
	// 	listAll(listRef)
	// 		.then((res) => {
	// 			res.prefixes.forEach((folderRef) => {
	// 				// All the prefixes under listRef.
	// 				// You may call listAll() recursively on them.
	// 			});
	// 			res.items.forEach((listRef) => {
	// 				// All the items under listRef.
	// 				setLogo(res);
	// 			});
	// 		})
	// 		.catch((error) => {
	// 			// Uh-oh, an error occurred!
	// 		});
	// }, []);

	// Create a reference under which you want to list

	// const fetchImagesLogo = async () => {
	// 	await storage;
	// 	ref("header/logo.png")
	// 		getDownloadURL()
	// 		.then((res) => {
	// 			setLogo(res);
	// 		});
	// };
	return (
		<header className='header  '>
			<img src={logo} className='logo' alt='logo' />
			<nav className='nav_links'>
				<a href='#Home'>Home</a>

				<a href='#Work'>Work</a>

				<a href='#About'>About</a>

				<a href='#Schedule'>Schedule</a>

				<a href='#Reviews'>Reviews</a>

				<a href='#Blog'>Blog</a>
			</nav>
			<a className='cta' href=''>
				{" "}
				<button className='lets'>Let's talk</button>
			</a>

			<div id='menu_bar' className='fas fa-bars'></div>
		</header>
	);
}

export default Nav;
