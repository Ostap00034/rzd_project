import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Button, StyleSheet, View } from 'react-native'

export default function App() {
	const [isStarted, setIsStarted] = useState(false)

	return (
		<View style={styles.container}>
			<Button
				onPress={() => {
					setIsStarted(!isStarted)
				}}
				title={!isStarted ? 'Начать смену' : 'Закончить смену'}
			/>
			<StatusBar style='auto' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
