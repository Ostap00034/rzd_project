import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { Button, StyleSheet, View, Text } from 'react-native'

export default function App() {
	const [isStarted, setIsStarted] = useState(false)
	const [time, setTime] = useState(0)

	useEffect(() => {
		if (isStarted) {
			setTimeout(setTime, 1000, time + 1)
		} else {
			setIsStarted(false)
			setTime(0)
		}
	}, [time, isStarted])

	return (
		<View style={styles.container}>
			<Button
				onPress={() => {
					setIsStarted(!isStarted)
				}}
				title={!isStarted ? 'Начать смену' : 'Закончить смену'}
			/>
			<Text
				style={{
					fontSize: 18,
				}}
			>
				{time}
			</Text>
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
