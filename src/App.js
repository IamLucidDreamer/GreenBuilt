import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/common/Login'
import SignUp from './components/common/SignUp'
import Home from './components/main/Home'
import Dashboard from './components/portals/business/pages/Dashboard'
import { store } from './store/store'

function App() {
<<<<<<< HEAD
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
=======
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />\
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</Router>
		</Provider>
	)
>>>>>>> c0e0711a88aec17f55a86e3ba1f840ea37be1170
}

export default App
