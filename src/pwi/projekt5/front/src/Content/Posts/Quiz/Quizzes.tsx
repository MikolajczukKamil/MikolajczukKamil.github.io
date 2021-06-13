import { useEffect, useState } from "react"
import axios from "axios"
import { IPost, Post } from "../Posts"
import { api } from "../../../api"
import { Portal } from "../../../Components/Portal"
import classes from "./Quiz.module.scss"
import {
  Translate,
  translate,
  TranslationsContext,
} from "../../../Translations"
import { useContext } from "react"

const quizPost = (lang: string): IPost => ({
  id: -2,
  url: "#",
  img: "./img/quiz.jpg",
  imgAlt: translate("QuizTitle", lang),
  title: translate("QuizTitle", lang),
  description: translate("QuizDescription", lang),
})

interface QuizSchema {
  id: number
  name: string
  image: string
}

interface Option {
  id: number
  name: string
}

interface QuestionSchema {
  id: number
  name: string
  image: string
  answer: number | null
  options: Option[]
}

interface Quiz {
  id: number
  name: string
  image: string
  questions: QuestionSchema[]
}

interface QuizResult {
  correct: number
  errors: number
}

export function Quizzes() {
  const [open, setOpen] = useState(false)
  const [quizzes, setQuizzes] = useState<QuizSchema[]>([])
  const [loading, setLoading] = useState(false)
  const [quiz, setQuiz] = useState<Quiz | null>(null)
  const [result, setResult] = useState<QuizResult | null>(null)
  const { lang } = useContext(TranslationsContext)

  useEffect(() => {
    axios.get<QuizSchema[]>(`${api}quizzes?lang=${lang}`).then((quizzes) => {
      setQuizzes(quizzes.data)
    })
  }, [open, lang])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setQuizzes([])
    setQuiz(null)
    setResult(null)
  }

  const handleOpenQuiz = (schema: QuizSchema) => {
    setLoading(true)

    axios.get<Quiz>(`${api}quiz?id=${schema.id}`).then(({ data }) => {
      const quiz = {
        ...data,
        questions: data.questions.map((q) => ({
          ...q,
          answer: null,
        })),
      }

      setQuiz(quiz)

      setLoading(false)
    })
  }

  const handleCheckQuiz = () => {
    axios
      .post<QuizResult>(`${api}quiz`, {
        body: {
          quizId: quiz?.id,
          questions: quiz?.questions.map((ques) => ({
            questionId: ques.id,
            answer: ques.answer,
          })),
        },
      })
      .then((res) => {
        setResult(res.data)

        setLoading(false)
      })
  }

  return (
    <>
      <Post post={quizPost(lang)} onClick={handleOpen} />

      <Portal
        title={translate("QuizTitle", lang)}
        open={open}
        handleClose={handleClose}
      >
        {loading && (
          <p>
            <Translate>Loading</Translate> ...
          </p>
        )}
        {quiz === null ? (
          <>
            <h2>
              <Translate>AvailableQuizzes</Translate>
            </h2>

            {quizzes.length === 0 && (
              <p>
                <Translate>Loading</Translate> ...
              </p>
            )}

            {quizzes.map((q) => (
              <div
                key={q.id}
                className={classes.quiz}
                onClick={() => handleOpenQuiz(q)}
              >
                <div
                  style={{ backgroundImage: `url(${q.image})` }}
                  className={classes.image}
                ></div>
                <div>{q.name}</div>
              </div>
            ))}
          </>
        ) : result === null ? (
          <>
            <h2>{quiz.name}</h2>

            {quiz.questions.map((quiz, index) => (
              <Question
                index={index + 1}
                schema={quiz}
                selectAnswer={(schema: QuestionSchema, answer: number) =>
                  setQuiz((quiz) =>
                    quiz === null
                      ? quiz
                      : {
                          ...quiz,
                          questions: quiz.questions.map((q) =>
                            q.id === schema.id ? { ...q, answer } : q
                          ),
                        }
                  )
                }
                key={quiz.id}
              />
            ))}

            <button
              disabled={!quiz.questions.every((q) => q.answer)}
              className={classes.sendBtn}
              onClick={handleCheckQuiz}
            >
              <Translate>Check</Translate>
            </button>
          </>
        ) : (
          <>
            <h2>
              <Translate>QuizResult</Translate>
            </h2>
            <h3>{quiz.name}</h3>

            <img src={quiz.image} alt="" className={classes.quizImg} />

            <p>
              {result.correct} / {result.correct + result.errors} (
              {Math.round(
                (result.correct * 100) / (result.correct + result.errors)
              )}{" "}
              %)
            </p>

            {Math.round(
              (result.correct * 100) / (result.correct + result.errors)
            ) <= 50 ? (
              <p>
                <Translate>Bad</Translate> 🤫
              </p>
            ) : (
              <p>
                <Translate>Good</Translate> 😀
              </p>
            )}
          </>
        )}
      </Portal>
    </>
  )
}

interface QuestionProps {
  index: number
  schema: QuestionSchema
  selectAnswer: (schema: QuestionSchema, id: number) => void
}

function Question({ index, schema, selectAnswer }: QuestionProps) {
  return (
    <>
      <h3>
        <Translate>QuestionNo</Translate> {index}
      </h3>
      <h4>{schema.name}</h4>

      <div className={classes.answers}>
        {schema.options.map((o) => (
          <button
            key={o.id}
            className={
              classes.answer +
              " " +
              ((o.id === schema.answer && classes.active) || "")
            }
            onClick={() => selectAnswer(schema, o.id)}
          >
            {o.name}
          </button>
        ))}
      </div>
    </>
  )
}
