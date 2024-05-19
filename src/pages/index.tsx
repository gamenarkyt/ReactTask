import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom"
import { SettingsPage } from "@/pages/SettingsPage/Settings"
import { TaskListPage } from "@/pages/TaskListPage/TaskListPage"
import { GlobalLayout } from "@/pages/GlobalLayout/GlobalLayout"

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<GlobalLayout />}>
			<Route path="/" element={<TaskListPage />} />
			<Route path="/settings" element={<SettingsPage />}></Route>
		</Route>
	)
)
