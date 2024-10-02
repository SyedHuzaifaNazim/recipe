import React from "react";

function Footer() {
    return (
      <footer className="footer bg-white-transparent text-black text-center py-3 mt-6">
        <p>&copy; 2024 MyRecipes App. All rights reserved.</p>
        <address>
          <a href="https://www.facebook.com/myrecipesapp" target="_blank" rel="" 
          className="text-black hover:text-gray-900">facebook</a>
          <br />
          <a href="https://www.instagram.com/myrecipesapp" target="_blank" rel=""
          className="text-black hover:text-gray-900">Instagram</a>
          <br />
          <a href="https://www.twitter.com/myrecipesapp" target="_blank" rel=""
          className="text-black hover:text-gray-900">X</a>
        </address>
      </footer>
    );
  }
  
  export default Footer;