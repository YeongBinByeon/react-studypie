import { Link } from 'react-router-dom';

function PageB() {
  return (
    <>
      <div>PageB</div>
      <div>
        <a href="/">move to PageA by a tag</a>
        <br />
        <Link to="/">move to PageA</Link>
      </div>
    </>
  );
}

export default PageB;
