import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AppList from "@/views/AppList"
import Help from "@/views/Help"

import App from '@/App'

function Router() {
  return (
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="app-list" element={<AppList />} />
          <Route path="help" element={<Help />} />
          <Route
            path=""
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
