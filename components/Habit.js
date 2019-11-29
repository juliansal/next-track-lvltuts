import HabitButton from './HabitButton'
import HabitArticle from './habitsStyles'

function getLast5Days() {
	const dates = '01234'.split('').map(day =>{
		let tempDate = new Date()
		tempDate.setDate(tempDate.getDate() - day)

		return tempDate
	})

	return dates
}

const Habit = ({ habit, index }) => {
	const dates = getLast5Days()

	return (
		<HabitArticle>
			{ console.log(getLast5Days()) }
			<h3>{ habit.name }</h3>
			<div className="buttons">
			{ dates.map(date => (
				<HabitButton 
					key={ date.getTime() } 
					date={ date }
					habitId={ habit._id }
					events={ habit.events }
				/>
			)) }
			</div>
		</HabitArticle>
	)
}
export default Habit
