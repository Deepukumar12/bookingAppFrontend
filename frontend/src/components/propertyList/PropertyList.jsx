
// import React from "react";
import "./propertyList.css"
const PropertyList = () => {
    return (
        <div className="pList">
            <div className="pListItem">
                <img 
                src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
                 alt=""
                  className="pListImg" />
                  <div className="pListTitles">
                    <h1>Taj Mahal Palace</h1>
                    <h2>400001, Mumbai</h2>
                  </div>
            </div>



            <div className="pListItem">
                <img 
                src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg"
                 alt=""
                  className="pListImg" />
                  <div className="pListTitles">
                    <h1>The Oberoi Amarvilas</h1>
                    <h2>282001, Agra</h2>
                  </div>
            </div>



            <div className="pListItem">
                <img 
                src="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg"
                 alt=""
                  className="pListImg" />
                  <div className="pListTitles">
                    <h1>ITC Maurya</h1>
                    <h2>110021, New Delhi</h2>
                  </div>
           </div>

                <div className="pListItem">
                <img 
                src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
                 alt=""
                  className="pListImg" />
                  <div className="pListTitles">
                    <h1>The Leela Palace</h1>
                    <h2>313001, Udaipur</h2>
                  </div>
             </div>

                <div className="pListItem">
                <img 
                src="https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg"
                 alt=""
                  className="pListImg" />
                  <div className="pListTitles">
                    <h1>Taj Falaknuma Palace</h1>
                    <h2>500053, Hyderabad</h2>
                  </div>
               </div>
        </div>
    )
}


export default PropertyList;