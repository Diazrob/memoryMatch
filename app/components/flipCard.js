import React, { useState } from 'react';
import {
	View, Text, Image, TouchableOpacity,
	StyleSheet
} from 'react-native';
import FlipCard from 'react-native-flip-card';

const Card = () => {
	const [isFlipped, setIsFlipped] = useState(false);

	const toggleFlip = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		<View style={styles.container}>
	
			<FlipCard
				style={[styles.card, styles.shadow]}
				friction={6}
				perspective={100}
				flipHorizontal={false}
				flipVertical={true}
				flip={isFlipped}
				clickable={true}
			>
				{/* Front */}
				<View style={styles.imageContainer}>
					<Text>Front</Text>
				</View>

				{/* Back */}
				<View style={styles.imageContainer}>
            <Text>Back</Text>
        </View>

        <View style={styles.imageContainer}>
            <Text>Side</Text>
        </View>
			</FlipCard>

		
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 30,
	},
	card: {
		width: 300,
		height: 200,
		borderRadius: 30,
		backgroundColor: 'grey',

		// To prevent shadow from overflowing 
		overflow: 'hidden',
	},
	shadow: {
		shadowColor: 'red',
		shadowOpacity: 1,
		shadowRadius: 15,
		shadowOffset: { width: 0, height: 0 },
	},
	imageContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Card;