const OrganizedNameList = ({ contactName }) => {
  return(
    <ul>
      {
        contactName.map((currentName) => {
          return <li key={currentName.id}>{currentName.name}</li>
        })
      }
    </ul>
  )
}

export default OrganizedNameList;