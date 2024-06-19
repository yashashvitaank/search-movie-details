import React from 'react'
import DetailPage from '../components/DetailPage';

function MovieDesc(props) {
    const {t} = props.searchParams;
  return (
    <DetailPage title={t} />
  )
}

export default MovieDesc