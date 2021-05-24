import React, { useState } from 'react';
import message from './data/message.json';

export default function Message({ character, setCharacter, setSubmittedForm }) {
	const [showModal, setShowModal] = useState(false);

	let playerText = `${character.name} the ${character.playerClass}, from the mystical land of ${character.editor}. `;
	playerText += message.editor[`${character.editor}`];
	playerText += ' ';
	playerText += message.language[`${character.language}`];

	return (
		<>
			<div className='nes-container with-title'>
				<p className='title'>Your Character's Story</p>
				<p>{playerText}</p>
				<p>Character Motto:</p>
				<p>
					<em>- {character.motto} -</em>
				</p>
				<button
					type='button'
					className='nes-btn is-success'
					onClick={() => {
						setSubmittedForm(false);
						setCharacter({
							...character,
							motto: '',
						});
					}}
				>
					&#8592; Start Over
				</button>
			</div>
			<div className='credits'>
				<i
					className='nes-icon coin is-large'
					onClick={(e) => {
						e.preventDefault();
						setShowModal(true);
					}}
				></i>
				{showModal && (
					<div className='dialog-wrapper'>
						<dialog className='nes-dialog' id='dialog-default' open>
							<p className='title'>Credits:</p>
							<p>
								Character Images: Square-Enix
								<br />
								Ripped by: Ren Ramos
							</p>
							<p>
								<a
									href='https://nostalgic-css.github.io/NES.css'
									target='_blank'
									rel='noreferrer'
								>
									CSS
								</a>
							</p>
							<p>
								<a
									href='https://github.com/ajzbc/kanye.rest'
									target='_blank'
									rel='noreferrer'
								>
									Kanye Rest API
								</a>
							</p>
							<button
								className='nes-btn is-primary'
								onClick={() => {
									setShowModal(false);
								}}
							>
								Close
							</button>
						</dialog>
					</div>
				)}
			</div>
		</>
	);
}
