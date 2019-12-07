import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'
import Habits from './habits'

export const habitsResolvers = {
	Query: {
		async habits() {
			try {
				return await Habits.find()
			} catch (err) {
				console.log(err)
			}
		}
	},

	Date: new GraphQLScalarType({
		name: "Date",
		description: "Date custom scalar",
		parseValue(value) {
			return new Date(value) //value from client
		},
		serialize(value) {
			return value.getTime() //value sent to client
		},
		parseLiteral(ast) {
			if (ast.kind === Kind.INT) {
				return new Date(ast.value)
			}
			return null
		}
	})
}
