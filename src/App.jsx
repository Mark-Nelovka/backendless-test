import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Wrapper from './components/wrapper';
import DummyList from './components/Tabs/dummyList';
import Header from './components/header/header';
import data from './tabs.json';

const DummyChart = lazy(() =>
  import(
    './components/Tabs/dummyChart' /* webpackChunkName: "tabs/dummyChart.js" */
  ),
);

const DummyTable = lazy(() =>
  import(
    './components/Tabs/dummyTable' /* webpackChunkName: "tabs/dummyTable.js" */
  ),
);

function App() {
  return (
    <div>
      <Header />
      <Suspense fallback={'Loading...'}>
        <Routes>
          <Route
            path="/"
            element={
              <Navigate
                to={`${data.sort((a, b) => a.order - b.order)[0].id}`}
              />
            }
          />
          <Route
            path={`/dummyList`}
            element={
              <Wrapper>
                <DummyList tableFormat="List" />
              </Wrapper>
            }
          />
          <Route
            path="/dummyChart"
            element={
              <Wrapper>
                <DummyChart tableFormat="Chart" />
              </Wrapper>
            }
          />
          <Route
            path="/dummyTable"
            element={
              <Wrapper>
                <DummyTable tableFormat="Table" />
              </Wrapper>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
