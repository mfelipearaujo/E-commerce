import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Room,
    X,
} from "@mui/icons-material"
import React from "react"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1``

const Description = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #ffffff;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#d4f6ff" })}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Nerd Vault</Logo>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ac ipsum mattis, dignissim nisl sit amet, consequat
                    sapien. Proin vehicula quam vitae ultricies pretium. Morbi
                    non pharetra risus, ac pulvinar quam. Vivamus gravida congue
                    tellus, ac blandit libero porta eget. Nunc porttitor diam
                    eget velit venenatis vulputate.
                </Description>
                <SocialContainer>
                    <SocialIcon color='3b5999'>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color='e4405f'>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color='000000'>
                        <X />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Girls</ListItem>
                    <ListItem>Boys</ListItem>
                    <ListItem>Kids</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} />
                    Address Info
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} />
                    +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} />
                    contact@nerdvault.com
                </ContactItem>
                <Payment src='images/payment.png' />
            </Right>
        </Container>
    )
}

export default Footer
