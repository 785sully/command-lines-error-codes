import React from 'react';

const classAttributes = {
	'Stack Overflow-er': {
		vitality: 7,
		caffiene: 9,
		mentalElasticity: 5,
		focus: 4,
	},
	'Google-Fu': {
		vitality: 5,
		caffiene: 10,
		mentalElasticity: 4,
		focus: 3,
	},
	'Copy Paster': {
		vitality: 8,
		caffiene: 8,
		mentalElasticity: 3,
		focus: 3,
	},
	'Spaghetti Code-mancer': {
		vitality: 9,
		caffiene: 3,
		mentalElasticity: 2,
		focus: 5,
	},
};

export default function Form({
	character,
	setCharacter,
	availableTalentPoints,
	setAvailableTalentPoints,
	setSubmittedForm,
}) {
	const form = React.createRef();

	function adjustTalentPoints(e, atribute) {
		const inputValue = e.target.value;
		const attributeValue = parseInt(character[`${atribute}`]);
		const availableValue = attributeValue + availableTalentPoints;

		if (inputValue < 1 || inputValue > availableValue) {
			return;
		}
		setAvailableTalentPoints(
			availableTalentPoints - (inputValue - attributeValue)
		);
		setCharacter({
			...character,
			[atribute]: inputValue,
		});
	}
	function setPlayerClass(e) {
		const selectedClass = e.target.value;
		let img = selectedClass.replace(/\s+/g, '-').toLowerCase();
		let imgPath = '/images/' + img + '.png';

		setCharacter({
			...character,
			playerClass: selectedClass,
			vitality: classAttributes[`${selectedClass}`]['vitality'],
			caffiene: classAttributes[`${selectedClass}`]['caffiene'],
			mentalElasticity:
				classAttributes[`${selectedClass}`]['mentalElasticity'],
			focus: classAttributes[`${selectedClass}`]['focus'],
			image: imgPath,
		});
		setAvailableTalentPoints(3);
	}

	return (
		<>
			<div className='nes-container with-title is-centered'>
				<p className='title'>Create your Character</p>

				<form ref={form}>
					<div className='left-side'>
						<img
							src={process.env.PUBLIC_URL + character.image}
							className='player-image'
							alt='player'
						/>
					</div>

					<div className='right-side'>
						<label>
							Enter your Name
							<input
								type='text'
								name='name'
								required
								className='nes-input'
								placeholder='Name'
								value={character.name}
								onChange={(e) => {
									setCharacter({
										...character,
										name: e.target.value,
									});
								}}
							/>
						</label>
						<label>
							Select your Class
							<div className='nes-select'>
								<select
									required
									value={character.playerClass}
									onChange={(e) => {
										setPlayerClass(e);
									}}
								>
									<option
										value=''
										disabled
										defaultValue
										hidden
									>
										Select...
									</option>
									<option value='Google-Fu'>Google-Fu</option>
									<option value='Stack Overflow-er'>
										Stack Overflow-er
									</option>
									<option value='Copy Paster'>
										Copy Paster
									</option>
									<option value='Spaghetti Code-mancer'>
										Spaghetti Code-mancer
									</option>
								</select>
							</div>
						</label>
						<label>
							Select your Editor
							<div className='nes-select'>
								<select
									required
									value={character.editor}
									onChange={(e) => {
										setCharacter({
											...character,
											editor: e.target.value,
										});
									}}
								>
									<option
										value=''
										disabled
										defaultValue
										hidden
									>
										Select...
									</option>
									<option value='Vim'>Vim</option>
									<option value='Emacs'>Emacs</option>
									<option value='VS Code'>VS Code</option>
									<option value='Sublime Text'>
										Sublime Text
									</option>
								</select>
							</div>
						</label>
						<label>
							Select your Language
							<div className='nes-select'>
								<select
									required
									value={character.language}
									onChange={(e) => {
										setCharacter({
											...character,
											language: e.target.value,
										});
									}}
								>
									<option
										value=''
										disabled
										defaultValue
										hidden
									>
										Select...
									</option>
									<option value='javascript'>
										JavaScript
									</option>
									<option value='PHP'>PHP</option>
									<option value='Java'>Java</option>
									<option value='C++'>C++</option>
								</select>
							</div>
						</label>
						<p>Available Talent Points: {availableTalentPoints}</p>
						<label>
							Vitality
							<input
								type='number'
								name='vitality'
								required
								className='nes-input'
								value={character.vitality}
								onChange={(e) => {
									adjustTalentPoints(e, 'vitality');
								}}
							/>
						</label>
						<label>
							Caffiene
							<input
								type='number'
								name='caffiene'
								required
								className='nes-input'
								value={character.caffiene}
								onChange={(e) => {
									adjustTalentPoints(e, 'caffiene');
								}}
							/>
						</label>
						<label>
							Mental Elasticity
							<input
								type='number'
								name='mentalElasticity'
								required
								className='nes-input'
								value={character.mentalElasticity}
								onChange={(e) => {
									adjustTalentPoints(e, 'mentalElasticity');
								}}
							/>
						</label>
						<label>
							Focus
							<input
								type='number'
								name='focus'
								required
								className='nes-input'
								value={character.focus}
								onChange={(e) => {
									adjustTalentPoints(e, 'focus');
								}}
							/>
						</label>
						<button
							type='button'
							className='nes-btn is-success'
							onClick={() => {
								// console.log({ character });
								form.current.reportValidity() &&
									setSubmittedForm(true);
							}}
						>
							Create Character
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
