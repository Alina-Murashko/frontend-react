import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgLogOut = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d={
        'M16.445 8.443 20.002 12l-3.557 3.557M9.332 12h10.671M7.554 3.997a3.557 3.557 0 0 0-3.557 3.557v8.892a3.557 3.557 0 0 0 3.557 3.557'
      }
      stroke={'#008AFF'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={1.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLogOut)
const Memo = memo(ForwardRef)

export default Memo
