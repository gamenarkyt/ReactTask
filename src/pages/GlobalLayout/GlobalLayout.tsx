import { FC } from "react"
import styles from "./GlobalLayout.module.css"
import { Header, Typography } from "yui-uikit"
import { Outlet } from "react-router"

export const GlobalLayout = () => {
	return (
		<div>
			<Header
				leftSlot={<Typography>YakireTask</Typography>}
				className={styles.header}
			/>
			<Outlet />
		</div>
	)
}
