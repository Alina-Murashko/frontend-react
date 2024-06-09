import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgBack = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d={'M1 6h14M6 1 1 6M6 11 1 6'}
      stroke={'#79747F'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={1.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBack)
const Memo = memo(ForwardRef)

export default Memo
