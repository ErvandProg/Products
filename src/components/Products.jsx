import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../main';

export default function Products() {
	const { productInfo, setProductInfo } = useContext(ProductContext);

	const [products, setProducts] = useState([]);

	useEffect(() => {
		if (productInfo) {
			setProducts((prevProducts) => [
				...prevProducts,
				{ ...productInfo, id: prevProducts.length + 1 },
			]);
		}
	}, [productInfo]);

	console.log(products);

	return (
		<div className='w-[100%] h-[600px] flex justify-center'>
			<div className="w-[350px] border-r border-black">
				<h1 className='text-center'>Car</h1>
				<div className="border-t border-black">
					{products.map((el, i) => {
						if (el.category === "Car") {
							return (
								<div className='w-[330px] pt-[30px] pb-[30px] flex justify-center items-center flex-col' key={`item${i}`}>
									<img src={el.img} alt={el.name} className="w-[250px] h-[250px] object-cover" />
									<div>{el.name}</div>
									<div>{el.price}</div>
								</div>
							)
						}
						return null;
					})}
				</div>
			</div>
			<div className="w-[350px] border-r border-black">
				<h1 className='text-center'>Apartment</h1>
				<div className="border-t border-black">
					{products.map((el, i) => {
						if (el.category === "Apartment") {
							return (
								<div className='w-[330px] pt-[30px] pb-[30px] flex justify-center items-center flex-col' key={`item${i}`}>
									<img src={el.img} alt={el.name} className="w-[250px] h-[250px] object-cover" />
									<div>{el.name}</div>
									<div>{el.price}</div>
								</div>
							)
						}
						return null;
					})}
				</div>
			</div>
			<div className="w-[350px]">
				<h1 className='text-center'>Other</h1>
				<div className="w-[100%] border-t border-black">
					{products.map((el, i) => {
						if (el.category === "Other" || el.category === "") {
							return (
								<div className='w-[330px] pt-[30px] pb-[30px] flex justify-center items-center flex-col' key={`item${i}`}>
									<img src={el.img} alt={el.name} className="w-[250px] h-[250px] object-cover" />
									<div>{el.name}</div>
									<div>{el.price}</div>
								</div>
							)
						}
						return null;
					})}
				</div>
			</div>
		</div>
	);
}
