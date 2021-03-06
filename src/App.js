import './App.css';

function App() {
  return (
    <div className="App">
      <div className="TaskGroupRow">
        <div className="TaskGroup UrgentImp">
          <h5>Urgent</h5>
          <h5>Important </h5>
          <h5><span className="badge rounded-pill bg-danger">0</span></h5>
        </div>
        <div className="TaskGroup notUrgentImp">
          <h5>Important</h5>
          <h5>not Urgent </h5>
          <h5><span className="badge rounded-pill bg-secondary">0</span></h5>
        </div>
      </div>
      <div className="AddHome"><h1> + </h1></div>
      <div className="TaskGroupRow">
        <div className="TaskGroup UrgentNotImp">
          <h5>Urgent</h5>
          <h5>not Important </h5>
          <h5><span className="badge rounded-pill bg-secondary">0</span></h5></div>
        <div className="TaskGroup notUrgentNotImp">
          <h5>not Urgent</h5>
          <h5>not Important </h5>
          <h5><span className="badge rounded-pill bg-secondary">0</span></h5>
        </div>
      </div>
    </div>
  );
}

export default App;
