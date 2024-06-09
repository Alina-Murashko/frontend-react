import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgHome = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'1em'}
    ref={ref}
    viewBox={'0 0 28 28'}
    width={'1em'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M1.832 10.95a.875.875 0 0 0 1.003 1.434zM14 3.5l.502-.717a.875.875 0 0 0-1.004 0zm11.165 8.884a.875.875 0 0 0 1.003-1.434zM16.625 24.5a.875.875 0 1 0 1.75 0zm-7 0a.875.875 0 1 0 1.75 0zm-5.25-12.833v-.875h-1.75v.875zM10.5 25.833h.875v-1.75H10.5zm14.875-14.166v-.875h-1.75v.875zM17.5 24.083h-.875v1.75h.875zm-14.665-11.7 11.667-8.166-1.004-1.434L1.832 10.95zm10.663-8.166 11.667 8.166 1.003-1.433-11.666-8.167zM18.375 24.5v-7h-1.75v7zm0-7a3.21 3.21 0 0 0-3.208-3.208v1.75c.806 0 1.458.652 1.458 1.458zm-3.208-3.208h-2.334v1.75h2.334zm-2.334 0A3.21 3.21 0 0 0 9.625 17.5h1.75c0-.806.652-1.458 1.458-1.458zM9.625 17.5v7h1.75v-7zm-7-5.833v10.957h1.75V11.667zm0 10.957a3.21 3.21 0 0 0 3.21 3.21v-1.75a1.46 1.46 0 0 1-1.46-1.46zm3.21 3.21H10.5v-1.75H5.834zm17.79-14.167v10.957h1.75V11.667zm0 10.957a1.46 1.46 0 0 1-1.46 1.46v1.75a3.21 3.21 0 0 0 3.21-3.21zm-1.46 1.46H17.5v1.75h4.666z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHome)
const Memo = memo(ForwardRef)

export default Memo
