import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgForward = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'1em'}
    ref={ref}
    viewBox={'0 0 16 12'}
    width={'1em'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={'M15 6H1M10 11l5-5M10 1l5 5'}
      stroke={'#79747F'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={1.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgForward)
const Memo = memo(ForwardRef)

export default Memo
