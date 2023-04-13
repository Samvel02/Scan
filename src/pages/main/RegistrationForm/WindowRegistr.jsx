import axios from 'axios';
import { useState } from 'react';
import InputMask from "react-input-mask";

function WindowRegistr() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegistrationSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost/reg.php', {
        email: email,
        phone: phone,
        password: password
      })
      .then(function (response) {
        console.log(response.data);
        if (response.data.status === 'success') {
          // обработка успешной регистрации
        } else {
          // обработка ошибки
        }
      })
      .catch(function (error) {
        console.log(error);
        // обработка ошибки
      });
  };
  
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost/reg.php', {
        email: email,
        password: password
      })
      .then(function (response) {
        console.log(response.data);
        if (response.data.status === 'success') {
          // обработка успешной авторизации
        } else {
          // обработка ошибки
        }
      })
      .catch(function (error) {
        console.log(error);
        setError('Неверный email или пароль');
      });
  };
  
  const [loginVisible, setLoginVisible] = useState(false);

  const handleLoginVisible = () => {
    setLoginVisible(true);
  };

  const handleRegistrationVisible = () => {
    setLoginVisible(false);
  };

  return (
    <>
      {loginVisible ? (
        <>
          <h2>Вход</h2>
          <form onSubmit={handleLoginSubmit} action="http://localhost/reg.php" method="post">
            <label>
              Email:
              <input type="email" name="email" value={email} onChange={handleEmailChange} required />
            </label>
            <label>
              Password:
              <input type="password" name="password" value={password} onChange={handlePasswordChange} required />
            </label>
            <button onClick={handleLoginVisible} type="submit">Войти</button>
          </form>
          {/* <button onClick={handleRegistrationVisible}>Зарегистрироваться</button> */}
        </>
      ) : (
        <>
          <form onSubmit={handleRegistrationSubmit} action="http://localhost/reg.php" method="post">
            <div>
              <label className='label'>
                Email:
                <input 
                  className='input-password'
                  type="email" 
                  name="email" 
                  value={email} 
                  onChange={handleEmailChange} 
                  required />
              </label>
            </div>
            <div style={{ marginTop: '20px'}}>
              <label>
                Номер телефона:
                <InputMask
                  mask="8 (999) 999-99-99"
                  value={phone}
                  name='phone'
                  onChange={handlePhoneChange}
                  className="input-password"
                  required
                />          
              </label>
            </div>
            <div style={{ marginTop: '20px'}}>
              <label>
                Password:
                <input 
                  className='input-password'
                  type="password" 
                  name="password" 
                  value={password} 
                  onChange={handlePasswordChange} 
                  required 
                />
                  {error && <div style={{ color: "red" }}>{error}</div>}
              </label>
            </div>
            <div>
              <button 
                type="submit"
                className="btn-entrance" 
                onClick={handleRegistrationVisible}
                >Зарегистрироваться</button> 
            </div>
            </form>
    </>
  )}
  {error && <div style={{ color: "red" }}>{error}</div>}
</>
);
}

export { WindowRegistr };