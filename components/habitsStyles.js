import styled from '@emotion/styled'

let HabitArticle = styled.article`
	padding: 20px;
	border-radius: 15px;
	margin-bottom: 15px;
	box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1);

	h3 {
		margin-top: 0;
		border-bottom: solid 4px #F56565;
	}

	.habit-btn {
		display: flex;
		flex-direction: column;
		box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
		padding: 10px;
		+ span {
			margin-left: 10px;
		}

		button {
			border: none;
			margin-top: 1rem;
		}
	}

	.buttons {
		display: flex;
	}

`
export default HabitArticle
