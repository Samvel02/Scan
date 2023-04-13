import React, { useState } from "react";
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import InputMask from "react-input-mask";
import "./styleLogin.css"
// import { Navigate } from "react-router-dom";
// import { useHistory } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
// import { PrivateUser } from "../../../components/PrivateUser";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const onlyNumbers = inputValue.replace(/[^\d]/g, "");
    if (onlyNumbers.length > 11) {
      setErrorMessage("Введите корректные данные");
      setPhone("");
    } else if (onlyNumbers.length === 11) {
      const firstDigit = onlyNumbers[0];
      const isRussianNumber = firstDigit === "8";
      const isSevenNumber = firstDigit === "7";
      if (!isRussianNumber && !isSevenNumber) {
        setErrorMessage("Введите корректные данные");
        setPhone("");
      } else {
        const formattedPhone =
          (isRussianNumber ? "8" : "+7") +
          ` (${onlyNumbers.slice(1, 4)}) ${onlyNumbers.slice(
            4,
            7
          )}-${onlyNumbers.slice(7, 9)}-${onlyNumbers.slice(9, 11)}`;
        setErrorMessage("");
        setPhone(formattedPhone);
      }
    } else {
      setErrorMessage("");
      setPhone(onlyNumbers);
    }  
  };

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);

    if (value.length === 0) {
      setError("Введите корректные данные");
    }
    else {
      setError("");
    }
  };
  
  
  
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost/reg.php', {
        phone: phone,
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
  

// функция авторизации
  const handleSubmit = async (event) => {
    event.preventDefault();
    // обработка отправки формы

    try {
      const response = await fetch('https://example.com/account/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, password }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('expire', data.expire);
        console.log('Login successful:', data.accessToken, data.expire);
      } else {
        setErrorMessage('Invalid login or password');
      }
    } catch (error) {
      setErrorMessage('An error occurred while logging in');
    }
  }

  const isFormValid = phone.length >= 11 && password;



  // let navigate = useNavigate()
  

 
  return (
      <form onSubmit={handleSubmit} action="http://localhost/reg.php" method="post">
        <div>
          <label className="label">
            Логин или номер телефона:
            <InputMask
              id="phone"
              name="phone"
              mask="8 (999) 999-99-99"
              value={phone}
              onChange={handleInputChange}
              className="input-password"
            />   
              {errorMessage && <div className="error">{errorMessage}</div>}       
          </label>
        </div>
        <div style={{ marginTop: '20px'}}>
          <label className='label'>
            Пароль:
            <input 
            className='input-password ' 
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            />
          </label>
          {error && <div className="error">{error}</div>}
        </div>
        <div className="wrapper-middle-entrance">
          <button 
                to="privateuser"
                className="btn-entrance" 
                type="submit" 
                disabled={!isFormValid}
          >Войти</button>
          <NavLink to="#" className='restore-password'>Восстановить пароль</NavLink>
        </div>
      </form>
  )
}

export {Login}


// Для реализации маски российского номера телефона в окне авторизации на React, 
// можно использовать библиотеку react-input-mask, которая предоставляет удобный API 
// для создания масок в текстовых полях ввода. Для решения задачи необходимо использовать 
// маску "8 (999) 999-99-99", а также добавить логику проверки введенных данных.

// Здесь мы использовали хук useState, чтобы хранить состояние компонента, а также обработчик handleInputChange, 
// который обновляет состояние phone в зависимости от введенных данных. 
// Мы проверяем длину введенной строки и если она больше 11 символов, то выводим ошибку. 
// Если длина строки равна 11 символам, то мы проверяем первый символ и если он равен "8" или "7", 
// то форматируем номер телефона в соответствии с маской и добавляем "+7" перед номером, 
// если первая цифра равна "7". В противном случае выводим ошибку. Если же длина строки меньше 11 символов, 
// то мы просто обновляем состояние phone с введенными цифрами.

// Здесь мы использовали компонент InputMask из библиотеки react-input-mask, чтобы применить маску к полю ввода номера телефона.