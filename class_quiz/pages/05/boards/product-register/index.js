import { useState } from "react"
import { useRouter } from 'next/router'
import { gql, useMutation } from '@apollo/client'

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
    createProduct(seller:$seller, createProductInput:$createProductInput)
    {
        _id
        number
        message
    }
}
`

export default function ProductRegisterPage() {
    const router = useRouter()

    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState()

    const [createProduct] = useMutation(CREATE_PRODUCT)

    const onClickSubmit = async () => {
        const result = await createProduct({
            variables: {
                seller,
                createProductInput: {
                    name,
                    detail,
                    price
                }
            }
        })
        console.log(result.data.createProduct._id)
        alert(result.data.createProduct.message)
        router.push(`/05/boards/product-reigisted/${result.data.createProduct._id}`)
    }

    const onChangeSeller = (event) => {
        setSeller(event.target.value)
    }
    const onChangeName = (event) => {
        setName(event.target.value)
    }
    const onChangeDetail = (event) => {
        setDetail(event.target.value)
    }
    const onChangePrice = (event) => {
        setPrice(Number(event.target.value))
    }


    return (
        <>
            <div>판매자 : <input type="text" onChange={onChangeSeller} /></div>
            <div>상품명 : <input type="text" onChange={onChangeName} /></div>
            <div>상품 내용 : <input type="text" onChange={onChangeDetail} /></div>
            <div>상품 가격 : <input type="number" onChange={onChangePrice} /></div>
            <button onClick={onClickSubmit}>상품 등록하기</button>
        </>
    )
}