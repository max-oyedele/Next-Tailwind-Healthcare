const Contact = () => {
  const ways = [
    {
      type: 'phone',
      icon: '/icons/generic/phone.svg',
      name: '888-217-1047',
      desc: 'Monday to Friday from 9:00AM to 5:30PM(PST)'
    },
    {
      type: 'form',
      icon: '/icons/generic/pencil.svg',
      name: 'Contact Form',
      desc: 'We are three Monday to Friday and we\'ll do our best to answer within 48hours.'
    },
    {
      type: 'chat',
      icon: '/icons/generic/chat.svg',
      name: 'Live Chat',
      desc: 'Our team will be happy to answer all your questions regarding or products and services via Live chat.'
    }
  ]

  const questions = [
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      answer: ''
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      answer: ''
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      answer: ''
    },
    {
      question: 'Lorem ipsum dolor sit amet',
      answer: ''
    },
    {
      question: 'Lorem ipsum dolor sit amet',
      answer: ''
    },
    {
      question: 'Who is a candidate for it?',
      answer: ''
    }
  ]

  return (
    <div className="px-6 md:px-36 flex flex-col items-center text-grayscale-100">
      <span className="block w-11/12 md:w-1/2 text-2xl text-center font-bold mt-16">Looking for the fastest way to have all your questions answered?</span>
      <span className="block w-11/12 md:w-1/2 text-sm text-center mt-10">We want to hear from you. Whether you've got questions on Because Health product, your delivery or a suggestion for how we can improve.</span>
      <div className="w-full sm:grid sm:grid-cols-3 sm:gap-x-10 mt-10">
        {
          ways.map((item, index) => (
            <div key={index} className="bg-gray-100 w-full flex flex-col p-4 mt-4">
              <img src={item.icon} alt={item.name} className="w-6 h-6"/>
              <span className="text-md font-bold uppercase mt-6">{item.name}</span>
              <span className="text-sm mt-6">{item.desc}</span>
            </div>
          ))
        }
      </div>
      <span className="block w-11/12 md:w-1/2 text-md text-center mt-16">Have you already clicked through our FAQ section to see if you can find the answer to your question there?</span>
      <div className="w-full md:w-1/2 mt-10">
        {
          questions.map((item, index) => (
            <div key={index}>
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm font-bold">{item.question}</span>
                <button><img src="/icons/action/chevron_down.svg" alt="chevron_down" /></button>
              </div>
              <hr className="border-gray-300 my-6" />
            </div>
          ))
        }
      </div>
      <div className="w-full md:w-1/2 my-10">
        <CForm />
      </div>
    </div>
  )
}

const CForm = () => {
  return (
    <div>
      <div className="sm:grid sm:grid-cols-2 sm:gap-x-4">
        <input name="firstname" placeholder="First Name" className="w-full h-10 border border-gray-300 rounded-md mt-4 p-2" />
        <input name="lastname" placeholder="Last Name" className="w-full h-10 border border-gray-300 rounded-md mt-4 p-2" />
      </div>
      <input name="email" placeholder="Email" className="w-full h-10 border border-gray-300 rounded-md mt-4 p-2" />
      <textarea name="message" placeholder="Message" className="w-full h-32 border border-gray-300 rounded-md mt-4 p-2" />

      <div className="flex items-center mt-4">
        <input id='subscribe' type="checkbox" className="cursor-pointer" />
        <label htmlFor="subscribe" className="text-sm text-grayscale-100 cursor-pointer ml-1">Subscribe to the Because Health Newsletter</label>
      </div>
      <button className="btn btn-primary h-10 my-6">Send Contact Request</button>
      <span className="text-xs">By entering my data and pressing the button "Send contact request" I agree to my e-mail address and my name being used to answer my contact request.</span>
    </div>
  )
}

export default Contact