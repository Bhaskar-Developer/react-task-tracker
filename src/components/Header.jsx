import Button from "./Button"

const Header = ({ title, addButton, addTaskState }) => {
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button onClick={addButton} color={`${!addTaskState ? "green":"red"}`} text={`${!addTaskState ? "Add":"Close"}`} />
    </header>
  )
}

// Default Props
Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header