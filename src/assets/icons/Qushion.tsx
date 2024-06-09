import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgQushion = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'1em'}
    ref={ref}
    viewBox={'0 0 20 20'}
    width={'1em'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <circle
      cx={10}
      cy={10}
      r={9.004}
      stroke={'#434B74'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={1.5}
    />
    <path
      d={
        'm10 10.711 1.328-.737A2.09 2.09 0 0 0 12.4 8.15a2.3 2.3 0 0 0-2.42-2.152 2.345 2.345 0 0 0-2.382 1.813M10.1 13.902a.1.1 0 1 1-.2 0 .1.1 0 0 1 .2 0'
      }
      stroke={'#434B74'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={1.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgQushion)
const Memo = memo(ForwardRef)

export default Memo
