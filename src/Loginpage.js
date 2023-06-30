import React from 'react';
import './Loginpage.css';
import Abstract from './image/abstract.png'
import Faceticker from './image/FACETICKER.png'
import GoogleLogo from './image/GoogleLogo.png'
import GoogleText from './image/구글 계정으로 시작하기.png'
import KakaoLogo from './image/KakaoTalk.png'
import KakaoText from './image/카카오 계정으로 시작하기.png'

const Loginpage = () => {
    const handleKakaoLogin = () => {
    // 카카오 로그인 처리 로직 작성
    // 로그인 버튼을 클릭하면 카카오 로그인 API를 호출하거나, 다른 로직을 수행합니다.
    };

    const handleGoogleLogin = () => {
        // 구글 로그인 처리 로직 작성
        // 로그인 버튼을 클릭하면 카카오 로그인 API를 호출하거나, 다른 로직을 수행합니다.
    };

    return (
        <div className='background'>
            <img className='art' src={Abstract} alt='art'></img>
            <img className='facetickertext' src={Faceticker} alt='title'></img>
            <div className='buttons'>
                <button onClick={handleKakaoLogin} className='KakaoButton'>
                    <img src={KakaoLogo} className='kakaologo'></img>
                    <img src={KakaoText} className='kakaotext'></img>
                </button>
                <button onClick={handleGoogleLogin} className='GoogleButton'>
                    <img src={GoogleLogo} className='googlelogo'></img>
                    <img src={GoogleText} className='googletext'></img>
                </button>
                <p className='notice'>로그인시 <a className='noline' href='#'>이용약관</a> 및 <a className='noline' href='#'>개인정보처리방침</a> 동의로 간주됩니다.</p>
            </div>
        </div>
    );
};

export default Loginpage;
