// app/providers.tsx
'use client'
import { useEffect } from 'react'
import {NextUIProvider} from '@nextui-org/react'
import AOS from "aos";
import "aos/dist/aos.css";

export function Providers({children}) {
  useEffect(()=>{
    AOS.init()
},[])
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}