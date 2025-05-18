
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/produtos');
        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className='container'>
        {Array.isArray(products) && products.map((item, index) => (
          <div key={item.id || `product-${index}`}>
            <Card style={{ width: '18rem' }}>
              <Card.Img className='img' variant="top" src={`http://localhost:3000/${item.imagem}`} />
              <Card.Body className='card'>
                <Card.Title>{item.nome}</Card.Title>
                <Card.Text>{item.descricao}</Card.Text>
                <Card.Text>{item.preco}</Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
