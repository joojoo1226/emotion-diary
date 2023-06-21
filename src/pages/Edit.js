import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
    const navigate = useNavigate();

    //searchParams로 전달된 파라미터 받아옴
    //setSearchParams 실시간으로 파라미터 변경
    const [searchParams, setSearchParams] = useSearchParams();

    //받아온 파라미터 순서대로
    const id = searchParams.get('id');
    const mode = searchParams.get('mode');

    return (
        <div>
            <h1>Edit</h1>
            <p>이곳은 일기 수정 페이지입니다.</p>
            <button onClick={() => setSearchParams({who: 'song'})}>QS 바꾸기</button>
            <button onClick={() => navigate("/home")}>Home으로 가기</button>
            <button onClick={() => navigate(-1)}>뒤로가기</button>
        </div>
    )
};

export default Edit;