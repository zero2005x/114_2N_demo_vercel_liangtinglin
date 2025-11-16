import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product_14 from "../../components/midterm/Product_14";
import Wrapper from "../../assets/wrappers/midterm/Shop_14";
import { supabase } from "../../db/clientSupabase";

const P4_SupaPage_14 = () => {
  const [shop_14, setShop_14] = useState([]);
  const { category } = useParams();

  const getShop_14 = async () => {
    try {
      let query = supabase.from("shop_14").select("*");

      // 如果有 category 參數，則進行篩選
      if (category) {
        query = query.eq("category", category);
      }

      let { data, error } = await query;

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        console.log("Fetched data:", data);
        console.log("Category:", category);
        setShop_14(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getShop_14();
  }, [category]);

  // 將分類名稱轉換為大寫顯示
  const categoryTitle = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : "All Products";

  return (
    <Wrapper>
      <div className="shop-page">
        <div className="section-title">
          <h3>P4_SupaPage_14</h3>
          <p className="text-center text-[16px]">LIANGTINGLIN, 913410104</p>
        </div>
        <div className="collection-page">
          <h1 className="title">{categoryTitle}</h1>
          <div className="items">
            {shop_14.length > 0 ? (
              shop_14.map((item) => {
                return <Product_14 key={item.pId} {...item} />;
              })
            ) : (
              <p>No products found in this category.</p>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default P4_SupaPage_14;
