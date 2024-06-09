import { useSelector } from 'react-redux'

import classNames from 'classnames'

import s from './userDropdown.module.scss'

import { AccountType } from '../../../../app/api/api'
import { AppRootStateType } from '../../../../app/store'
import LogOut from '../../../../assets/icons/LogOut'
import TriggerClose from '../../../../assets/icons/TriggerClose'
import { Typography } from '../../typography/Typography'
import { UserAvatar } from '../../userAvatar/UserAvatar'
import { Dropdown } from '../Dropdown'
import { DropdownItem } from '../dropdownItem/DropdownItem'
import { DefaultDescription } from '../dropdownItem/defaultDescription/DefaultDescription'
import { DropdownSeparator } from '../dropdownSeparator/DropdownSeparator'
import { UserDropdownTrigger } from './userDropdownTrigger/UserDropdownTrigger'

type Props = {
  accountTypeChange: (type: AccountType) => void
  onSelectLogOut: () => void
}
const UserDropdown = ({ accountTypeChange, onSelectLogOut }: Props) => {
  const accountType = useSelector((state: AppRootStateType) => state.auth.dataUsers.accountType)
  const namesData = useSelector((state: AppRootStateType) => state.auth.dataUsers.name)
  const imagesData = useSelector((state: AppRootStateType) => state.auth.dataUsers.img)

  const parent = accountType === 'parent'
  const children = accountType === 'children'
  const avatar = parent ? imagesData.parent : imagesData.children

  return (
    <Dropdown trigger={<UserDropdownTrigger src={avatar} />}>
      <DropdownItem className={s.close}>
        <TriggerClose />
      </DropdownItem>
      <Typography variant={'subtitle1'}>Смена пользователя</Typography>
      <DropdownItem
        className={classNames(s.container, parent ? s.active : '')}
        onSelect={() => accountTypeChange('parent')}
      >
        <UserAvatar src={imagesData.parent} />
        <div className={s.dataContainer}>
          <Typography as={'span'} className={s.name} variant={'subtitle2'}>
            {namesData.parent}
          </Typography>
          {parent && (
            <Typography as={'span'} className={s.email} variant={'subtitle3'}>
              Это Вы
            </Typography>
          )}
        </div>
      </DropdownItem>

      <DropdownItem
        className={classNames(s.container, children ? s.active : '')}
        onSelect={() => accountTypeChange('children')}
      >
        <UserAvatar src={imagesData.children} />
        <div className={s.dataContainer}>
          <Typography as={'span'} className={s.name} variant={'subtitle2'}>
            {namesData.children}
          </Typography>
          {children && (
            <Typography as={'span'} className={s.email} variant={'subtitle3'}>
              Это Вы
            </Typography>
          )}
        </div>
      </DropdownItem>

      <DropdownSeparator />
      <DropdownItem onSelect={onSelectLogOut}>
        <DefaultDescription className={s.out}>
          <span>Выход</span>
          <LogOut />
        </DefaultDescription>
      </DropdownItem>
    </Dropdown>
  )
}

export default UserDropdown

UserDropdown.displayName = 'UserDropdown'
