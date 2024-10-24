import { useState, useEffect } from "react"
import Card from "./components/Card"
import AppLayout from "./components/layout/AppLayout"
import axios from "axios"
import { Spinner } from "@material-tailwind/react";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching data from Fake Store API');
        setLoading(false);
        console.error('Error fetching data:', error);
      });

  }, [])

  return (
    <AppLayout>
      <div className="mt-12 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
        <h1 className="text-3xl font-semibold relative before:h-0.5 before:w-24 before:block before:bg-blue-800 before:absolute before:-bottom-1 before:left-[49%] before:-translate-x-1/2  text-center">
          Products
        </h1>
        {loading 
        ? (<Spinner className="mx-auto mt-8 h-6 w-6" />) 
        : (<div className="text-center text-red-700 mt-8">{error}</div>)
        }
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {products.map(product => (
            <Card
              key={product.id}
              imgPath={product.image}
              title={product.title}
              category={product.category}
              price={product.price}
              rate={product.rating.rate}
            />
          ))}
        </div>
      </div>
    </AppLayout>
  )
}

export default App