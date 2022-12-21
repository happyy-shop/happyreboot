// import React from 'react'
// import { useEffect, useState } from "react";

// function SearchFor() {
//   const [car, setCar] = useState([]);

//   const [searchItem, setSearchItem] = useState("");

//   const search = () => {
//     if (searchItem === "") {
//       return Axios.get("http://localhost:4000/api/car").then((res) => {
//         setCar(res.data);
//       });
//     }
//     setCar((cars) => {
//       return cars.filter((car) => {
//         return car.name.toLowerCase().includes(searchItem.toLowerCase());
//       });
//     });
//   };
//   return (
//     <center><div className="col-lg-4 col-6 text-left">
//     <form action="">
//       <div className="input-group">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search for products"
//         />
//         <div className="input-group-append">
//           <span className="input-group-text bg-transparent text-primary">
//             <i className="fa fa-search" />
//           </span>
//         </div>
//       </div>
//     </form>
//   </div></center>
//   )
// }

// export default SearchFor