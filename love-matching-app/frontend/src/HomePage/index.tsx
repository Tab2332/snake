import React, { useState, useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import './styles.css';

interface Feedback {
  id: number;
  content: string;
  author: string;
}

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);
  
  // 示例用户反馈数据
  const feedbacks: Feedback[] = [
    {
      id: 1,
      content: "这个应用帮我找到了真爱！非常感谢！",
      author: "张先生"
    },
    {
      id: 2,
      content: "契合度测试很有趣，结果也很准确。",
      author: "李女士"
    },
    {
      id: 3,
      content: "界面简洁易用，推荐算法很棒！",
      author: "王小姐"
    }
  ];

  // 自动轮播用户反馈
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeedbackIndex((prev) => 
        prev === feedbacks.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // 处理导航
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      {/* 欢迎信息部分 */}
      <header className="welcome-section">
        <h1>寻找真爱</h1>
        <p>基于科学的匹配算法，帮助你找到命中注定的那个人</p>
      </header>

      {/* 导航链接部分 */}
      <nav className="nav-links">
        <button className="nav-button" onClick={() => handleNavigation('/login')}>登录</button>
        <button className="nav-button" onClick={() => handleNavigation('/register')}>注册</button>
        <button className="nav-button" onClick={() => handleNavigation('/profile')}>个人资料</button>
      </nav>

      {/* 契合度测试入口 */}
      <section className="compatibility-test">
        <h2>开始你的寻爱之旅</h2>
        <p>通过我们精心设计的契合度测试，找到最适合你的伴侣</p>
        <button className="test-button">
          立即开始测试
        </button>
      </section>

      {/* 用户反馈展示 */}
      <section className="feedback-section">
        <h2>用户反馈</h2>
        <div className="feedback-carousel">
          <div className="feedback-card">
            <p>"{feedbacks[currentFeedbackIndex].content}"</p>
            <span className="author">- {feedbacks[currentFeedbackIndex].author}</span>
          </div>
          <div className="carousel-dots">
            {feedbacks.map((_, index) => (
              <span 
                key={index}
                className={`dot ${index === currentFeedbackIndex ? 'active' : ''}`}
                onClick={() => setCurrentFeedbackIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 