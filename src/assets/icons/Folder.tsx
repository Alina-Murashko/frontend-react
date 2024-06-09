import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgFolder = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'1em'}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={'1em'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      clipRule={'evenodd'}
      d={
        'M9.47 3.25a1.75 1.75 0 0 1 1.353.64l.094.126 1.405 2.065a.25.25 0 0 0 .147.102l.06.007H18a2.75 2.75 0 0 1 2.745 2.582l.005.168v1.939l.135.12.134.135.125.145c.482.6.688 1.373.575 2.13l-.035.188-1.111 5a2.75 2.75 0 0 1-2.51 2.147l-.175.006H4.665a2.415 2.415 0 0 1-2.407-2.224l-.008-.19V6a2.75 2.75 0 0 1 2.582-2.745L5 3.25zm.134 8.5c-.544 0-1.02.35-1.187.859l-.033.12-1.362 6.13q-.038.165-.095.322l-.03.069h10.991c.544 0 1.02-.35 1.187-.859l.033-.12 1.111-5a1.25 1.25 0 0 0-.558-1.331l-.121-.067q-.189-.091-.4-.115L19 11.75zM5 4.75h4.47l.061.007a.25.25 0 0 1 .146.102l1.405 2.065.094.126c.33.403.826.64 1.353.64H18l.128.006A1.25 1.25 0 0 1 19.25 8.94v1.322l-.06-.005a3 3 0 0 0-.19-.007H9.603l-.174.005a2.75 2.75 0 0 0-2.51 2.148l-1.362 6.13-.033.112a.915.915 0 0 1-1.775-.31V6l.006-.128A1.25 1.25 0 0 1 5 4.75'
      }
      fill={'currentColor'}
      fillRule={'evenodd'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgFolder)
const Memo = memo(ForwardRef)

export default Memo
