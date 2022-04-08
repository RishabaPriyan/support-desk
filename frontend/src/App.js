import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NewTicket from './pages/NewTicket'
import Tickets from './pages/Tickets'
import Ticket from './pages/Ticket'
import Header from './components/Header'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import PrivateRoute from './components/PrivateRoute'

function App() {
	return (
		<>
			<Router>
				<div className="container">
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
						<Route path="/new-ticket" element={<PrivateRoute />}>
							<Route path="/new-ticket" element={<NewTicket />} />
						</Route>
						<Route path="/tickets" element={<PrivateRoute />}>
							<Route path="/tickets" element={<Tickets />} />
						</Route>
						<Route path="/ticket/:ticketId" element={<PrivateRoute />}>
							<Route path="/ticket/:ticketId" element={<Ticket />} />
						</Route>
					</Routes>
				</div>
			</Router>
			<ToastContainer />
		</>
	)
}

export default App
