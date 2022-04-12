import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './app/components/header/header'

import Index from './app/routes/index.routes'
import Auth from './app/routes/auth.routes'
import Quiz from './app/routes/quiz.routes'
import AllQuiz from './app/routes/allquiz.routes';

import { GlobalContextUser } from "./app/server/context/actions/user.action";
import { GlobalContextQuiz } from "./app/server/context/actions/quiz.action";
import { GlobalContextVip } from "./app/server/context/actions/vip.action";

function App() {

  return (
    <BrowserRouter>
      <GlobalContextVip>
        <GlobalContextUser>
          <GlobalContextQuiz>
            <Header />
            <div className="body-app">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/quiz/:code" element={<Quiz />} />
                <Route path="/allquiz" element={<AllQuiz />} />
              </Routes>
            </div>
          </GlobalContextQuiz>
        </GlobalContextUser>
      </GlobalContextVip>
    </BrowserRouter>
  );
}

export default App;
