import React, { useState, useEffect } from "react";
import { Box, Card, Container, Button } from "@mui/material";
import { Shuffle, FlipToBack, FlipToFront } from '@mui/icons-material';
import "./Flashcards.css";


function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function Flashcards({ dictionary }) {
	const [frontList, setFrontList] = useState(Object.keys(dictionary));
	const [backList, setBackList] = useState(Object.values(dictionary));
	const [item, setItem] = useState({ "front": "", "back": "" });
	const [isFlipped, setIsFlipped] = useState(false);

	const selectRandomItem = async () => {
		const randomIndex = Math.floor(Math.random() * frontList.length);
		const newFrontItem = frontList[randomIndex];
		const newBackItem = backList[randomIndex];
		// If the flashcard was flipped, replace the front item, flip the flashcard to the front,
		// and then replace the back item. The flip animation takes 600ms, so replacing
		// the back item after 300ms should be seamless at that point.
		if (isFlipped) {
			setItem({ "front": newFrontItem, "back": item.back });
			setIsFlipped(false);
			await delay(300);
		}
		setItem({ "front": newFrontItem, "back": newBackItem });
		const newFrontList = frontList.filter((_, index) => index !== randomIndex);
		const newBackList = backList.filter((_, index) => index !== randomIndex);
		if (newFrontList.length === 0) {
			setFrontList(Object.keys(dictionary));
			setBackList(Object.values(dictionary));
		} else {
			setFrontList(newFrontList);
			setBackList(newBackList);
		}
	};

	const flipFlashcard = () => {
		setIsFlipped(!isFlipped);
	}

	useEffect(() => {
		selectRandomItem();
		// eslint-disable-next-line
	}, []);

	return <>
		<Container maxWidth="sm">
			<Box mt={5} sx={{ textAlign: "center" }}>
				<section className={isFlipped ? 'flashcard-flipped' : ''} onClick={flipFlashcard}>
					<div class="flashcard">
						<div class="flashcard-inner">
							<div class="flashcard-front">
								<Card mt={5} mb={5} variant="outlined" sx={{
									fontSize: "150px", width: "100%", height: "100%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center"
								}}>
									{item.front}
								</Card>
							</div>
							<div class="flashcard-back">
								<Card mt={5} mb={5} variant="outlined" sx={{
									fontSize: "150px", width: "100%", height: "100%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center"
								}}>
									{item.back}
								</Card>
							</div>
						</div>
					</div>
				</section>
				<section>
					<Button
						variant="contained"
						size="large"
						sx={{ m: 2 }}
						endIcon={<Shuffle />}
						onClick={selectRandomItem}
					>
						Next
					</Button>
					<Button
						variant="outlined"
						size="large"
						sx={{ m: 2 }}
						endIcon={isFlipped ? <FlipToFront /> : <FlipToBack />}
						onClick={flipFlashcard}
					>
						Flip
					</Button>
				</section>
			</Box>
		</Container>
	</>;
}

export default Flashcards;
