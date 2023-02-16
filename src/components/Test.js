import React from 'react'

const Test = () => {
    const [firstName, setFirstName] = React.useState('');
  return (
    <div>
        <input value={firstName}   name="firstName" onChange={e => setFirstName(e.target.value)} />
    </div>
  )
}

export default Test