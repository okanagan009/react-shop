function Cart(props) {
    const { quantity = 0 } = props;
    return (
        <div className="cart blue darken-4 white-text">
            <i className="material-icons">shopping_cart</i>
            {quantity ? <span className="card-quantity">{quantity}</span> : null}
        </div>
    )
}

export { Cart }