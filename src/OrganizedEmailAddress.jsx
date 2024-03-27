const OrganizedEmailAddress = ({emailAddress}) => {
  return (
    <ul>
      {
        emailAddress.map((currentEmail) => {
          return <li key={currentEmail.id}>{currentEmail.email}</li>
        })
      }
    </ul>
  )

}

export default OrganizedEmailAddress;