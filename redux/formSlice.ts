// src/reducers/formSlice.ts

import { QuestionType} from '@prisma/client';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type SurveyFormQuestion = {
  id: string;
  title: string;
  image: string | null;
  type: QuestionType;
  formId: string;
  choices:string[]
  author: string;
  createdAt: Date;
}

interface FormState {
    id: string;
    title: string;
    desc: string;
    questionList: SurveyFormQuestion[];
    activeQuestionIndex: number | null;
}

const initialState: FormState = {
    id: "",
    title: 'Untitled Form',
    desc: '',
    questionList: [],
    activeQuestionIndex: null,
};

interface QuestionResponse {
    // Define the structure of the expected response
    id: string;
    formId: string;
    question: string;
    // Add other fields as necessary
  }

// Async thunk for adding a question
export const addQuestion = createAsyncThunk(
    'form/addQuestion',
    async (formId: string, { rejectWithValue }) => {
        try {
            const response = await axios.post(`/api/question/`, { formId });
            return response.data; // Return the newly created question
        } catch (error) {
            return rejectWithValue(error|| 'Failed to add question');
        }
    }
);

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setInitialState(state, action: PayloadAction<SurveyFormQuestion[]>) {
            state.questionList = action.payload;
        },
        setTitle(state, action: PayloadAction<{ id: string; data: string }>) {
            state.title = action.payload.data;
            const saveTitle = async () => {
                await axios.post(`/api/form/${action.payload.id}`, {
                    title: action.payload.data,
                });
            };
            saveTitle().catch(console.error);
        },
        setDesc(state, action: PayloadAction<{ id: string; data: string }>) {
            state.desc = action.payload.data;
            const saveDescription = async () => {
                await axios.post(`/api/form/${action.payload.id}`, {
                    description: action.payload.data,
                });
            };
            saveDescription().catch(console.error);
        },
        updateQuestionTitle(state, action: PayloadAction<{ id: string; title: string }>) {
            const { id, title } = action.payload;
            const index = state.questionList.findIndex(question => question.id === id);
            if (index !== -1) {
                state.questionList[index].title = title;
                const updateQuestionTitle = async () => {
                    await axios.post(`/api/question/${id}`, { title });
                };
                updateQuestionTitle().catch(console.error);
            }
        },
        updateQuestionType(state, action: PayloadAction<{ id: string; type: string }>) {
            const { id, type } = action.payload;
            const index = state.questionList.findIndex(question => question.id === id);
            if (index !== -1) {
                state.questionList[index].type = type as QuestionType;
                const updateQuestionType = async () => {
                    await axios.post(`/api/question/${id}`, { type });
                };
                updateQuestionType().catch(console.error);
            }
        },
        updateQuestionValue(state, action: PayloadAction<{ id: string; value: string[] }>) {
            const { id, value } = action.payload;
            const index = state.questionList.findIndex(question => question.id === id);
            if (index !== -1) {
                state.questionList[index].choices = value;
            }
        },
        deleteQuestion(state, action: PayloadAction<number>) {
            const index = action.payload;
            state.questionList.splice(index, 1);
            if (state.activeQuestionIndex !== null) {
                state.activeQuestionIndex = index === state.questionList.length ? index - 1 : null;
            }
        },
        setActiveQuestionIndex(state, action: PayloadAction<number | null>) {
            state.activeQuestionIndex = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addQuestion.fulfilled, (state, action: PayloadAction<SurveyFormQuestion>) => {
                state.questionList.push(action.payload);
                state.activeQuestionIndex = state.questionList.length - 1;
            })
            .addCase(addQuestion.rejected, (state, action) => {
                console.error('Failed to add question:', action.payload);
            });
    },
});

export const {
    setInitialState,
    setTitle,
    setDesc,
    updateQuestionTitle,
    updateQuestionType,
    updateQuestionValue,
    deleteQuestion,
    setActiveQuestionIndex,
} = formSlice.actions;

export default formSlice.reducer;
