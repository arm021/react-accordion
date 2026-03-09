import React, { useState } from 'react';
import './App.css';
import { FcExpand, FcCollapse } from 'react-icons/fc';

const Accordion = ({title, body}) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	}

  return (
    <div className={isOpen ? 'accordion-item my-3 active'  : 'accordion-item my-3'} onClick={toggleAccordion}>
			<div className='accordion-header p-3'>
				<strong>{title}</strong>
				<p>{isOpen ? <FcCollapse /> : <FcExpand />} </p>
			</div>

			{isOpen && 
				<div className='accordion-body p-4'>
					<p>{body}</p>
				</div>}
		</div>
  )
}

export default Accordion