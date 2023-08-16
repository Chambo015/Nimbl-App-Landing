import { FC, ReactNode } from 'react'
import style from './AppButton.module.scss'

type Props = {
    children: ReactNode
}

export const AppButton: FC<Props> = ({ children }) => {
    return (
        <div className={style.button_wrap}>
            <div className={style.button_content}>
                {children}
            </div>
        </div>
    )
}