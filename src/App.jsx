import React from 'react'

const App = () => {
  const btns = [
    { color: 'green', text: 'Button' },
    { color: 'blue', text: 'Button' },
    { color: 'red', text: 'Button' },
  ]

  const colorMap = {
    green: 'bg-green-500 hover:bg-green-700',
    blue: 'bg-blue-500 hover:bg-blue-700',
    red: 'bg-red-500 hover:bg-red-700',
  }

  const bgMap = {
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    red: 'bg-red-500',
  }

  const handleClick = (color) => {
    const container = document.getElementById('container')
    container.classList.remove('bg-green-500', 'bg-blue-500', 'bg-red-500')
    container.classList.add(bgMap[color])
  }

  return (
    <div
      id='container'
      className='h-screen flex justify-center items-center gap-4 transition-colors duration-300'
    >
      {btns.map((btn, index) => (
        <button
          key={index}
          onClick={() => handleClick(btn.color)}
          className={`${colorMap[btn.color]} text-white px-4 py-2 rounded transition duration-300`}
        >
          {btn.text}
        </button>
      ))}
    </div>
  )
}

export default App
