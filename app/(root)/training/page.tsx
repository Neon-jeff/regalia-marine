import { TrainingHeader, Trainings } from '@/components/training-page'
import React from 'react'

const TrainingPage = () => {
  return (
    <div className='font-[family-name:var(--font-geist-sans)] font-thin'>
      <TrainingHeader/>
      <Trainings/>
    </div>
  )
}

export default TrainingPage
