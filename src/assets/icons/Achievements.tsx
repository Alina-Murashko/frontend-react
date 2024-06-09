import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgAchievements = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        'M7 17.75a.75.75 0 0 0 0 1.5zm6 1.5a.75.75 0 0 0 0-1.5zm2-15.5a.75.75 0 0 0 0 1.5zM5 5.25a.75.75 0 0 0 0-1.5zm6 8.5H9v1.5h2zm-2 0a3.25 3.25 0 0 1-3.25-3.25h-1.5A4.75 4.75 0 0 0 9 15.25zM5.75 10.5v-8h-1.5v8zm0-8A.25.25 0 0 1 6 2.25V.75A1.75 1.75 0 0 0 4.25 2.5zM6 2.25h8V.75H6zm8 0a.25.25 0 0 1 .25.25h1.5A1.75 1.75 0 0 0 14 .75zm.25.25v8h1.5v-8zm0 8A3.25 3.25 0 0 1 11 13.75v1.5a4.75 4.75 0 0 0 4.75-4.75zm-5 4v4h1.5v-4zM7 19.25h6v-1.5H7zm8-14h3v-1.5h-3zm3 0a.25.25 0 0 1 .25.25h1.5A1.75 1.75 0 0 0 18 3.75zm.25.25v2h1.5v-2zm0 2A2.25 2.25 0 0 1 16 9.75v1.5a3.75 3.75 0 0 0 3.75-3.75zM16 9.75h-1v1.5h1zm-11-6H2v1.5h3zm-3 0A1.75 1.75 0 0 0 .25 5.5h1.5A.25.25 0 0 1 2 5.25zM.25 5.5v2h1.5v-2zm0 2A3.75 3.75 0 0 0 4 11.25v-1.5A2.25 2.25 0 0 1 1.75 7.5zM4 11.25h1v-1.5H4z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgAchievements)
const Memo = memo(ForwardRef)

export default Memo
