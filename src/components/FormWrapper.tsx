import { ReactNode } from 'react'

type FormWrapperProps = {
  title: string
  children: ReactNode
}

export const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <div className="form-wrapper">
      <h2 className="wrapper-header">{title}</h2>
      <div className='wrapper-children'>{children}</div>
    </div>
  )
}