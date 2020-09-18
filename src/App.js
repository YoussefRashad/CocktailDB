import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import SingleCocktail from './pages/SingleCocktail'
import Navbar from './components/Navbar'
import Footer from './components/footer'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cocktail/:id" component={SingleCocktail} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

