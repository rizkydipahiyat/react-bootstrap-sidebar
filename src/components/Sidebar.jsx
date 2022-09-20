import React, { useState } from "react";
import {
	IoGrid,
	IoPerson,
	IoStatsChart,
	IoChatbubble,
	IoLockOpen,
	IoChevronDownOutline,
	IoChevronBackCircle,
	IoSpeedometerOutline,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
	const [isOpen, setIsOpen] = useState(true);
	const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
	const Menus = [
		{
			path: "/dashboard",
			name: "Dashboard",
			icon: <IoGrid />,
			spacing: true,
		},
		{
			path: "/about",
			name: "About",
			icon: <IoPerson />,
		},
		{
			path: "/analytics",
			name: "Analytics",
			icon: <IoStatsChart />,
		},
		{
			path: "/comment",
			name: "Comment",
			icon: <IoChatbubble />,
			spacing: true,
		},
		{
			name: "Product",
			icon: <IoLockOpen />,
			spacing: true,
			subMenu: true,
			subMenuItems: [
				{
					path: "/productList",
					name: "Product List",
				},
				{
					path: "/list",
					name: "List",
				},
			],
		},
	];
	return (
		<div className="d-flex">
			<div
				className={`${
					isOpen ? "width-sidebar" : "min-sidebar"
				} vh-100 position-relative text-white sidebar pt-4`}
			>
				<IoChevronBackCircle
					className={`${
						!isOpen && "rotate"
					} position-absolute text-white sidebar-arrow`}
					onClick={() => setIsOpen(!isOpen)}
				/>
				<div className="d-flex justify-content-center align-items-center">
					<IoSpeedometerOutline
						className={`dashboard-icon ${!isOpen && "dashboard-icon-rotate"}`}
					/>
					<h5 className={`text text-white mt-1 ${!isOpen && "d-none"}`}>
						TobexDash
					</h5>
				</div>
				<div className="col">
					<ul className="mt-4">
						{Menus.map((menu, i) => (
							<React.Fragment key={i}>
								<li
									className={`text-white d-flex align-items-center position-relative listItem ${
										menu.spacing ? "mt-4" : "mt-1"
									}`}
								>
									<span
										className={`d-block menuIcon mt-3 ${!isOpen && "mx-auto"}`}
									>
										{menu.icon}
									</span>
									<NavLink
										to={menu.path}
										className={`listItem ${!isOpen && "d-none"}`}
									>
										{({ isActive }) => (
											<>
												<span className={`${isActive ? "active" : undefined}`}>
													{menu.name}
												</span>
											</>
										)}
									</NavLink>
									{menu.subMenu && isOpen && (
										<IoChevronDownOutline
											className={` ${
												isSubMenuOpen && "rotate"
											} position-absolute dropdown`}
											onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
										/>
									)}
								</li>
								{menu.subMenu && isSubMenuOpen && isOpen && (
									<ul>
										{menu.subMenuItems.map((subMenuItem, index) => (
											<li
												key={index}
												className="text-white d-flex align-items-center children"
											>
												<NavLink
													to={`${subMenuItem.path} `}
													style={{ textDecoration: "none" }}
												>
													{({ isActive }) => (
														<span
															className={`${
																isActive ? "active" : undefined
															} text-white`}
														>
															{subMenuItem.name}
														</span>
													)}
												</NavLink>
											</li>
										))}
									</ul>
								)}
							</React.Fragment>
						))}
					</ul>
				</div>
			</div>
			<main>{children}</main>
		</div>
	);
};

export default Sidebar;
