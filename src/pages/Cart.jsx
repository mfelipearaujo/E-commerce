import React from "react"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import styled from "styled-components"
import Footer from "../components/Footer"
import { Add, Remove } from "@mui/icons-material"
import { mobile } from "../responsive"

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px%" })}
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid #000000;
    background-color: #${(props) => (props.type === "filled" ? "d4f6ff" : "ffffff")};
`

const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;
    ${mobile({ flexDirection: "column" })}
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductSize = styled.span``

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductQuantityContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    ${mobile({ margin: "10px" })}
`

const ProductQuantity = styled.span`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`

const ProductPrice = styled.span`
    font-size: 30px;
    font-weight: 200;
`

const Hr = styled.hr`
    background-color: #eeeeee;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    border: 1px solid #000000;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h2`
    font-weight: 400;
`

const SummaryItem = styled.div`
    margin: 10px 0px;
    padding: 0px 5px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    border: ${(props) => props.type === "total" && "1px solid #000000"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid #000000;
    background-color: #d4f6ff;
`

const Cart = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>Your Cart</Title>
                <Top>
                    <TopButton>Continue shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Cart (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type='filled'>Checkout now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src='images/atom_smasher_tshirt_boy.jpg' />
                                <Details>
                                    <ProductName>
                                        <b>Product:</b> T-shirt Atom Smasher
                                    </ProductName>
                                    <ProductId>
                                        <b>Id:</b> 123456789
                                    </ProductId>
                                    <ProductSize>
                                        <b>Size:</b> M
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductQuantityContainer>
                                    <Add />
                                    <ProductQuantity>2</ProductQuantity>
                                    <Remove />
                                </ProductQuantityContainer>
                                <ProductPrice>$ 25.00</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src='images/shazam_tshirt_boy.png' />
                                <Details>
                                    <ProductName>
                                        <b>Product:</b> T-shirt Shazam
                                    </ProductName>
                                    <ProductId>
                                        <b>Id:</b> 987654321
                                    </ProductId>
                                    <ProductSize>
                                        <b>Size:</b> S
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductQuantityContainer>
                                    <Add />
                                    <ProductQuantity>1</ProductQuantity>
                                    <Remove />
                                </ProductQuantityContainer>
                                <ProductPrice>$ 30.00</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 55.00</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>
                                Estimated Shipping
                            </SummaryItemText>
                            <SummaryItemPrice>$ 9.70</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -9.70</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type='total'>
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 55.00</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>Checkout Now</SummaryButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
