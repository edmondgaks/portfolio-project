import { ReactNode } from 'react'

const MaxWidthWrapper = ({
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div className={"mx-auto w-full grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-5 max-w-screen-xl px-4 md:px-20"}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper