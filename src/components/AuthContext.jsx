import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [oldpassword, setOldpassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");
  const [username, setUsername] = useState(localStorage.getItem("username") || null);
  const [useremail, setUseremail] = useState(localStorage.getItem("useremail") || null);
  const [error, setError] = useState("");
  const [cart,setCart] = useState([]);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
      setIsLoggedIn(true);
      const savedEmail = localStorage.getItem("useremail");
      const savedName = localStorage.getItem("username");
      if (savedEmail) setUseremail(savedEmail);
      if (savedName) setUsername(savedName);
    }
  }, []);

    
   
    

  const AddToCart = async (productId) => {
    try {
      const response = await fetch('https://e-commerce-production-efac.up.railway.app/order/product/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ productId: productId }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log("Added to cart successfully:", data);
      } else {
        console.error("Failed to add to cart:", data.message || data);
      }
      } catch (error) {
        console.error("Connection error:", error.message);
      }
    
  };

  const RemoveFromCart = async (cartItemId) => {
    try {
      const response = await fetch('https://e-commerce-production-efac.up.railway.app/order/remove-cart/', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ cartItemId:cartItemId }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
      
      } else {
       
      }
      if (data.message && data.message.toLowerCase().includes("expired")) {
        alert("Session expired. Please log in again.");
      
        navigate("/login");
      }
      } catch (error) {
        
      }
  };
  



  const signup = async (e) => {
    e.preventDefault();
    const signuptemplt = { name, email, password };

    try {
      const res = await fetch("https://e-commerce-production-efac.up.railway.app/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signuptemplt),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
        setTimeout(() => setError(""), 5000);
        return;
      }

      


      setName("");
      setEmail("");
      setPassword("");
      navigate("/login");
    } catch (error) {
      setError("Network error");
      setTimeout(() => setError(""), 5000);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    const logintmplt = { email: emaillog, password: passwordlog };

    try {
      const res = await fetch("https://e-commerce-production-efac.up.railway.app/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(logintmplt),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        setTimeout(() => setError(""), 5000);
        return;
      }

      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("useremail", data.email);
        localStorage.setItem("username", data.name);
        

        setToken(data.token);
        setIsLoggedIn(true);
        setUseremail(data.email);
        navigate("/account");
        window.location.reload();
      }

      setEmaillog("");
      setPasswordlog("");
    } catch (err) {
      setError("Network error");
      setTimeout(() => setError(""), 5000);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("useremail");
    localStorage.removeItem("username");
    setToken(null);
    setIsLoggedIn(false);
    setUseremail(null);
    setUsername(null);
    navigate("/login");
  };
  const Changepassword = async (e) => {
    e.preventDefault();
    const changepylod = {
      oldPassword: oldpassword,
      newPassword: newpassword,
    };

    try {
      const res = await fetch("https://e-commerce-production-efac.up.railway.app/api/change-password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify(changepylod),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        setError(data.message || "Password change failed");
        setTimeout(() => setError(""), 5000);
        return;
      }
  
      alert("Password changed successfully");
      setNewpassword("");
      setOldpassword("");
    } catch (err) {
      setError("Network error");
      setTimeout(() => setError(""), 5000);
    }
  };

    const cartfetch =async ()=>{
      try{
        const res =await fetch("https://e-commerce-production-efac.up.railway.app/order/cart",{
          method:"GET",
          headers: {
            "Authorization": `Bearer ${token}`
          },
        });
        const cartdata = await res.json();
        setCart(cartdata || []);
        
      }catch{
        if(cartdata.message === "Token expired"){
          logout();
        } else{
          
        }
        
      }
    }
   
    useEffect(() => {
      cartfetch();
    }, [token]);

 

  

  
  return (
    <AuthContext.Provider
      value={{
        setName,
        setEmail,
        setPassword,
        signup,
        error,
        login,
        logout,
        isLoggedIn,
        token,
        setPasswordlog,
        setEmaillog,
        useremail,
        username,
        setNewpassword,
        setOldpassword,
        newpassword,
        oldpassword,
        Changepassword,
        cart,
        AddToCart,
        RemoveFromCart,
        cartfetch,

      
        
      
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
