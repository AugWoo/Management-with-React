import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customer = [
  {
    "id": 1,
    "image": "http://placeimg.com/64/64/1",
    "name": "Woo",
    "birth": "000809",
    "gender": "male",
    "job": "student"
  },
  {
    "id": 2,
    "image": "http://placeimg.com/64/64/2",
    "name": "John",
    "birth": "891215",
    "gender": "female",
    "job": "pilot"
  },
  {
    "id": 3,
    "image": "http://placeimg.com/64/64/3",
    "name": "Sarah",
    "birth": "980525",
    "gender": "female",
    "job": "designer"
  },
]

function App() {
  return (
    <div className="gray-background">
      {customer.map(c => 
        (
          ( 
            <Customer 
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              gender={c.gender}
              birth={c.birth}
              job={c.job}
            />
          )
        ))
      }
    </div>
  );
}

export default App;
