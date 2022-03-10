import {useEffect, useState} from 'react'
import { NextComponentType } from "next"
import Login from "pages/login";

const withAuth = (Component: NextComponentType) => (props: any) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  useEffect(() => {
    if(sessionStorage.getItem('token')) {
      setIsLogged(true)
    }
  }, [])

  if(isLogged) {
    return <Component {...props} />
  }

  return <Login />
}

export default withAuth;