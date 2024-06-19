import 'tailwindcss/tailwind.css'

import DetailPage from '@/app/components/DetailPage'
import React from 'react'

function MovieDetail({params}) {
  const {title} = params;
  const name = title.replaceAll("-"," ");
  console.log("Movie Detail",name);
  return (
    <DetailPage title={name} />
  )
}

export default MovieDetail