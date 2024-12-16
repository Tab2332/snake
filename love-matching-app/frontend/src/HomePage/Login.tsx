import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 实现登录逻辑
    console.log('登录信息：', formData);
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h1>登录</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">用户名</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">密码</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">登录</button>
        </form>
        <p className="form-footer">
          还没有账号？
          <span className="link" onClick={() => navigate('/register')}>
            立即注册
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
