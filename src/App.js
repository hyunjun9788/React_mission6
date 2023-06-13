import './App.css';

function App() {
    let today = new Date()

    let year = today.getFullYear()
    let month = today.getMonth() + 1
    let date = today.getDate()

    return (

        <div className="App">
            <h1>오늘 날짜는</h1>
            <h3>{year + '/' + month + '/' + date}</h3>
            <h1>입니다.</h1>
        </div>
    );
}

export default App;
