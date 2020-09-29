import React from 'react';
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="/imgs/banner.jpg" alt="" />

            {/* product id, title, rating, img */}
            <div className="home__row">

                <Product
                    id="0001"
                    title="The Last Move >Mary Burton"
                    price={3.49}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/51p93HzcTaL.jpg"

                />

                <Product
                    id="0002"
                    title="PUMA Men's Borussia Dortmund BVB 20/21 Home Shirt Replica Football Shirt"
                    price={59.45}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/713RPtIutlL._AC_SL1500_.jpg"

                />


            </div>

            <div className="home__row">

                <Product
                    id="0003"
                    title="Casio G-Shock GW-7900B-1ER Men's Watch, Black"
                    price={99.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61rn64SMoeL._AC_UX679_.jpg"

                />

                <Product
                    id="0004"
                    title="s.Oliver Boy's Quilted Jacket"
                    price={55.08    }
                    rating={3}
                    image="https://m.media-amazon.com/images/I/61Po2CXyOnL._MCnd_SEARCH281250_AC_UL320_.jpg"

                />
                <Product
                    id="0005"
                    title="Vans Men's Filmore Suede/Canvas Low-Top Sneakers"
                    price={72.89}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/714nnNBFgdL._AC_UL320_.jpg"

                />
            </div>


            <div className="home__row">

                <Product
                    id="0006"
                    title="Call of Duty: Black Ops Cold War Standard PRE-PURCHASE "
                    price={59.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71t6grd9K2L._AC_SL1476_.jpg"

                />

                <Product
                    id="0007"
                    title="OnePlus 8 Pro 5G 12GB RAM 256GB UK SIM-Free Smartphone with Triple Camera, Dual SIM and Alexa built-in Glacial Green - 2 Years Warranty"
                    price={899.49}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71lMjeUEzsL._AC_UY218_.jpg"

                />
            </div>
            <div className="home__row">

                <Product
                    id="0008"
                    title="Sony BRAVIA KD55X70 - 55-inch - LED - 4K Ultra HD (UHD) - High Dynamic Range (HDR) - Smart TV with Freeview Play (Black, 2020 model)"
                    price={599.00}
                    rating={5}
                    image="https://spy.com/wp-content/uploads/2019/12/curved-tv-samsung.jpg?w=1000&h=750&crop=1"

                />
            </div>
            {/* product */}
        </div>
    )
}

export default Home
