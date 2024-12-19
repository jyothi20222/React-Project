
import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
        
                const filteredProducts = data.filter(product => product.price > 50 && product.price < 300);
                setProducts(filteredProducts);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Products (Price between $50 and $300)</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {products.map(product => (
                    <div key={product.id} style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', width: '200px', borderRadius: '8px' }}>
                        <img src={product.image} alt={product.title} style={{ width: '100%', height: 'auto' }} />
                        <h2 style={{ fontSize: '16px' }}>{product.title}</h2>
                        <p style={{ fontWeight: 'bold' }}>Price: ${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;

