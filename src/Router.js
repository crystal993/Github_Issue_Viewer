const { Routes, Route } = require("react-router-dom")
const { default: HomePage } = require("./pages/HomePage")
const { default: IssuDetail } = require("./pages/IssueDetail")

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/:id" element={<IssuDetail/>}/>
    </Routes>
  )
}

export default Router