import { TaskItem } from "@/components/TaskItem/TaskItem"
import styles from "./TaskListPage.module.css"
export const TaskListPage = ({}) => {
	return (
		<div className={styles.tasklistpage}>
			<TaskItem
				name="Fix button"
				description="Fix button in my ui kit"
				tags={["dev"]}
			/>
			<TaskItem name="Clean room" tags={["life"]} />
		</div>
	)
}
