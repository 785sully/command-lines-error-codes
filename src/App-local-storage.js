import React, { useState, useEffect } from 'react';
import './styles.css';
import Header from './Header.js';
import Form from './Form.js';
import Message from './Message.js';

// https://www.joshwcomeau.com/react/persisting-react-state-in-localstorage/
function useStickyState(defaultValue, key) {
	const [value, setValue] = useState(() => {
		const stickyValue = window.localStorage.getItem(key);
		return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
	});
	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);
	return [value, setValue];
}

export default function AppLocalStorage() {
	const [submittedForm, setSubmittedForm] = useStickyState(
		false,
		'form-submitted'
	);
	const [availableTalentPoints, setAvailableTalentPoints] = useStickyState(
		3,
		'talent-points'
	);
	const [character, setCharacter] = useStickyState(
		{
			name: '',
			vitality: 5,
			caffiene: 5,
			mentalElasticity: 5,
			focus: 5,
			editor: '',
			language: '',
			playerClass: '',
			motto: '',
			image: '/images/default.png',
		},
		'player-info'
	);

	function getMotto() {
		fetch('https://api.kanye.rest/')
			.then((res) => res.json())
			.then((result) => {
				setCharacter({
					...character,
					motto: result.quote,
				});
			});
	}
	if (!character.motto) {
		getMotto();
	}

	return (
		<>
			<Header />
			{submittedForm ? (
				<Message
					character={character}
					setCharacter={setCharacter}
					setSubmittedForm={setSubmittedForm}
				/>
			) : (
				<Form
					availableTalentPoints={availableTalentPoints}
					setAvailableTalentPoints={setAvailableTalentPoints}
					character={character}
					setCharacter={setCharacter}
					setSubmittedForm={setSubmittedForm}
				/>
			)}
		</>
	);
}
