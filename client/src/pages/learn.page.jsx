import { Fragment } from 'react'
import Title from '../components/pages/learn/title'
import Lesson from '../components/pages/learn/lesson'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLessons } from '../store/lessons/actions'
import { isInitialState } from '../constants/state.enum'

const LearnPage = () => {
  const dispatch = useDispatch()

  const { lessons: { lessons }, feedback: {isLoading} } = useSelector(state => state)

  useEffect(() => {
    isInitialState(lessons) && !isLoading && dispatch(fetchLessons())
  }, [lessons, dispatch, isLoading])

  const showSeparator = (idx, lesson) => (
    ((idx - 1 !== lesson.length - 1) && (!lesson.isDone && lessons[idx - 1].isDone))
  )

  return (
    <section className='container-lg d-flex justify-content-center flex-column text-center'>
      <Title />
      {!isInitialState(lessons) && lessons.map((lesson, idx) => (
        <Fragment>
          <Lesson key={idx} idx={idx} title={lesson.title} shortDescription={lesson.shortDescription}
                  difficulty={lesson.difficulty} isDone={lesson.isDone} showSeparator={showSeparator(idx, lesson)} />
          {showSeparator(idx, lesson) ?
            <div className='d-flex flex-row justify-content-between'
                 style={{ width: '87.5%', marginLeft: '45px', marginTop: '4rem' }}>
              <hr className='separator' />
              <span style={{ fontSize: '24px' }}>In order to unlock the next lessons, you must first finish the previous one!</span>
              <hr className='separator' />
            </div> : null}
        </Fragment>

      ))}
    </section>
  )
}

export default LearnPage
