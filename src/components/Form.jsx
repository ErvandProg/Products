import React, { useContext, useState } from 'react';
import { ProductContext } from '../main';

export default function Form() {
	const [img, setImg] = useState('');
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [selectedOption, setSelectedOption] = useState('');

	const { setProductInfo } = useContext(ProductContext);

	function toGive() {
		setProductInfo({ 'img': img, 'name': name, 'price': price, 'category': selectedOption });
	}

	return (
		<div className='w-[250px] h-[240px] flex flex-col items-start justify-start pt-[20px] pl-[20px] pr-[20px] pb-[20px] border border-black mx-auto mt-[60px] mb-[60px]'>
			<div className="flex flex-col gap-[7px] w-[100%]">
				<input type="text" id='img' name='img' placeholder='img' onChange={(e) => { setImg(e.target.value) }} className='text-white placeholder-white w-[100%] bg-[#cccccc] rounded outline-none pl-[8px] pr-[8px] pt-[4px] pb-[4px]' />
				<input type="text" id='name' name='name' placeholder='name' onChange={(e) => { setName(e.target.value) }} className='text-white placeholder-white w-[100%] bg-[#cccccc] rounded outline-none pl-[8px] pr-[8px] pt-[4px] pb-[4px]' />
				<input type="number" id='price' name='price' placeholder='price' onChange={(e) => { setPrice(e.target.value) }} className='text-white placeholder-white w-[100%] bg-[#cccccc] rounded outline-none pl-[8px] pr-[8px] pt-[4px] pb-[4px]' />
			</div>
			<select className='text-white w-[100%] mt-[15px] mb-[15px] bg-[#dcdcdc] rounded' value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
				<option value="">--Please choose an option--</option>
				<option value="Car">Car</option>
				<option value="Apartment">Apartment</option>
				<option value="Other">Other</option>
			</select>
			<button className='w-[200px] h-[32px] rounded-2xl bg-white border-2 border-[#BE4EE6] text-[#BE4EE6] font-medium mx-auto mt-[4px]' onClick={toGive}>Submit</button>
		</div>
	);
}
