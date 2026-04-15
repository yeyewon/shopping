
import products from "../data/products.json"
// import mouse1 from "../assets/mouse.png"
// import keyboard1 from "../assets/keyboard.png"
// import usb1 from "../assets/usb.png"
// import monitor1 from "../assets/monitor.png"
import { useParams } from "react-router-dom"
import { imageMap } from "./ProductList"

// 이미지 파일 저장 파일 정의
// const imageMap: Record<string, string> = {
//     'mouse.png': mouse1,
//     'keyboard.png': keyboard1,
//     'usb.png': usb1,
//     'monitor.png': monitor1
// }

const ProductInfo = () => {

    const { id } = useParams();

    // id로 상품 찾기
    const product = products.find((p:any) => p.id === Number(id))

    // id가 없는 경우
    if(!product) {
        return <div>상품을 찾을 수 없습니다.</div>
    }

    return (
        <div className="product-info">
            <h2>{product.name}</h2>
            <div className="product-details">
                <img src={imageMap[product.image]} alt={product.name} className="product-img" />
                <div className="product-content">
                    <p>{product.description}</p>
                    <p className="price">가격: {product.price}원</p>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo