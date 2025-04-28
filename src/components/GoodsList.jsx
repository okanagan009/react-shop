import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
    const { goods = [] } = props;

    if (!goods.length) {
        return <h3>Пусто</h3>
    }

    return (
        <div className="goods">
            {goods.map(item => {
                console.log(item);
                return <GoodsItem key={item.mainId} {...item} />;
            })}
        </div>
    )
}
export { GoodsList };