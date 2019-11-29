import { Form, Field } from '@leveluptuts/fresh'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const ADD_HABIT = gql`
	mutation addHabit($habit: HabitInput) {
		addHabit(habit: $habit) {
			_id
			name
		}
	}
`

function submit(data, addHabit) {
	console.log(data)
	addHabit({
		variables: {
			habit: {
				name: data.habit
			}
		}
	})
}

const HabitForm = () => {

	const [addHabit] = useMutation(ADD_HABIT, {
		refetchQueries: ['getHabits']
	})

	return (
		<Form onSubmit={ (data) => submit(data, addHabit) }>
			<Field>Habit</Field>
		</Form>
	)
}

export default HabitForm

