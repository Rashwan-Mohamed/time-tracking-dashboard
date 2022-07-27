import React, { useState } from 'react'
import file from './data.json'
import img from './jeremy.png'

function App() {
  const [when, setWhen] = useState('daily')
  const [value, setValue] = useState()
  return (
    <main>
      <section className='first'>
        <div className='img-box'>
          <img src={img} alt='' />
          <div>
            <h6>report for</h6>
            <p>
              jermy <br /> Robson
            </p>
          </div>
        </div>
        <div className='assd'>
          <button
            className={value === 0 && 'look'}
            onClick={() => {
              setWhen('daily')
              setValue(0)
            }}
          >
            daily
          </button>
          <button
            className={value === 1 && 'look'}
            onClick={() => {
              setWhen('weekly')
              setValue(1)
            }}
          >
            weekly
          </button>
          <button
            className={value === 2 && 'look'}
            onClick={() => {
              setWhen('monthly')
              setValue(2)
            }}
          >
            monthly
          </button>
        </div>
      </section>
      {file.map((per, index) => {
        return (
          <article key={index} className={per.title}>
            <div className='item'>
              <h5>
                {per.title} <span>...</span>
              </h5>
              <h3>{per.timeframes[when].current}hrs</h3>
              <p>last week - {per.timeframes[when].previous} hrs</p>
            </div>
          </article>
        )
      })}
    </main>
  )
}

export default App
