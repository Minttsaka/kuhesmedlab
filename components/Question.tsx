"use client";

import { Select } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ShortAnswer from "./qtypes/ShortAnswer";
import Paragraph from "./qtypes/Paragraph";
import Edit from "./Edit";
import { RootState } from "@/redux/store";
import { Loader2 } from "lucide-react";
import Options from "./qtypes/Options";
import Rating from "./qtypes/Rating";
import { Prisma } from "@prisma/client";
import { debounce } from "lodash";
import { updateFields } from "@/lib/actions";
import { KeyedMutator } from "swr";

type Form = Prisma.SurveyFormQuestionGetPayload<{
  include: {
    choices: true;
    options: true;
  };
}>;

const Question = ({
  name,
  id,
  mutate,
  index,
  value,
  formId,
  addQuestion,
  handleDelete,
  isActiveQuestion,
  onclick,
}: {
  name: string;
  id: string;
  index: number;
  value: Form ;
  formId: string;
  mutate: KeyedMutator<Form[]>;
  addQuestion: () => void;
  handleDelete: () => void;
  isActiveQuestion: boolean;
  onclick: any;
}) => {
  const { title, type } = value;
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState({})


  const handleInputChange = async( e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
   
  };

  const activeQuestionIndex = useSelector(
    (state: RootState) => state.form.activeQuestionIndex
  );

  const data = [
    {
      title: "Short_Answer",
      file: <ShortAnswer id={id} />,
    },
    {
      title: "Paragraph",
      file: <Paragraph id={id} />,
    },
    {
      title: "Multiple_Choice",
      file: <Options id={id} optionList={value.options} mutate={mutate} />,
    },
    {
      title: "Rating",
      file: <Rating id={id} mutate={mutate} value={value.rating!} />,
    },
  ];

  const qType = data.find((elem) => elem.title === type);

  const saveFormData = async () => {
    if (Object.keys(inputValue).length > 0) {
      await updateFields(id, inputValue )
      mutate()
    }
  };


  return (
    <div
      onClick={onclick}
      className="flex md:flex-row flex-col justify-center items-center w-full max-w-3xl mx-auto "
    >
      <div
        className={`rounded-md my-6 ${
          activeQuestionIndex === index
            ? "border-l-4 border-blue-900"
            : "border border-gray-300"
        } bg-white max-w-2xl shadow w-full grid place-items-center lg:place-items-start lg:ml-10 mx-auto`}
      >
        <div className="flex gap-2 items-center justify-center text-gray-400 font-bold mt-2 ml-2 rounded-xl p-2 bg-gray-100">
          {index + 1} /
          <span className="font-light text-xs">Created by {name}</span>
        </div>
        {loading && (
          <Loader2 className="animate-spin h-4 w-4 text-green-500" />
        )}
        <div className="w-full md:px-6 px-2 flex md:flex-row flex-col md:justify-between justify-center items-center gap-8 py-6">
        <input
          type="text"
          name="title"
          defaultValue={title}
          onChange={(handleInputChange)}
          onBlur={saveFormData}
          placeholder="Question"
          required
          className="text-base px-4 outline-none capitalize border-b bg-gray-100 focus:border-b-2 border-gray-400 pt-3 pb-2 w-full focus:border-[#29A0B1]"
        />
          <Select
            placeholder="Select Question Type"
            className="w-full"
            onChange={async(e) =>{
              await updateFields(id, { type:e } )
              mutate()
            }}
            value={type}
            options={[
              { value: "Short_Answer", label: "Short Answer" },
              { value: "Paragraph", label: "Paragraph" },
              { value: "Multiple_Choice", label: "Multiple Choice" },
              { value: "Rating", label: "Rating" },
            ]}
          />
        </div>
        {qType && <div className="">{qType.file}</div>}
      </div>
      {isActiveQuestion && (
        <Edit
          handleAdd={addQuestion}
          show
          mutate={mutate}
          id={formId}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Question;
