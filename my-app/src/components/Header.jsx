import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="header">
      <Link to="/">Home</Link> | 
      <Link to="/cart">Cart</Link> | 
      <button onClick={logout}>Logout</button>
    </header>
  );
}

export default Header;
