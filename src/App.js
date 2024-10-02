import './App.css';
import {Provider} from "react-redux";
import store from "./modules/store";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TaskList/>
      </Provider>
    </div>
  );
}

export default App;
