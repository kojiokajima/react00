import React from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
// import Avatar from '@material-ui/core/Avatar';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import { makeStyles } from '@material-ui/core/styles'
import Logo from '../../../assets/img/logo_square.png'
import {About, Contact, History, Home, Work} from '../index'



const Header = () => {
    return (
        <BrowserRouter>
            {/* <motion.div
                animate={{ rotate: 90 }}
                transition={{ ease: "easeOut", duration: 2 }}
            > */}
                <header className="header">
                    <div className="header-logo">
                        {/* <ListItemAvatar>
                            <Avatar alt="Koji Okajima" src={Logo} />
                        </ListItemAvatar> */}
                        <Link to='/'><img src={Logo} alt="Koji Okajima"/></Link>
                    </div>

                    <div className="header-nav">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/history'>History</Link></li>
                            <li><Link to='/work'>Work</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                </header>
            {/* </motion.div> */}

            <Switch>
                <Route exact path={'/about'} component={About} />
                <Route exact path={'/contact'} component={Contact} />
                <Route exact path={'/history'} component={History} />
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/work'} component={Work} />
            </Switch>
        </BrowserRouter>
        
    )
}
export default Header