import { useCycle, motion } from 'framer-motion'
import React, { useRef } from 'react'
import { MenuToggle } from '../components/MenuToggle'
import { Navigation } from '../components/Navigation'
import { useDimensions } from '../hooks/useDimension'

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2
		}
	}),
	closed: {
		clipPath: "circle(30px at 40px 40px)",
		transition: {
			delay: 0.5,
			type: "spring",
			stiffness: 400,
			damping: 40
		}
	}
}

export default function Home() {
	const [isOpen, toggleOpen] = useCycle(false, true)
	const containerRef = useRef(null)
	const { height } = useDimensions(containerRef)

	return (
		<>
			<motion.nav
				initial={false}
				animate={isOpen ? "open" : "closed"}
				custom={height}
				ref={containerRef}
			>
				<motion.div className="background" variants={sidebar} />
				<Navigation />
				<MenuToggle toggle={() => toggleOpen()} />
			</motion.nav>
			Fred Delage
		</>
	)
}
