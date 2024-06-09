import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgProfile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'1em'}
    ref={ref}
    viewBox={'0 0 16 16'}
    width={'1em'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      clipRule={'evenodd'}
      d={
        'M4 12.39a5.75 5.75 0 0 1 4.015-1.643c1.539 0 2.939.613 3.985 1.611A5.75 5.75 0 0 1 7.985 14 5.76 5.76 0 0 1 4 12.39'
      }
      stroke={'#79747F'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
    />
    <path
      d={
        'M2.65 10.683A5.95 5.95 0 0 1 2 8c0-3.316 2.684-6 6-6s6 2.684 6 6c0 .967-.242 1.873-.651 2.682'
      }
      stroke={'#79747F'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
    />
    <path
      d={'M9.414 5.252a2 2 0 1 1-2.828 2.829 2 2 0 0 1 2.828-2.829'}
      stroke={'#79747F'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgProfile)
const Memo = memo(ForwardRef)

export default Memo
