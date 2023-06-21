import { useParams } from "react-router-dom";

const Diary = () => {
    const {id} = useParams();   //pathVariable -> App.js의 '/:id'

    return (
        <div>
            <h1>Diary</h1>
            <p>이곳은 일기 상세페이지입니다.</p>
        </div>
    )
};

export default Diary;