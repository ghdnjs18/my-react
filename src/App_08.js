import './App.css';

import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, About, NotFound, Post } from './pages';
import Menu from './Menu';
import Button from './Button';
import Sidebar from './Sidebar';

class App extends Component {
	homeMenu = [
		{url: "/", name: "HOME"},
		{url: "/about",	name: "ABOUT"},
		{url: "/posts",	name: "POST"}
	]
	state = {
		open: false
	}

	showSidebar = () => {
		this.setState({open: !this.state.open})
	}

	render(){ 
		const { open } = this.state
		// state 말고도 이런식으로 변수?를 사용할 수 있다
		const { homeMenu } = this
		return ( 
			<div className="App">
				<Button handleClick={this.showSidebar}>Menu</Button>
				<Sidebar open={open}>
					<Menu menus={homeMenu}></Menu>
				</Sidebar>
				<Routes>
					<Route exact path="/" element={<Home/>}/>
					<Route exact path="/about" element={<About/>}/>
					<Route path="/posts" element={<Post/>}>
						<Route path=":postId" element={<Post/>}/>
					</Route>
					<Route exact path="*" element={<NotFound/>}/>
				</Routes>
			</div> 
		); 
	} 
}


export default App;
