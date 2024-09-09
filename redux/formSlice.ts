// src/reducers/formSlice.ts

import { Prisma, QuestionType, SurveyFormAnswer} from '@prisma/client';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useEffect } from 'react';

type SurveyFormQuestion = Prisma.SurveyFormQuestionGetPayload<{
    include:{
        choices:true,
      options:true
     }
  }>;

interface FormState {
    id: string;
    title: string;
    desc: string;
    questionList:SurveyFormQuestion[];
    activeQuestionIndex: number | null;
}

const initialState: FormState = {
    id: "",
    title: 'Untitled Form',
    desc: '',
    questionList: [],
    activeQuestionIndex: null,
};


const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setInitialState(state, action: PayloadAction<SurveyFormQuestion[]>) {
            state.questionList = action.payload;
        },
      setTitle(state, action: PayloadAction<string>) {
        state.title = action.payload;
      },
      setDesc(state, action: PayloadAction<string>) {
        state.desc = action.payload;
      },
      updateQuestionTitle(state, action: PayloadAction<{ index: number; title: QuestionType }>) {
        const { index, title } = action.payload;
        state.questionList[index].title = title;
      },
      updateQuestionType(state, action: PayloadAction<{ index: number; type: QuestionType }>) {
        const { index, type } = action.payload;
        state.questionList[index].type = type;
      },
      updateQuestionValue(state, action: PayloadAction<{ index: number | null; value: SurveyFormAnswer[] }>) {
          const { index, value } = action.payload;
          if (index !== null) {
            state.questionList[index].choices=value;
            
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
