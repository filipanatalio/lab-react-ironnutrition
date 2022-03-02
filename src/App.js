import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import './App.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox/FoodBox';
import AddFoodForm from './Components/AddFoodForm/AddFoodForm';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  const [food, setFood] = useState(foods);
  const [displayFood, setDisplayFood] = useState(foods);
  const [showForm, setShowForm] = useState(true);

  const addNewFood = (newFood) => {
    const updatedFood = [...food, newFood];
    setFood(updatedFood);
    setDisplayFood(updatedFood);
  };

  const searchFilter = (searchQuery) => {
    let filteredFoods = food.filter((food) =>
      food.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    console.log(filteredFoods);
    setDisplayFood(filteredFoods);
  };

  const deleteFood = (foodName) => {
    let newFood = [...displayFood];
    const filteredFood = newFood.filter((foodToDelete) => {
      return foodToDelete.name !== foodName;
    });
    console.log(filteredFood);
    setDisplayFood(filteredFood);
  };

  const toggleShow = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <SearchBar search={searchFilter} />
      {showForm && <AddFoodForm addFood={addNewFood} />}
      <button onClick={toggleShow}>{showForm ? 'Hide' : 'Create Food'}</button>
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {displayFood.map((item) => {
        return <FoodBox food={item} clickToDelete={deleteFood} />;
      })}
      {!displayFood.length && <h1>Oops! There's no more content to show!</h1>}
      </Row>
      
    </div>
  );
}

export default App;
