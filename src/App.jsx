import Section1 from "./components/Section1/Section1";



const App = () => {

  const users = [
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Satisfied',
    },

    {
      img:'https://plus.unsplash.com/premium_photo-1661574605012-f4c023f368fc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Happy',
    },

    {
      img:'https://images.unsplash.com/photo-1636191284490-fff58f369ec6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Content',
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661592899299-a69594743e5d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Joyful',
    },
     {
      img:'https://plus.unsplash.com/premium_photo-1663011465208-a7ae4d411001?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Cheerful',
    }


  ]
  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App
