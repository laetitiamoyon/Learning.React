import {useEffect, useState, useCallback, memo} from "react";

const groupBy = (array, getKey) =>
    array.reduce((groupedMap, item) => {
        const key = getKey(item)
        if (!groupedMap.has(key)) groupedMap.set(key, [item])
        else groupedMap.get(key).push(item)
        return groupedMap
    }, new Map())

const PRODUCTS =
[
    {id : 1, category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {id : 2, category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {id : 4, category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {id : 5, category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {id : 3, category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {id : 6, category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]

const ProductRow = ({stocked, price, name}) =>
    <tr>
        <td>
            <span className={stocked ? 'text-danger' : ''}>{name}</span>
        </td>
        <div>{price}</div>
    </tr>

const ProductCategoryRow = ({category}) =>
    <tr>
        <th colSpan="2">{category}</th>
    </tr>

const ProductTable = ({products}) =>
{
    let rows = []
    const groupedProducts = groupBy(products, ({category}) => category)

    for (const [category, products] of groupedProducts.entries())
    {
        rows.push(<ProductCategoryRow category={category} key={category} />);

        for (let product of products) rows.push(<ProductRow {...product} key={product.name} />);
    };

    return <table className="table">
        <thead>
        <tr>
            <th>Nom</th>
            <th>Prix</th>
        </tr>
        </thead>
        <tbody>{rows}</tbody>
    </table>
}

const SearchBar = ( {setSearchTerm, setIsStocked, searchTerm, inStocked}) =>
{
    const onChangeTerm = (event) => setSearchTerm(event.target.value)
    const onChangeIsStocked = event => setIsStocked(event.target.value)

    return <div>
        <input
            type="text"
            placeholder="Rechercher un produit"
            value={searchTerm}
            onChange={onChangeTerm} />
        <input
            type="checkbox"
            checked={inStocked}
            onChange={onChangeIsStocked} />
        <label>Produits seulement en stock</label>
    </div>
}

const Button = memo(({onClick}) => {
    console.log('render')
    return <button onClick={onClick}>Cliquer</button>
})

export const FilterableProductTable = () =>
{
    const [count, setCount] = useState(0)
    const increment = () => setCount(count+1)
    const handleClick = useCallback(() => alert('Bonjour'), [])
    const [filteredProducts, setFilteredProducts] = useState(PRODUCTS)
    const [searchTerm, setSearchTerm] = useState("")
    const [inStockOnly, setInStockOnly] = useState(false)

    useEffect(() => setFilteredProducts(PRODUCTS.filter(p =>
        (!inStockOnly || p.stocked) &&
        p.name.toLowerCase().includes(searchTerm.toLowerCase())))
        , [searchTerm, inStockOnly])

    return <>
        <SearchBar
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            setIsStocked={setInStockOnly}
            inStocked={inStockOnly}/>
        <ProductTable products={filteredProducts}/>
        <Button onClick={handleClick}/>
        <button onClick={increment}>+ {count}</button>
    </>
}
