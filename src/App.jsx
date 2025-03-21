import "./App.css";
import { Provider } from "react-redux";
// import Test from "./components/Test";
import store from "./store/index";
import TableControl from "./components/TableConrol";
import Equasion from "./components/Calculator";
import { DEFAULT_CELL_VALUE } from "./utils/constants";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-header-title">Кулькулятор Характеристик ДСВ</h1>
        <h5 className="app-header-subtitle">(Выполнил Альберт)</h5>
        <Provider store={store}>
          <div>
            <TableControl defaultRowsCount={DEFAULT_CELL_VALUE} />
            <Equasion />
            {/* <Test /> */}
          </div>
        </Provider>
      </header>
    </div>
  );
}

export default App;
