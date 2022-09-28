// import React, { useState } from "react";
// import { AiOutlineClose } from "react-icons/ai";
// import { SERVER } from "../../ServerUrls";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// function SuscreptionPopup() {
//   const [email, setEmail] = useState("");

//   const modalclose = () => {
//     document.getElementById("Suscreption").style.display = "none";
//   };

//   //download
//   const dwanlod1 = () => {
//     fetch("pdf/pdf.pdf").then((response) => {
//       response.blob().then((blob) => {
//         const fileURL = window.URL.createObjectURL(blob);
//         let alink = document.createElement("a");
//         alink.href = fileURL;
//         alink.download = "Dawnlod1.pdf";
//         alink.click();
//       });
//     });
//   };
//   // call suscreption api
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const insertData = {
//       subscription_email: email,
//     };
//     console.log("befor insertSubscription", insertData);
//     axios
//       .post(SERVER + "/insertSubscription", insertData, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then((res) => {
//         console.log("Insert insertSubscription Res", res);

//         document.getElementById("Suscreption").style.display = "none";
//       })
//       .catch((err) => {
//         console.log("not post", err);
//         toast.error("something wrong");
//         setTimeout(() => {
//           window.location.reload();
//         }, 2000);
//       });
//   };

//   return (
//     <div>
//       {/* Suscreption Popup start */}
//       <div
//         className="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden"
//         id="Suscreption"
//       >
//         <div className="flex items-center justify-center max-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//           <div className="fixed inset-0 transition-opacity">
//             <div className="absolute inset-0 bg-gray-900 opacity-75" />
//           </div>
//           <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
//             &#8203;
//           </span>

//           {/* To open contact form */}
//           <div
//             className="inline-block
//             md:mt-40 mt-40
//             md:w-1/3 w-96 border-blue-700 border-4
//             bg-white 
//              justify-center
//              justify-items-center
//             rounded-lg text-left shadow-xl transform transition-all"
//           >
//             <div className="justify-between flex">
//               <div className=""></div>
//               <div className=" bg-blue-700">
//                 <AiOutlineClose
//                   className="text-3xl"
//                   onClick={() => modalclose()}
//                 />
//               </div>{" "}
//             </div>
//             <div className="     p-5 md:p5    ">
//               <div className="font-heading  md:text-2xl md:font-bold text-xl">
//                 Please Enter Email Address to Download The Whitepaper.
//               </div>
//               <form onSubmit={(e) => handleSubmit(e)}>
//                 {/* Email Div */}
//                 <div className="mb-6 pt-10 md:w-full group">
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     className="block py-2.5 px-0 w-full font-heading text-sm text-gray-900 bg-transparent border-0 border-b-2 
//       border-gray-300 appearance-none  dark:border-gray-400 
//        focus:outline-none focus:ring-0 peer"
//                     placeholder="Email"
//                     required
//                     onChange={(e) => setEmail(e.target.value)}
//                     value={email}
//                   />
//                 </div>
//                 {/* Email Div Ends*/}
//                 <input
//                   className="mt-6 mb-6 bg-Primary text-white font-heading py-2 px-4 rounded "
//                   type="submit"
//                   value="Submit"
//                 />
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Suscreption Popup End */}
//       <ToastContainer />
//     </div>
//   );
// }

// export default SuscreptionPopup;
