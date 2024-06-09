import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgMoney = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'1em'}
    ref={ref}
    viewBox={'0 0 17 16'}
    width={'1em'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M2.74 5.277h10.64c.738 0 1.334.596 1.334 1.333v6.056c0 .734-.6 1.334-1.333 1.334H4.048a1.333 1.333 0 0 1-1.334-1.334V5.527c0-.554.344-1.051.863-1.247l6.902-2.606a.666.666 0 0 1 .902.623v2.979'
      }
      stroke={'#E12828'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
    />
    <path
      d={'M11.38 9.417a.25.25 0 1 0 .003.5.25.25 0 0 0-.003-.5'}
      stroke={'#E12828'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMoney)
const Memo = memo(ForwardRef)

export default Memo
