import { FaUserCircle } from "react-icons/fa";
import React from "react";
const commentsData = [
  {
    name: "Abhi",
    text: "hello world ",
    replies: [],
  },
  {
    name: "Abhi",
    text: "hello world",
    replies: [
      {
        name: "Abhi",
        text: "hello world",
        replies: [],
      },
      {
        name: "Abhi",
        text: "hello world",
        replies: [
          {
            name: "Abhi",
            text: "hello world",
            replies: [
              {
                name: "Abhi",
                text: "hello world",
                replies: [
                  {
                    name: "Abhi",
                    text: "hello world",
                    replies: [
                      {
                        name: "Abhi",
                        text: "hello world",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Abhi",
                    text: "hello world",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Abhi",
    text: "hello world",
    replies: [],
  },
  {
    name: "Abhi",
    text: "hello world",
    replies: [],
  },
  {
    name: "Abhi",
    text: "hello world",
    replies: [],
  },
  {
    name: "Abhi",
    text: "hello world",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex shadow-sm bg-gray-50 p-2 rounded-lg my-2">
      <FaUserCircle className="h-12 w-12" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="pl-5 border border-l-black border-dotted  ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 ">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
