import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgTriggerclose = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d={'m8 8 8 8M16 8l-8 8'}
      stroke={'#7362BC'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={1.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTriggerclose)
const Memo = memo(ForwardRef)

export default Memo
