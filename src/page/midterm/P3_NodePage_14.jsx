import { useEffect, useState } from "react";
import Product_14 from "../../components/midterm/Product_14";
import Wrapper from "../../assets/wrappers/midterm/Shop_14";

const P3_NodePage_14 = () => {
  const [shop_14, setShop_14] = useState([]);
  const api_url = "http://localhost:5000/api/shop_14/womens";
  const [shops_14, setShops_14] = useState([]);

  const fetchShopFromNodeServer = async () => {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      console.log("shops_14", data);
      setShops_14(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchShopFromNodeServer();
  }, []);

  return (
    <Wrapper>
      <div className="shop-page">
        <div className="section-title">
          <h3>P3_NodePage_14</h3>
          <p className="text-center text-[16px]">LIANGTINGLIN, 913410104</p>
        </div>
        <div className="collection-page">
          <h1 className="title">Womens</h1>
          <div className="items">
            {shops_14.length > 0 ? (
              shops_14.map((item) => {
                const { pId, name, category, price, img_url, remote_1mg_url } =
                  item;
                return (
                  <Product_14
                    key={pId}
                    pId={pId}
                    name={name}
                    category={category}
                    price={price}
                    img_url={img_url}
                    remote_1mg_url={remote_1mg_url}
                  />
                );
              })
            ) : (
              <p>Loading products...</p>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default P3_NodePage_14;
