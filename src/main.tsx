import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/style.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./pages/index.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
)
