import { Spinner } from "react-bootstrap"
import './style.css'


function Loading() {
  return (
    <div className="loading">
      <Spinner animation="border" role="status" variant="primary"  >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}

export default Loading;