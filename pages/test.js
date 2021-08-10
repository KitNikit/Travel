// const test = () => {
// 	function toggle() {
// 		document.querySelector('.container-btn').classList.toggle('active');
// 	}
// 	return (
// 		<>
// 			<style global jsx>{`
// 				.container-btn {
// 					cursor: pointer;
// 					display: flex;
// 					margin-right: 50px;
// 					z-index: 1;
// 				}
// 				svg {
// 					transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
// 				}
// 				.active svg {
// 					transform: rotate(90deg);
// 				}
// 				path {
// 					transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
// 						stroke-dasharray 500ms cubic-bezier(0.4, 0, 0.2, 1),
// 						stroke-dashoffset 500ms cubic-bezier(0.4, 0, 0.2, 1);
// 				}
// 				path:nth-child(1) {
// 					transform-origin: 36% 40%;
// 				}
// 				path:nth-child(2) {
// 					stroke-dasharray: 29 299;
// 				}
// 				path:nth-child(3) {
// 					transform-origin: 35% 63%;
// 				}
// 				path:nth-child(4) {
// 					stroke-dasharray: 29 299;
// 				}
// 				path:nth-child(5) {
// 					transform-origin: 61% 52%;
// 				}
// 				path:nth-child(6) {
// 					transform-origin: 62% 52%;
// 				}
// 				.active path:nth-child(1) {
// 					transform: translateX(9px) translateY(1px) rotate(45deg);
// 				}
// 				.active path:nth-child(2) {
// 					stroke-dasharray: 225 299;
// 					stroke-dashoffset: -72px;
// 				}
// 				.active path:nth-child(3) {
// 					transform: translateX(9px) translateY(1px) rotate(-45deg);
// 				}
// 				.active path:nth-child(4) {
// 					stroke-dasharray: 225 299;
// 					stroke-dashoffset: -72px;
// 				}
// 				.active path:nth-child(5) {
// 					transform: translateX(9px) translateY(1px) rotate(-45deg);
// 				}
// 				.active path:nth-child(6) {
// 					transform: translateX(9px) translateY(1px) rotate(45deg);
// 				}
// 			`}</style>

// 			<div class='container-btn' onClick={toggle}>
// 				<svg
// 					xmlns='http://www.w3.org/2000/svg'
// 					width='150'
// 					height='150'
// 					viewBox='0 0 200 200'
// 				>
// 					<g stroke-width='6.5' stroke-linecap='round'>
// 						<path
// 							d='M72 82.286h28.75'
// 							fill='#009100'
// 							fill-rule='evenodd'
// 							stroke='red'
// 						/>
// 						<path
// 							d='M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554'
// 							fill='none'
// 							stroke='red'
// 						/>
// 						<path
// 							d='M72 125.143h28.75'
// 							fill='#009100'
// 							fill-rule='evenodd'
// 							stroke='red'
// 						/>
// 						<path
// 							d='M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554'
// 							fill='none'
// 							stroke='red'
// 						/>
// 						<path
// 							d='M100.75 82.286h28.75'
// 							fill='#009100'
// 							fill-rule='evenodd'
// 							stroke='red'
// 						/>
// 						<path
// 							d='M100.75 125.143h28.75'
// 							fill='#009100'
// 							fill-rule='evenodd'
// 							stroke='red'
// 						/>
// 					</g>
// 				</svg>
// 			</div>
// 		</>
// 	);
// };
// export default test;

// const test = () => {
// 	function myClick() {
// 		document.querySelector('.input').classList.add('add-this-class');
// 	}

// 	return (
// 		<section className='min-vh-100'>
// 			<div className='input'>
// 				<input
// 					className='myButton submit_bar text-black'
// 					placeholder='Insert your input&hellip;'
// 				/>
// 			</div>
// 			<button onClick={myClick} />
// 		</section>
// 	);
// };
// export default test;

// import Link from 'next/link'
// import React from 'react'

// const Index = () => {
//   let myDiv = React.createRef()

//   function myClick() {
//     myDiv.current.classList.add('add-this-class')
//   }

//   return (
//     <section className="min-vh-100">
//       <div
//         ref={myDiv}
//         className="input_bar border rounded-maximum p-1 mx-1 bg-white d-flex"
//       >
//         <input
//           className="myButton submit_bar text-black"
//           placeholder="Insert your input&hellip;"
//         />
//         <Link href="#">
//           <a onClick={myClick} className="input_icon" />
//         </Link>
//       </div>
//     </section>
//   )
// }
