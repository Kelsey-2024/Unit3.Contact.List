
const OrganizedPhoneNumber = ({ phoneNumber }) => {
  return(
    <ul>
      {
        phoneNumber.map((currentPhoneNumber) =>{
          return <li key={currentPhoneNumber.id}>{currentPhoneNumber.phone}</li>
        })
      }
    </ul>
  )
}

export default OrganizedPhoneNumber;