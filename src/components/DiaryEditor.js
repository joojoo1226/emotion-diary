import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import MyHeader from "./Myheader";
import { useContext, useRef, useState } from "react";
import EmotionItem from "./EmotionItem";
import { DiaryDispatchContext } from "../App";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const emotionList = [
    {
        emotion_id : 1,
        emotion_img : process.env.PUBLIC_URL + `assets/emotion1.png`,
        emotion_descript : 'perfect'
    },
    {
        emotion_id : 2,
        emotion_img : process.env.PUBLIC_URL + `assets/emotion2.png`,
        emotion_descript : 'good'
    },
    {
        emotion_id : 3,
        emotion_img : process.env.PUBLIC_URL + `assets/emotion3.png`,
        emotion_descript : 'soso'
    },
    {
        emotion_id : 4,
        emotion_img : process.env.PUBLIC_URL + `assets/emotion4.png`,
        emotion_descript : 'bad'
    },
    {
        emotion_id : 5,
        emotion_img : process.env.PUBLIC_URL + `assets/emotion5.png`,
        emotion_descript : 'mad'
    }
];

const getStringDate = (date) => {
    return date.toISOString().slice(0, 10);
};

const DiaryEditor = () => {
    const contentRef = useRef();
    const [content, setContent] = useState("");
    const [emotion, setEmotion] = useState(3);
    const [date, setDate] = useState(getStringDate(new Date())); 

    const {onCreate} = useContext(DiaryDispatchContext);

    const handleClickEmote = (emotion) => {
        setEmotion(emotion);
    };

    const handleSubmit = () => {
        if(content.length < 1) {
            contentRef.current.focus();
            return;
        }

        onCreate(date, content, emotion);
        navigate('/', {replace : true});
    };

    const navigate = useNavigate();

    return (
        <div className="DiaryEditor">
            <MyHeader 
                headText={"새 일기쓰기"}
                leftChild={
                    <MyButton 
                        text={"< 뒤로가기"}
                        onClick={() => {
                            navigate(-1)
                        }}
                    />
                }
            />

            <div>
                <section>
                    <h4>날짜를 선택해주세요.</h4>
                    <div className="input_box">
                        <input 
                            className="input_date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            type="date" 
                        />
                    </div>
                </section>
                <section>
                    <h4>Today's emotion</h4>
                    <div className="input_box emotion_list_wrapper">
                        {emotionList.map((it) => 
                            <EmotionItem 
                                key={it.emotion_id} 
                                {...it} 
                                onClick={handleClickEmote}
                                isSelected={it.emotion_id === emotion}
                            />
                        )}
                    </div>
                </section>
                <section>
                    <h4>Today's diary</h4>
                    <div className="input_box text_wrapper">
                        <textarea 
                            placeholder="오늘은 어땠나요?"
                            ref={contentRef}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                </section>
                <section>
                    <div className="control_box">
                        <MyButton 
                            text={"취소하기"}
                            onClick={() => navigate(-1)}
                        />
                        <MyButton 
                            text={"작성 완료"}
                            type={"positive"}
                            onClick={() => {handleSubmit()}}
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DiaryEditor;