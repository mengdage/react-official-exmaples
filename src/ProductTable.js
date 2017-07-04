import React, { Component } from 'react';

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

function ProductCategoryRow(props) {
  return (
    <tr>
      <th colSpan='2'>{props.category}</th>
    </tr>
  );
}

function ProductRow(props) {
  let name;
  // if is stocked, make the name red
  if(props.product.stocked) {
    name = props.product.name;
  } else {
    name = <span style={{color: 'red'}}>{props.product.name}</span>
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{props.product.price}</td>
    </tr>
  );
}

class ProductTable extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let rows = [];
    const products = this.props.products;
    const inStockOnly = this.props.inStockOnly;
    const filterText = this.props.filterText;
    let category = null;
    products.forEach((product) => {
      if( (inStockOnly && !product.stocked) ||
            (product.name.indexOf(filterText) === -1) ) {
        return;
      }
      // if a new category, add a new ProductCategoryRow of the category
      if(product.category !== category) {
        category = product.category;
        rows.push(<ProductCategoryRow key={category} category={category}/>);
      }

      rows.push(<ProductRow key={product.name} product={product} />);
    })

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

class SearchBar extends Component {

  render() {
    return (
      <div>
        <form>
          <p>
            <input type='text' placeholder='Search...'
              value={this.props.filterText}
              onChange={this.props.onFilterTextChange}/>
          </p>
          <p>
            <input type='checkbox' id='only-stocked'
              checked={this.props.inStockOnly}
              onChange={this.props.onInStockOnlyChange}
            />
            <label htmlFor='only-stocked'>Only show products in stock</label>
          </p>
        </form>
      </div>
    );
  }
}

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockOnlyChange= this.handleInStockOnlyChange.bind(this);

    this.state = {
      filterText: 'ball',
      inStockOnly: true
    }
  }

  handleFilterTextChange(e) {
    this.setState({
      filterText: e.target.value
    });
  }

  handleInStockOnlyChange(e) {
    this.setState({
      inStockOnly: e.target.checked
    });
  }
  render() {
    return (
      <div>
        <SearchBar
          onFilterTextChange={this.handleFilterTextChange}
          onInStockOnlyChange={this.handleInStockOnlyChange}
          inStockOnly={this.state.inStockOnly}
          filterText={this.state.filterText} />
        <ProductTable
          inStockOnly={this.state.inStockOnly}
          filterText={this.state.filterText}
          products={PRODUCTS} />
      </div>
    );
  }
}

export default FilterableProductTable;
