import { Link } from 'react-router-dom';

export default function StartButton() {
  return (
    <div className="start-button">
      <button>
        <Link to={'/actionPage'}>Start</Link>
      </button>
    </div>
  );
}
