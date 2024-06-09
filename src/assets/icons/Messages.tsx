import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgMessages = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'1em'}
    ref={ref}
    viewBox={'0 0 25 24'}
    width={'1em'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      clipRule={'evenodd'}
      d={
        'M19 21.5h-3.5a1.75 1.75 0 0 1-1.75-1.75v-4.667c0-.966.783-1.75 1.75-1.75h7c.967 0 1.75.784 1.75 1.75v4.667a1.75 1.75 0 0 1-1.75 1.75h-.875v1.75z'
      }
      fill={'#EEF'}
      fillRule={'evenodd'}
      stroke={'#434B74'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={1.5}
    />
    <path
      clipRule={'evenodd'}
      d={'M10 17h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h1.5v3z'}
      fill={'#FFF1CB'}
      fillRule={'evenodd'}
      stroke={'#434B74'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={1.5}
    />
    <path
      d={
        'M10.677 10.323a.25.25 0 1 1-.354.354.25.25 0 0 1 .354-.354M14.677 10.323a.25.25 0 1 1-.354.354.25.25 0 0 1 .354-.354M6.677 10.323a.25.25 0 1 1-.354.354.25.25 0 0 1 .354-.354'
      }
      stroke={'#434B74'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={1.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMessages)
const Memo = memo(ForwardRef)

export default Memo
