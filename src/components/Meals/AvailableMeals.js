import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';



const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  useEffect(() =>{
    const fetchMeals = async () => {
      const response = await fetch('https://react-http-3bf2b-default-rtdb.europe-west1.firebasedatabase.app/Meals.jso');
      const responseData = await response.json()
      const loadedMeals = [];

      for(let key in responseData){
        loadedMeals.push({
          id: key,
          key: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        })
      }
      setMeals(loadedMeals)
      setIsLoading(false)
    }
    fetchMeals()
    
  },[])
  if(isLoading){
    return (

    <section className={classes.MealsLoading}>
     <h1>Loading...</h1>
    </section>
      )
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;