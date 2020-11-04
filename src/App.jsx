import Textbox from "./Textbox"
import Button from "./Button"
import "./style.css"

const App = () => {
  const name = "nob"
  const popAlert = (text) => {
    alert(text)
  }

  return (
    // JSX
    <div className="App">
      <h1 className="title">初めてのReactだ！</h1>
      <p>講師の{name}です.よろしくお願いします.</p>
      <Textbox
        color="red"
        text="渡されたよ！"
      />
      <Textbox
        color="blue"
        text="僕も渡されたよ！"
      />
      <Textbox
        color="green"
        text="てきすとおおおおおおおお"
      />
      <Button
        onClick={() => { popAlert("引数だよ！アラートだよ！") }}
      />
    </div>
  );
}

export default App;
