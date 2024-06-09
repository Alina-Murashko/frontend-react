import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgCalendar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'1em'}
    ref={ref}
    viewBox={'0 0 20 21'}
    width={'1em'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={'M14 1v4M6 1v4M1 8h18'}
      stroke={'#434B74'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={1.5}
    />
    <path
      clipRule={'evenodd'}
      d={'M17 3H3a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2'}
      stroke={'#434B74'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={1.5}
    />
    <path
      d={
        'M5.013 11.729a.25.25 0 1 0 .002.5.25.25 0 0 0-.002-.5M10.013 11.729a.25.25 0 1 0 .002.5.25.25 0 0 0-.002-.5M15.013 11.729a.25.25 0 1 0 .002.5.25.25 0 0 0-.002-.5M5.013 15.729a.25.25 0 1 0 .002.5.25.25 0 0 0-.002-.5M10.013 15.729a.25.25 0 1 0 .002.5.25.25 0 0 0-.002-.5'
      }
      stroke={'#434B74'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={1.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCalendar)
const Memo = memo(ForwardRef)

export default Memo
