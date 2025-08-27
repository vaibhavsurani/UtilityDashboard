import { Link } from "react-router-dom";

 const Navbar = () => {
   return (
    <div className="w-full bg-gray-400 flex justify-center border rounded-2xl py-6 text-white">
     <nav>
       <ul className="flex flex-row space-x-8">
         <li>
           <Link to="/">Currency Converter</Link>
         </li>
         <li>
           <Link to="/locationselector">Location Selector</Link>
         </li>
         <li>
           <Link to="/weather">Weather Dashboard</Link>
         </li>
       </ul>
     </nav>
    </div>
   );
 }

 export default Navbar