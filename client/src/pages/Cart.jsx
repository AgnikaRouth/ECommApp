import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 20px;
	${mobile({ padding: '10px' })}
`;

const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`;

const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`;
const TopButton = styled.button`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	border: ${(props) => props.type === 'filled' && 'none'};
	background-color: ${(props) =>
		props.type === 'filled' ? 'black' : 'transparent'};
	color: ${(props) => props.type === 'filled' && 'white'};
`;

const TopTexts = styled.div`
	${mobile({ display: 'none' })}
`;
const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0px 10px;
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({ flexDirection: 'column' })}s
`;

const Info = styled.div`
	flex: 3;
`;

const Product = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({ flexDirection: 'column' })}
`;

const ProductDetail = styled.div`
	flex: 2;
	display: flex;
`;

const Image = styled.img`
	width: 200px;
`;

const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

const ProductAmount = styled.div`
	font-size: 24px;
	margin: 5px;
	${mobile({ margin: '5px 15px' })}
`;

const ProductPrice = styled.div`
	font-size: 30px;
	font-weight: 200;
	${mobile({ marginBottom: '20px' })}
`;

const Hr = styled.hr`
	background-color: #eee;
	border: none;
	height: 1px;
	margin: 35px 0px;
`;

const Summary = styled.div`
	flex: 1;
	border: 0.5px solid lightgray;
	border-radius: 10px;
	padding: 20px;
	height: 50vh;
`;

const SummaryTitle = styled.h1`
	font-weight: 200;
`;

const SummaryItem = styled.div`
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === 'total' && '500'};
	font-size: ${(props) => props.type === 'total' && '24px'};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: black;
	color: white;
	font-weight: 600;
`;

const Cart = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<Title>YOUR BAG</Title>
				<Top>
					<TopButton>CONTINUE SHOPPING</TopButton>
					<TopTexts>
						<TopText>Shopping Bag(2)</TopText>
						<TopText>Your Wishlist (0)</TopText>
					</TopTexts>
					<TopButton type='filled'>CHECKOUT</TopButton>
				</Top>
				<Bottom>
					<Info>
						Info
						<Product>
							<ProductDetail>
								<Image src='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTwm8KdFHJ2xU_H2sa5v9nLexLp1hUH_ExEk9VPWcFbnrBvq3Jd5f-tMPVt8vEv_0To-GSZ2Ogm0aSiLjeC-K1TBF5_uicK_rYbGhAaa0o&usqp=CAE' />
								<Details>
									<ProductName>
										<b>Product:</b> PARTY DRESS
									</ProductName>
									<ProductId>
										<b>ID:</b> 8753987{' '}
									</ProductId>
									<ProductColor color='red' />

									<ProductSize>
										<b>Size:</b>36
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>2</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>$ 10</ProductPrice>
							</PriceDetail>
						</Product>
						<Hr />
						<Product>
							<ProductDetail>
								<Image src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRbK_QKRZZuEEVxx_YMTHM2sd3YHg-RMKBUvm3pZ4MYE-Lqbd9T-LpPRKKtjKf3eRwBw8LKtuq5kaCx0RshOPi51nRMc7CnrWbE9AiVsfBU62Q9HDP8m8TP&usqp=CAE' />
								<Details>
									<ProductName>
										<b>Product:</b> CARGO PANT
									</ProductName>
									<ProductId>
										<b>ID:</b> 875234{' '}
									</ProductId>
									<ProductColor color='black' />

									<ProductSize>
										<b>Size:</b>30
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>2</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>$ 10</ProductPrice>
							</PriceDetail>
						</Product>
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>$ 5.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Estimated Shipping</SummaryItemText>
							<SummaryItemPrice>$ 5.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shipping Discount</SummaryItemText>
							<SummaryItemPrice>$ -5.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type='total'>
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice>$ 10</SummaryItemPrice>
						</SummaryItem>
						<Button>CHECKOUT NOW</Button>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default Cart;
