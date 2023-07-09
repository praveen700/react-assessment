
import React, { useEffect, useState } from 'react'
import useAssessments from '../hooks/useAssessments';

const AccountContext = React.createContext([{}, () => {}])

const AccountProvider = ({ children }) => {
  const [loginState, setLoginState] = useState({ isLoggedIn: false });
  const [accountInfo, setAccountInfo] = useState({});
  const { assessments } = useAssessments();

  useEffect(() => {
    if (loginState.isLoggedIn) {
      setAccountInfo({
        first_name: "Angela",
        last_name: "Davis",
        region: "sf"
      })
    }
  }, [loginState.isLoggedIn]);

  return (
    <AccountContext.Provider value={
      {
        state: loginState,
        setState: setLoginState,
        accountInfo: accountInfo,
        assessments:assessments
      }
    }>
      {children}
    </AccountContext.Provider>
  )
}

export { AccountContext, AccountProvider };
