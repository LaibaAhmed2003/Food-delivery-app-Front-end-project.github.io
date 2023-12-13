// // import React from 'react'

// export const Footer = () => {
//   return (
//     <div classNameName="footer-2 bg-white-800 pt-6 md:pt-12">
//       <div classNameName="container px-4 mx-auto">
//         <div classNameName="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">
//           <div classNameName="footer-info lg:w-1/3 md:px-4">
//             <h4 classNameName="text-black text-2xl mb-4">#FOODFEST</h4>
//             <p classNameName="text-black-400">
//               We have carefully crafted the blocks to suit to everyones need.
//             </p>
//             <div classNameName="mt-4">
//               <button classNameName="bg-facebook py-2 px-4 text-black rounded mt-2 transition-colors duration-300">
//                 <span classNameName="fab fa-facebook-f mr-2"></span> Follow
//               </button>
//               <button classNameName="bg-twitter py-2 px-4 text-black rounded ml-2 mt-2 transition-colors duration-300">
//                 <span classNameName="fab fa-twitter mr-2"></span> Follow @freeweb19
//               </button>
//             </div>
//           </div>

//           <div classNameName="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
//             <div classNameName="sm:flex">
//               <div classNameName="sm:flex-1">
//                 <h6 classNameName="text-base font-medium text-black uppercase mb-2">
//                   About
//                 </h6>
//                 <div>
//                   <a
//                     href="#"
//                     classNameName="text-gray-400 py-1 block hover:underline"
//                   >
//                     Company
//                   </a>
//                   <a
//                     href="#"
//                     classNameName="text-gray-400 py-1 block hover:underline"
//                   >
//                     Culture
//                   </a>
//                   <a
//                     href="#"
//                     classNameName="text-gray-400 py-1 block hover:underline"
//                   >
//                     Team
//                   </a>
//                   <a
//                     href="#"
//                     classNameName="text-gray-400 py-1 block hover:underline"
//                   >
//                     Careers
//                   </a>
//                 </div>
//               </div>
//               <div classNameName="sm:flex-1 mt-4 sm:mt-0">
//                 <h6 classNameName="text-base font-medium text-black uppercase mb-2">
//                   What we offer
//                 </h6>
//                 <div>
//                   <a
//                     href="#"
//                     classNameName="text-gray-400 py-1 block hover:underline"
//                   >
//                     FastFood
//                   </a>
//                   <a
//                     href="#"
//                     classNameName="text-gray-400 py-1 block hover:underline"
//                   >
//                     Burgers
//                   </a>
//                   <a
//                     href="#"
//                     classNameName="text-gray-400 py-1 block hover:underline"
//                   >
//                     DineIn
//                   </a>
//                   <a
//                     href="#"
//                     classNameName="text-gray-400 py-1 block hover:underline"
//                   >
//                     Tutorials
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div classNameName="md:w-1/3 md:px-4 md:text-center mt-12 lg:mt-0">
//             <h5 classNameName="text-lg font-medium mb-4">Explore our site</h5>
//             <button classNameName="bg-indigo-600 text-white hover:bg-indigo-700 rounded py-2 px-6 md:px-12 transition-colors duration-300">
//               Explore
//             </button>
//           </div>
//         </div>
//       </div>

//       <div classNameName="border-t border-solid border-gray-900 mt-4 py-4">
//         <div classNameName="container px-4 mx-auto">
//           <div classNameName="md:flex md:-mx-4 md:items-center">
//             <div classNameName="md:flex-1 md:px-4 text-center md:text-left">
//               <p classNameName="text-white">
//                 &copy; <strong>FOODFEST</strong>
//               </p>
//             </div>
//             <div classNameName="md:flex-1 md:px-4 text-center md:text-right">
//               <a
//                 href="#"
//                 classNameName="py-2 px-4 text-white inline-block hover:underline"
//               >
//                 Terms of Service
//               </a>
//               <a
//                 href="#"
//                 classNameName="py-2 px-4 text-white inline-block hover:underline"
//               >
//                 Privacy Policy
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="copyright-area">
//         <div className="container">
//           <div className="row">
//             <div className="col-xl-6 col-lg-6 text-center text-lg-left">
//               <div className="copyright-text">
//                 <p>
//                   Copyright &copy; 2018, All Right Reserved{" "}
//                   <a href="https://codepen.io/anupkumar92/">Anup</a>
//                 </p>
//               </div>
//             </div>
//             <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
//               <div className="footer-menu">
//                 <ul>
//                   <li>
//                     <a href="#">Home</a>
//                   </li>
//                   <li>
//                     <a href="#">Terms</a>
//                   </li>
//                   <li>
//                     <a href="#">Privacy</a>
//                   </li>
//                   <li>
//                     <a href="#">Policy</a>
//                   </li>
//                   <li>
//                     <a href="#">Contact</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
import logo from "./Images/navlogo.png";
const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0px 100px",
          }}
        >
          <div
            className=""
            style={{
              padding: "10px 40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div
              className="col-sm-12 col-md-6"
              style={{
                width: "500px",
              }}
            >
              <img
                src={logo}
                alt=""
                style={{ width: "200px", height: "200px", marginTop: "-3%" }}
              />
            </div>
            <hr />
            <div
              className="col-xs-6 col-md-3"
              style={{
                textAlign: "center",
              }}
            >
              <p className="text-justify">
                Nestled in the heart of the city, Foodfest is a haven for food
                enthusiasts seeking a gastronomic adventure. Our restaurant is a
                celebration of diverse cuisines, expertly crafted by our
                talented chefs who are passionate about delivering unforgettable
                meals.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "20px",
              }}
            >
              <div
                className="col-xs-6 col-md-3"
                style={{
                  width: "300px",
                  textAlign: "left",
                }}
              >
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li>
                    <a href="#burgers">Menu</a>
                  </li>
                  <li>
                    <a href="#cart">Cart</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="container" style={{ textAlign: "center" }}>
          <div
            className="row"
            style={{ textAlign: "center", marginLeft: "30px" }}
          >
            <div
              className="col-md-8 col-sm-6 col-xs-12"
              style={{
                padding: "0px 40px",
              }}
            >
              <p className="copyright-text">
                Copyright &copy; 2017 All Rights Reserved by
                <a href="#home"> FoodFest</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
