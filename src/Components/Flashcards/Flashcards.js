import React, { useState, useEffect } from "react";
import { Box, Card, Container, Button } from "@mui/material";
import { Shuffle, FlipToBack, FlipToFront } from '@mui/icons-material';
import "./Flashcards.css";


function Flashcards({ dictionary }) {
	const [frontList, setFrontList] = useState(Object.keys(dictionary));
	const [backList, setBackList] = useState(Object.values(dictionary));
	const [item, setItem] = useState({ "front": "", "back": "" });
	const [isCardFlipped, setIsCardFlipped] = useState(false);

	const selectRandomItem = () => {
		const randomIndex = Math.floor(Math.random() * frontList.length);
		const newFrontItem = frontList[randomIndex];
		const newBackItem = backList[randomIndex];
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
		setIsCardFlipped(!isCardFlipped);
	}

	useEffect(() => {
		selectRandomItem();
		// eslint-disable-next-line
	}, []);

	return <>
		<Container maxWidth="sm">
			<Box mt={5} sx={{ textAlign: "center" }}>
				<section className={isCardFlipped ? 'flashcard-flipped' : ''} onClick={flipFlashcard}>
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
						endIcon={isCardFlipped ? <FlipToFront /> : <FlipToBack />}
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
