import * as React from "react"
import { motion } from "framer-motion"
import { MenuItem } from "./MenuItem"

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 }
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 }
	}
}

export const Navigation = () => (
	<motion.ul variants={variants}>
		{items.map(i => (
			<MenuItem
				key={i.id}
				icon={i.icon}
				id={i.id}
				label={i.label} />
		))}
	</motion.ul>
)

const items = [
	{
		id: 0,
		icon: '',
		label: 'Home'
	},
	{
		id: 1,
		icon: '',
		label: 'Portfolio'
	},
	{
		id: 2,
		icon: '',
		label: 'Blog'
	},
	{
		id: 3,
		icon: '',
		label: 'Interests'
	},
	{
		id: 4,
		icon: '',
		label: 'Reach out'
	},
]
