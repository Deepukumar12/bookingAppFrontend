import "./featured.css"

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img 
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/6f/b9/fe/photo2jpg.jpg?w=1200&h=700&s=1" 
                alt="" 
                className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Gopalganj</h1>
                    <h2>841409, Baikunthpur</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img 
                src="https://www.fabhotels.com/blog/wp-content/uploads/2024/03/c05a8cb3-tomb-of-sher-shah-suri.jpg" 
                alt="" 
                className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Rohtas</h1>
                    <h2>821115, Sasaram</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img 
                src="https://content.jdmagicbox.com/comp/siwan/k6/9999p6154.6154.220418223017.c7k6/catalogue/chhat-ghat-siwan-tourist-attraction-0ljewevawh.jpg" 
                alt="" 
                className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Siwan</h1>
                    <h2>841234, Chhath Ghat, Darauli</h2>
                </div>
            </div>

        </div>
    )
}

export default Featured;