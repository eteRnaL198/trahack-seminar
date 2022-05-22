import React, {useState, useEffect, useCallback} from 'react';
import './assets/styles/style.css';
import {AnswersList, Chats, FormDialog} from "./components/index";
import {db} from './firebase/index';

const App = () => {
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState("init");
  const [dataset, setDataset] = useState({});
  const [open, setOpen] = useState(false);
  
const displayNextQuestion = (nextQuestionId, nextDataset) => {
  addChats({
    text: nextDataset.question,
    type: 'question'
  })

  setAnswers(nextDataset.answers)
  setCurrentId(nextQuestionId)
}

const selectAnswer = (selectedAnswer, nextQuestionId) => {
  switch(true) {
    case (nextQuestionId === 'contact'):
      handleClickOpen();
      break;

    case(/^https:*/.test(nextQuestionId)):
      const a = document.createElement('a');
      a.href = nextQuestionId;
      a.target = '_blank';
      a.click();
      // ↑リンクを別タブで開く
      break;

    default:
      addChats({
        text: selectedAnswer,
        type: 'answer'
      })

      setTimeout(() => { displayNextQuestion(nextQuestionId, dataset[nextQuestionId])}, 500);
        break;
      }
}

const addChats = (chat) => {
  setChats( prevChats => { // ←前回の状態を引数に持てる
    return [...prevChats, chat] // ← spread構文
  })
};

const handleClickOpen = () => {
  setOpen(true)
};

const handleClose = useCallback( () => {
  setOpen(false)
}, [setOpen]); // ← 第一引数内で使ってる関数名を入れる

useEffect (() => {
  (async () => {
    const initDataset = {};

    await db.collection('questions').get().then( snapshots => { //←snapshotsにはドキュメントがまとめて入っている
      snapshots.forEach(doc => {
        const id = doc.id // ← storeのquestions以下に並んでるもの
        const data = doc.data() // ← その中のデータ
        initDataset[id] = data
      })
    }) ;
    //↑firebase に用意されてるメソッド多数
    //async付きの即時関数を使う ここまでがfirebaseとのやり取り
    setDataset(initDataset);
    displayNextQuestion(currentId, initDataset[currentId]); //データベースから取ってきた生の値を使って stateで入れるよりも速く 最初のメッセージを表示させる。
  })();  
}, []) // ← 走るのは一回だけだから[]を渡す

useEffect (() => {
  const scrollArea = document.getElementById('scroll-area');
  if (scrollArea) {
    scrollArea.scrollTop = scrollArea.scrollHeight;
  }
}) //← 毎回走ってほしいから第二引数は渡さない

    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={chats}/>
          <AnswersList answers={answers} select={selectAnswer}/>
          {/* ↑ selectAnser()にすると renderされるたびに実行されちゃうから 関数の名前として渡す */}
          <FormDialog open={open} handleClose={handleClose} />
        </div>
      </section>
    );
}

export default App;