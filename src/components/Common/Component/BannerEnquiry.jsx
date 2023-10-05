// import React, { useState } from "react";
// import imagepopup from "../../../assets/contactus/Getintuch.png";

// import PhoneInput from "react-phone-input-2";

// export const BannerEnquiry = () => {
//   const [email, setEmail] = useState("");
//   const handleEmail = (e) => {
//     const value = e.target.value;
//     let domain = value.substring(value.lastIndexOf("@"));
//     if (
//       domain === "@gmail.com" ||
//       domain === "@yahoo.com" ||
//       domain === "@hotmail.com" ||
//       domain === "@outlook.com"
//     ) {
//     } else {
//       setEmail(value);
//     }
//   };
//   return (
//     <div>
//       <div className="w-full md:h-[5rem] py-2 px-4 bg-CurrentOpeningBackground "></div>

//       <div className="grid md:grid-cols-2  bg-Green  ">
//         <form className="mx-10  mt-10">
//           <h1 className="text-center mb-6 text-4xl text-white font-extrabold">
//             Get In Touch
//           </h1>
//           <div className="mb-4">
//             {/* <label className="block mb-2 text-gray-700">Email</label> */}
//             <input
//               type="email"
//               name="email"
//               // onChange={(e) => setEmail(e.target.value)}
//               value={email}
//               className="w-full p-2 border border-gray-300 rounded-md"
//               placeholder="Your email"
//               required
//             />
//           </div>
//           {/* <div className="mb-4">
           

//             <form
//               className="form-elemnt"
//               name="email"
//               rules={[
//                 {
//                   type: "email",
//                   message: "The input is not valid E-mail!",
//                 },
//                 {
//                   required: true,
//                   message: "Please input your Email",
//                 },
//               ]}
//             >
//               <input
//                 size="large"
//                 type="email"
//                 onChange={(e) => {
//                   handleEmail(e);
//                 }}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 placeholder="Your email"
//                 required
//                 value={email}
//               />
//             </form>
//           </div> */}
//           <div className="mb-4">
//             {/* <label className="block mb-2 text-gray-700">Email</label> */}
//             <input
//               type="text"
//               name="name"
//               className="w-full p-2 border border-gray-300 rounded-md"
//               placeholder="Full Name"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             {/* <label className="block mb-2 text-gray-700">Name</label> */}
//             <input
//               type="company"
//               name="company"
//               className="w-full p-2 border border-gray-300 rounded-md"
//               placeholder="Company"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             {/* <label className="block mb-2 text-gray-700">Contact Number</label> */}

//             <PhoneInput
//               country={"in"} // Set the default country
//               name="contactNumber"
//               // value={contactNumber}
//               // onChange={onchangeContact}

//               maxLength="10"
//               containerClass="w-full "
//               inputStyle={{
//                 width: "100%",
//                 paddingleft: "48px",
//                 border: "1px solid #ccc",

//                 borderRadius: "6px",
//                 outline: "none",
//                 boxShadow: "0 0 0 2px rgba(66, 153, 225, 0.2)", // example focus style
//               }}
//               inputClass="w-full h-20 p-2 border border-black rounded-md"
//               // className="w-full p-2 border border-gray-300 rounded-md"
//               placeholder="Phone number"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             {/* <label className="block mb-2 text-gray-700">Message</label> */}
//             <textarea
//               name="message"
//               className="w-full p-2 border border-gray-300 rounded-md"
//               placeholder="Comments"
//               rows="4"
//               required
//             />
//           </div>
//           <div className="flex justify-center justify-items-center">
//             <input
//               className="mt-6 mb-6 bg-Primary  text-white font-heading py-2 px-4 rounded "
//               type="submit"
//               value="Submit"
//             />
//           </div>
//         </form>
//         <div className="mx-10 hidden md:block mt-4">
//           <img src={imagepopup} alt="" className="h-50 w-screen" />
//         </div>
//       </div>
//     </div>
//   );
// };
