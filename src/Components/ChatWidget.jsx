import {useState, useEffect} from 'react'

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages')
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages))
    }
  }, [])

  const toggleChat = () => setIsOpen(!isOpen)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      const newMessages = [...messages, {text: message, sender: 'user'}]
      setMessages(newMessages)
      setMessage('')
      localStorage.setItem('chatMessages', JSON.stringify(newMessages))
    }
  }

  return (
    <div>
      <div className='fixed bottom-5 right-5 z-50'>
        <button
          onClick={toggleChat}
          className='bg-blue-500 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl shadow-lg hover:bg-blue-600 transition-colors'
        >
          💬
        </button>
      </div>
      <div
        className={`fixed bottom-20 right-5 w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col transition-transform duration-300 ${
          isOpen ? 'transform translate-y-0' : 'transform translate-y-full'
        }`}
        style={{visibility: isOpen ? 'visible' : 'hidden'}}
      >
        <div className='bg-blue-500 text-white p-3 rounded-t-lg flex justify-between items-center'>
          <h3 className='font-bold'>Udevs</h3>
          <button onClick={toggleChat} className='text-xl'>
            &times;
          </button>
        </div>
        <div className='flex-grow p-3 overflow-y-auto'>
          <p className='text-gray-600'>How can we help you?</p>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 my-2 rounded-lg ml-6 ${
                msg.sender === 'user' ? 'bg-blue-200 self-end' : 'bg-gray-200 self-start'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className='p-3 border-t'>
          <input
            type='text'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Введите сообщение...'
            className='w-full p-2 border rounded'
          />
        </form>
      </div>
    </div>
  )
}

export default ChatWidget
