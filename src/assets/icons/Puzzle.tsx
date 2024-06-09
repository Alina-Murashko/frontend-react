import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgPuzzle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        'M21.004 15.67v3.222M21.003 7.275v3.221h0a2.7 2.7 0 0 0-1.4.091 2.61 2.61 0 0 0-1.688 1.836 2.646 2.646 0 0 0 3.089 3.248v3.22a2.11 2.11 0 0 1-2.112 2.113H15.67v0c.094-.466.062-.95-.091-1.4a2.61 2.61 0 0 0-1.836-1.688 2.645 2.645 0 0 0-3.248 3.089l-3.22-.001a2.11 2.11 0 0 1-2.112-2.111V15.67a2.645 2.645 0 0 1-3.088-3.247 2.61 2.61 0 0 1 1.688-1.836 2.7 2.7 0 0 1 1.4-.09h0V7.275a2.11 2.11 0 0 1 2.111-2.112h3.221a2.645 2.645 0 0 1 3.247-3.088c.859.215 1.55.85 1.837 1.688.153.45.185.933.09 1.4h3.222a2.11 2.11 0 0 1 2.112 2.112'
      }
      stroke={'#434B74'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={1.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPuzzle)
const Memo = memo(ForwardRef)

export default Memo
