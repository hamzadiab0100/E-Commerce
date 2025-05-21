import React,{useContext,createContext,useState,useEffect} from "react";


const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const [products,setProducts] =useState([]);
    const [product,setProduct] =useState(null);
    const [bestproduct, setBestproduct] = useState([]);


    
    



    useEffect(() => {
      const fetchBestproduct = async () => {
        try {
          const res = await fetch("https://e-commerce-production-efac.up.railway.app/product/show-best/");
          const data = await res.json();
          setBestproduct(data.products);
          
        } catch (err) {
          console.log("Product error is:", err);
        }
      };
    
      fetchBestproduct();
    }, []);
    
 
    
    










 return (
    <ProductContext.Provider value={{
      products,
      product,
      setProducts,
      bestproduct,
      


    }}>
      {children}
    </ProductContext.Provider>
  );

};



export const useProduct = () => useContext(ProductContext);