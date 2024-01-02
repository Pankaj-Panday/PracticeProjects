import React from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Root, {
	loader as rootLoader,
	action as rootAction,
} from "./routes/root.jsx";
import "./App.css";
import ErrorPage from "./error-page.jsx";
import Contact, {
	loader as contactLoader,
	action as contactAction,
} from "./routes/contact.jsx";
import EditContact, { action as editAction } from "./routes/edit.jsx";
import { action as destroyAction } from "./routes/destroy.jsx";
import Index from "./routes/index.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<Root />}
			loader={rootLoader}
			action={rootAction}
			errorElement={<ErrorPage />}
		>
			<Route errorElement={<ErrorPage />}>
				<Route index element={<Index />} />
				<Route
					path="contacts/:contactId"
					element={<Contact />}
					loader={contactLoader}
					action={contactAction}
				/>
				<Route
					path="contacts/:contactId/edit"
					element={<EditContact />}
					loader={contactLoader}
					action={editAction}
				/>
				<Route path="contacts/:contactId/destroy" action={destroyAction} />
			</Route>
		</Route>
	)
);

export default function App() {
	return <RouterProvider router={router} />;
}
