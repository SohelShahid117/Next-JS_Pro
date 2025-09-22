import { useRouter } from 'next/navigation'
import React, { type ElementRef, useEffect, useRef } from 'react'

const Modal = ({children}:{children:React.ReactNode}) => {

    const router = useRouter()
    const dialogRef = useRef<ElementRef<"dialog">>(null)

    useEffect(()=>{
        if(!dialogRef.current?.open){
            dialogRef.current?.showModal()
        }
    },[])

    function onDismiss(){
        router.back()
    }
  return (
    <div>
         Modal
    </div>
  )
}

export default Modal
