import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar';
import Header from '../src/Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");  // Fixed: Initialize as an empty string
  // const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/recipes')
      .then(response => {
        setRecipes(response.data.recipes);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // const handleSearch = (e) => {
  //   e.preventDefault();
    
  //   // Fetch filtered results from API
  //   axios.get(`https://dummyjson.com/recipes/search?q=${searchQuery}`)
  //     .then(response => {
  //       setSearchResults(response.data.recipes);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching search results:", error);
  //     });
  // };

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
      const data = await response.json();
      setSearchResults(data.recipes);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <>
      <div className="container mx-auto p-6 bg-gray-100 min-h-screen border border-gray-300 shadow-lg rounded-lg">
        
        <h1 className="text-4xl font-extrabold text-center my-6 text-blue-700 animate-fade-in">
          Home Made Oat Flour Pizza
        </h1>
        <div>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {searchResults.map((recipe, index) => (
          <li key={index} className="p-4 border-b">{recipe.name}</li>
        ))}
      </ul>
    </div>

        <ul className="mt-8 space-y-8">
          {searchResults.length > 0 ? (
            searchResults.map((recipe, index) => (
              <li key={index} className="border p-6 rounded-lg shadow-lg bg-white transform transition duration-300 hover:scale-105 animate-fade-in flex flex-col items-center">
                <h2 className="text-2xl font-bold text-gray-800">{recipe.id}. {recipe.name}</h2>
                <img src={recipe.image} alt={recipe.name} className="w-1/3 my-4 rounded-lg shadow-md" />
                <p className="italic text-gray-600">----------- Rating: {recipe.rating} ------------</p>
                <h4 className="font-extrabold mt-3 text-lg">Ingredients:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {recipe.ingredients.map((ingredient, ingredientIndex) => (
                    <li key={ingredientIndex}>{ingredient}</li>
                  ))}
                </ul>
                <h4 className="font-extrabold mt-3 text-lg">Instructions:</h4>
                <p className="text-gray-700">{recipe.instructions}</p>
              </li>
            ))
          ) : (
            recipes.map((recipe, index) => (
              <li key={index} className="border p-6 rounded-lg shadow-lg bg-white transform transition duration-300 hover:scale-105 animate-fade-in flex flex-col items-center">
                <img src={recipe.image} alt={recipe.name} className="w-1/4 rounded-lg shadow-md" />
                <h2 className="text-2xl font-bold text-gray-800 mt-3">{recipe.id}. {recipe.name}</h2>
                <p className="italic text-gray-600">----------- Rating: {recipe.rating} ------------</p>
                <h4 className="font-extrabold mt-3 text-lg">Ingredients:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {recipe.ingredients.map((ingredient, ingredientIndex) => (
                    <li key={ingredientIndex}>{ingredient}</li>
                  ))}
                </ul>
                <h4 className="font-extrabold mt-3 text-lg">Instructions:</h4>
                <p className="text-gray-700">{recipe.instructions}</p>
              </li>
            ))
          )}
        </ul>

        <hr className="my-8 border-t-2 border-gray-300" />
        <Footer />
      </div>
    </>
  );
}

export default App;
