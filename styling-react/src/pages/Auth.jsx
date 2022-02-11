import React, {useState} from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import { withTemplate } from '../hoc/withTemplate';
import './auth.scss'

const Auth = () => {
  const [tab, setTab] = useState('signup');
  
  const renderTab = (tab) => {
    const tabs = {
      signup: <Signup/>,
      login: <Login />,
    }

    return tabs[tab]
  }

  return (
    <div>
      <div className="tab">
        <h3 onClick={() => setTab('signup')}>SIGNUP</h3>
        <h3 onClick={() => setTab('login')}>LOGIN</h3>
      </div>
      <div className="tab-content">
        {renderTab(tab)}
      </div>
    </div>
  )
}

export default Auth