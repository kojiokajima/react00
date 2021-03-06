import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { About, UnderConstruction, Contact, Home, Work} from './views/components/index'


const Router = () => {
    return (    
        <Switch>
            <Route exact path={'/about'} component={About} />
            <Route exact path={'/contact'} component={Contact} />
            {/* <Route exact path={'/history'} component={History} /> */}
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/work'} component={Work} />
            <Route component={UnderConstruction} />
        </Switch>
    )
}

export default Router