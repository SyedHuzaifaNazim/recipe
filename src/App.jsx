import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../src/Components/Header';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import Footer from './Components/Footer';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
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
      });
    const filteredData = recipes.filter(recipe => recipe.name.tags.toLowerCase().includes(searchQuery.toLowerCase()));
    setSearchResults(filteredData);
  };

  return (
    <>
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
        </Routes>
      </BrowserRouter>
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
              
              <div className="recipe-info">
                <h2 className="recipe-title">
                  {recipe.id}. {recipe.name} 
                </h2>
                <img src={recipe.image} alt={recipe.name}
                  className="recipe-image" style={{ width: '30%',zIndex: '45', border: 'black' }} 
                  href={recipe.image}/>
                <ul className="recipe-ingredients-list">
                  <i>----------- rating: {recipe.rating} ------------</i>
                <h4>Ingredients: </h4>
                  {recipe.ingredients.map((ingredient, ingredientIndex) => (
                    <li key={ingredientIndex} className="recipe-ingredients-list-item">{ingredient}</li>
                  ))}
                <li className="recipe-description">
                 <h4>Instructions:</h4>
                 <strong>{recipe.instructions}</strong>
                </li>
                <br />
                </ul>
              </div>
            </li>
          ))

        ) : (

          recipes.map((recipe, index) => (
            <li key={index} className="recipe-header">
              <br />
              <img src={recipe.image} alt={recipe.name}
               className="recipe-image" style={{ width: '10%',zIndex: '45' }} href={recipe.image}/>

              <div className="recipe-info">
                <h2 className="recipe-title" href={recipe.image}>{recipe.id}. {recipe.name}</h2>
                <i>----------- rating: {recipe.rating} ------------</i>
                <li className="recipe-ingredients-list">
                  <h4>Ingredients: </h4>
                  {recipe.ingredients.map((ingredient, ingredientIndex) => (
                    <div>
                    <li key={ingredientIndex} className="recipe-ingredients-list-item">{ingredient}</li>
                    </div>
                  ))}
                </li>
              </div>
                  <li className="recipe-description">
                    <h4>Instructions :</h4>
                    <strong className='recipe-description'>
                      {recipe.instructions}
                    </strong>
                  </li>
            </li>
          ))
        )}
      </ul>
      <hr />
      <Footer />
    </div>
    </>
  );
}

export default App;