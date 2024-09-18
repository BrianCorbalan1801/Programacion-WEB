import React, { useEffect, useState } from "react";
import "./App.css";
import supabase from "./lib/helper/supabaseClient";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const {data, error} = await supabase.auth.getSession();
      if(error) {
        console.log(error)
      } else {
        setUser(data?.session?.user);
      }
    };
  
    getSession();
  }, []);

  const handleClick = async () => {
    const {data, error} = supabase.auth.signInWithOAuth({
      provider:"github"
    })
    if(error) {
      console.log(error);
    } else {
      console.log(data);
    }
  }
  return (
    <>
       <div>
        <header className="Header">
          <h1>Blog Sierra de La Ventana</h1>
        <button onClick={handleClick}>Conectar con Github</button>
        </header>

        <main className="Main">
          <h3>Bienvenido a mi Blog de Sierra de la ventana</h3>
        </main>

        <footer className="Footer">
          <p>&copy; 2024 Mi Portafolio - Todos los derechos reservados</p>
        </footer>
      </div>
    </>
  );
};
