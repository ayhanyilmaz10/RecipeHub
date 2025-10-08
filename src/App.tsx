
import Header from './components/Header';
import React from 'react';
import { useState } from 'react'
import { useEffect } from 'react'
import { Timer } from 'lucide-react';
import { User } from 'lucide-react';



const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s="


type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strArea: string;
}
const App = () => {
  
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
  fetch(API_URL)
  .then((res) => res.json())
  .then((json) => setMeals(json.meals))
  
}, [])


  return <div>

    <Header />
    <div className='flex flex-wrap p-2 gap-6 justify-center '>
    {meals.map((meal) => (
    <div 
    className="w-100 h-auto bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
      
        <div className='w-full h-60 overflow-hidden rounded-t-xl'>
          <img 
          src={meal.strMealThumb} 
          alt={meal.strMeal} 
          className='w-full h-full object-cover cursor-pointer' />
        </div>
        <div className='p-4'>
          <span className='text-lg font-bold tracking-tight text-black block mb-2'>{meal.strMeal}</span>
          <div className='flex justify-between'>
          <span className='text-gray-600'>{meal.strArea}</span>
          <User className='text-gray-600 w-5'/>
          <Timer className='ml-52 text-gray-600 w-5'/>
          <p className='text-gray-600'>30 min</p>
          </div>
        </div>
    </div>
    ))}
</div>
    
</div>


};





export default App;
