import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
// import { Container } from './styles';

export default async function Repository() {
  const { repository } = useParams();

  const [state, setState] = React.useState({ 
    repository: {}, 
    issus: [],
    loading: true, 
  });

  useEffect(() => {
    let isMounted = true;               // note mutable flag
    someAsyncOperation().then(data => {
      if (isMounted) setState(data);    // add conditional check
    })
    return () => { isMounted = false }; // cleanup toggles value, if unmounted
  }, []);

  const [repo, issues] = await Promise.all([
    api.get(`/repos/${repository}`),
    api.get(`/repos/${repository}/issues`, {
      params: {
        state: 'open',
        per_page: 5,
      }
    })
  ]);

  setState({
    repository: repo.data,
    issus: issues.data,
    loading: false,
  });

  return (
    <h1>Repository: {state.repository}</h1>
  );
}