import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../src/Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/recipes')
      .then(response => {
        setRecipes(response.data.recipes);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(`https://dummyjson.com/recipes/search?q=${searchQuery}`)
    .then(response => {
      setSearchResults(response.data.recipes);
      })
    const filteredData = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setSearchResults(filteredData);
  };

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path='/' element={<Header />} />
        </Routes>
      </Router>
      {/* <h1 className='recipe-title'>Home Made Oat Flour Pizza</h1> */}
      <h1 className='head'></h1>
      <Form onSubmit={handleSearch}>
        <Form.Control type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search recipes" />
        <Button type="submit">Search</Button>
      </Form>
      <ul className="recipe-list">
        {searchResults.length > 0 ? (
          searchResults.map((recipe, index) => (
            <li key={index} className="recipe-header">
              <img src={recipe.image} alt={recipe.name} className="recipe-image" />
              <div className="recipe-info">
                <h2 className="recipe-title">Name: {recipe.name}</h2>
                <p>ID: {recipe.id}</p>
                <ul className="recipe-ingredients-list">
                  {recipe.ingredients.map((ingredient, ingredientIndex) => (
                    <li key={ingredientIndex} className="recipe-ingredients-list-item">{ingredient}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))
        ) : (
          recipes.map((recipe, index) => (
            <li key={index} className="recipe-header">
              <img src={recipe.image} alt={recipe.name} className="recipe-image" style={{ width: '10%' }} />
              <div className="recipe-info">
                <h2 className="recipe-title">{recipe.id}. {recipe.name}</h2>
                <ul className="recipe-ingredients-list">
                  {recipe.ingredients.map((ingredient, ingredientIndex) => (
                    <div>
                    <li key={ingredientIndex} className="recipe-ingredients-list-item">{ingredient}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;