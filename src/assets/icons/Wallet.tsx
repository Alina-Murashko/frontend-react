import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgWallet = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'1em'}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={'1em'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g
      clipPath={'url(#wallet_svg__a)'}
      stroke={'#434B74'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={1.5}
    >
      <path
        d={
          'M3.039 7.915H19a2 2 0 0 1 2 2V19c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2V8.29a2 2 0 0 1 1.294-1.87l10.353-3.91A1 1 0 0 1 16 3.447v4.468'
        }
      />
      <path d={'M15.999 14.125a.376.376 0 0 0 .001.75.375.375 0 1 0-.001-.75'} />
    </g>
    <defs>
      <clipPath id={'wallet_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'#fff'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgWallet)
const Memo = memo(ForwardRef)

export default Memo
