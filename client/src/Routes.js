import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from './Login'
import App from './App'

const Routes = () => {
    let direccion = Login

        if (!localStorage.getItem("token")){
            direccion=Login
        }else{
            direccion=App
        }
   
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={direccion}/>

        </Switch>
    </BrowserRouter>
    )
}

export default Routes
