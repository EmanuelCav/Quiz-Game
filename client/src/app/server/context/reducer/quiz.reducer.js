import { 
    ALL_QUIZ,
    CREATE_QUIZ,
    GET_QUIZ_USER,
    MY_QUIZ,
    ADD_QUESTION,
    REMOVE_QUIZ,
    JOIN_QUIZ,
} from "../constants/quiz.const";

const quizReducer = (state, action) => {

    switch (action.type) {
        case GET_QUIZ_USER:
            return {
                ...state,
                allQuiz: [],
                myQuiz: [],
                getQuiz: action.payload
            }

        case ALL_QUIZ:
            return {
                ...state,
                allQuiz: action.payload,
                myQuiz: [],
                getQuiz: {}
            }

        case MY_QUIZ:
            return {
                ...state,
                allQuiz: [],
                myQuiz: action.payload,
                getQuiz: {}
            }

        case CREATE_QUIZ:
            return {
                ...state,
                allQuiz: [],
                myQuiz: [...state.allQuiz, action.payload],
                getQuiz: {}
            }

        case ADD_QUESTION:
            return {
                ...state,
                allQuiz: [],
                myQuiz: [...state.myQuiz.map((quiz) => quiz._id === action.payload._id ? action.payload : quiz)],
                getQuiz: {}
            }

        case REMOVE_QUIZ:
            return {
                ...state,
                allQuiz: [],
                myQuiz: [...state.myQuiz.filter((quiz) => quiz.code !== action.payload)],
                getQuiz: {}
            }

        case JOIN_QUIZ:
            return {
                ...state,
                allQuiz: [...state.allQuiz.map(quiz => quiz._id === action.payload._id ? action.payload : quiz)],
                myQuiz: [],
            }
    
        default:
            return state;
    }

}

export default quizReducer