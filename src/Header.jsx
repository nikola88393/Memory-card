/* eslint-disable react/prop-types */

const Header = ({ score, bestScore }) => {
  return (
    <header>
      <h1>Memory game</h1>
      <div className="scoreContainer">
        <p>{score}</p>
        <p>{bestScore}</p>
      </div>
    </header>
  );
};
// Header.propTypes = {
//   score: PropTypes.number.isRequired,
//   bestScore: PropTypes.number.isRequired,
// };
export default Header;
