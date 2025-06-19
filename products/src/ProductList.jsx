const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 499 },
]

export default function ProductList() {
    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
        </div>
    )
}