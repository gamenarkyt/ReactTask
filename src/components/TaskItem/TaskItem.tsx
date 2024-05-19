import React, { FC } from "react"
import styles from "./TaskItem.module.css"
import { Button, Checkbox, IconButton, Popup, Typography } from "yui-uikit"
import { EllipsisVertical } from "lucide-react"
import clsx from "clsx"

interface TaskItemProps {
	name?: string
	description?: string
	tags?: React.ReactNode[]
}

export const TaskItem: FC<TaskItemProps> = ({
	name = "Name",
	description,
	tags,
}) => {
	const _class = clsx(styles.taskitem, {
		[styles.descriptionHide]: !description,
	})
	return (
		<div className={_class}>
			<Checkbox className={styles.taskcheckbox} />
			<div className={styles.taskcontent}>
				<Typography size="h2" className={styles.taskname}>
					{name}
				</Typography>
				<Typography size="h3" className={styles.taskdescription}>
					{description && description}
				</Typography>
				<div className={styles.tasktags}>
					{tags &&
						tags.map((tag) => {
							return <Button variant="outline">{tag}</Button>
						})}
				</div>
			</div>
			<div className={styles.taskbuttons}>
				<Popup
					position="left"
					className={styles.taskpopup}
					listItems={["123", 456]}
				>
					<Button variant="secondary">
						<EllipsisVertical />
					</Button>
				</Popup>
			</div>
		</div>
	)
}
