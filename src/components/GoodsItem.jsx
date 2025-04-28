function GoodsItem(props) {
    const {
        mainId,
        displayName,
        displayDescription,
        price: { finalPrice },
        displayAssets,
    } = props;

    const { background } = displayAssets[0] || {};

    return (
        <div className="card" id={mainId}>
            <div className="card-image">
                {background ? (
                    <img src={background} alt={displayName} loading="lazy" />
                ) : (
                    <div style={{
                        width: '100%',
                        height: '255px',
                        backgroundColor: '#ccc',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#555'
                    }}>
                        Нет изображения
                    </div>
                )}
            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            <div className="card-action">
                <button className="btn">Купить</button>
                <span className="right" style={{fontSize: '1.8rem'}}>{finalPrice} руб.</span>
            </div>
        </div>
    );
}

export { GoodsItem }