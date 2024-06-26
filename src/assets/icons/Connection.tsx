import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgConnection = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'1em'}
    ref={ref}
    viewBox={'0 0 20 20'}
    width={'1em'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M16 15h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1m0 0v1a2 2 0 0 1-2 2h-2.125M16.5 8v-.5a6.5 6.5 0 1 0-13 0V8m8.375 10c0-.69-.56-1.25-1.25-1.25h-1.25a1.25 1.25 0 0 0 0 2.5h1.25c.69 0 1.25-.56 1.25-1.25M4 15H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h1a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1'
      }
      stroke={'#434B74'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={1.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgConnection)
const Memo = memo(ForwardRef)

export default Memo
