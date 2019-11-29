import Habits from './habits-collection'

export const habitsMutations = {
	Mutation: {
		async addHabit(_, { habit }) {
			try {
				return await Habits.create({
					...habit
				})
			} catch (err) {
				console.log(err)
			}
		},

		async addEvent(_, { habitId, date }) {
			try {
				date.setHours(0, 0, 0, 0)
				const habit = await Habits.findByIdAndUpdate({
					_id: habitId,
					'events.date': {
						$ne: date
					}
				}, {
					$addToSet: {
						events: {
							date
						}
					}
				})
				console.log("add event")

				return habit
			} catch (err) {
				console.log(err)
			}
		},

		async removeEvent(_, { habitId, eventId }) {
			try {
				const habit = await Habits.findByIdAndUpdate({
					_id: habitId
				}, {
					$pull: {
						events: {
							_id: eventId
						}
					}
				})
				console.log("remove event")

				return habit
			} catch (err) {
				console.log(err)
			}
		}
	}
}
