import { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../data/users.json";

// 로그인폼 데이터 타입 정의
interface SignInForm { // 대문자
    username: string;
    password: string;
}

interface SignProps {
    onLogin: (username:string) => void;
}

const SignIn = ({onLogin}:SignProps) => {

    const [formData, setFormData] = useState<SignInForm>({
        username: '',
        password: ''
    })

    // 로그인 결과 상태 관리 success/fail
    const [loginResult, setLoginResult] = useState<string>('')

    const navigate = useNavigate()

    // 입력값 상태 핸들러
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    // 폼 제출 핸들러
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();

        const { username, password } = formData; // 입력 값 추출 

        // 입력 값 유효성 검사
        if(!username || !password) {
            alert("모든 필드를 입력해주세요")
            return;
        }

        // 로그인 일치 여부
        const user = users.find(user => (user.username === username && user.password === password))

        if(!user) {
            //alert('아이디 또는 비밀번호가 올바르지 않습니다.')
            setLoginResult('fail')
            return;
        }

        onLogin(user.username) // 로그인 성공 시 부모 컴포넌트에 알림
        
        console.log("로그인 시도", formData);

        if(user) {
            setLoginResult('success')
            navigate('/products')
        }
    }

    return (
        <div className="signin">
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">아이디</label>
                    <input 
                        type="text" 
                        id="username"
                        name="username"
                        placeholder="아이디를 입력해주세요"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">비밀번호</label>
                    <input 
                        type="password" 
                        id="password"
                        name="password"
                        placeholder="비밀번호를 입력해주세요"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">로그인</button>
            </form>
            {/* 로그인 오류 메시지 */}
            {loginResult === 'fail' && <p>로그인 실패, 다시 시도하세요.</p>}
        </div>
    )
}

export default SignIn