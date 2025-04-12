'use client'

import { useState } from 'react';

type Country =  {
  name:
  flags:
  region:
  capital:
  population:
}

useEffect(() => {
  fetch('/api/countries')
    .then((res) => res.json())
    .then((data) => setCountries(data))
    .catch((err) => console.error('Frontend fetch error:', err))
}, [])
