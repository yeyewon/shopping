import products from "../data/products.json"
import mouse1 from "../assets/mouse.png"
import keyboard1 from "../assets/keyboard.png"
import usb1 from "../assets/usb.png"
import monitor1 from "../assets/monitor.png"
import { Link } from "react-router-dom"

// 이미지 파일 저장 파일 정의
export const imageMap: Record<string, string> = {
    'mouse.png': mouse1,
    'keyboard.png': keyboard1,
    'usb.png': usb1,
    'monitor.png': monitor1
}

const ProductList = () => {

    return (
        <div className="product-list">
            <h2>상품 목록</h2>
            <div className="card-container">
                {products.map((product:any) => (
                    <Link key={product.id} to={`/products/${product.id}`}> 
                        <div className="card">
                            {/* imageMap[product.image] -> imageMap[mouse.png] */}
                            <img src={imageMap[product.image]} alt={product.name} className="product-img" />

                            <div className="card-body">
                                <h3 className="card-title">{product.name}</h3>
                                <p className="card-text">가격: {product.price}원</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ProductList