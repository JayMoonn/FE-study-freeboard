import { useRouter } from "next/router"
import { gql, useQuery } from "@apollo/client"

const FETCH_PRODUCT = gql`
    query fetchProduct($productId : ID){
        fetchProduct(productId:$productId){
            seller
            name
            detail
            price
        }
    }
`

export default function ProductRegistedPage() {

    const router = useRouter()

    const { data } = useQuery(FETCH_PRODUCT, {
        variables: {
            productId: router.query.productId
        }
    })
    console.log(data)

    return (
        <>
            <div>판매자 : {data?.fetchProduct.seller}</div>
            <div>상품명 : {data?.fetchProduct.name}</div>
            <div>상품 설명 : {data?.fetchProduct.detail}</div>
            <div>가격 : {data?.fetchProduct.price}원</div>
        </>
    )
}