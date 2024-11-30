import { useState } from 'react';

const TodoInput = ({ handleAddTodo }) => {
	const [inputValue, setInputValue] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handleOnChange = (e) => {
		const value = e.target.value;
		setInputValue(value);
	};

	const handleOnClick = () => {
		if (inputValue.trim() === '') {
			setErrorMessage('Input cannot be empty');
			setInputValue('');
			return;
		} else {
			setErrorMessage('');
			handleAddTodo(inputValue);
			setInputValue('');
		}
	};
	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
			<div className='input-container'>
				<input
					value={inputValue}
					onChange={handleOnChange}
					type='text'
					placeholder='Add task'
				/>
				<button onClick={handleOnClick}>
					<i className='fa-solid fa-plus'></i>
				</button>
			</div>
			{errorMessage && (
				<label style={{ color: '#B71C1C', fontSize: '12px', display: 'block' }}>
					{errorMessage}
				</label>
			)}
		</div>
	);
};

export default TodoInput;
