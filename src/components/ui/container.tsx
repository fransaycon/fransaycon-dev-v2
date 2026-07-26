import type { ComponentPropsWithoutRef, ElementType } from "react";

type ContainerProps<T extends ElementType> = {
	as?: T;
	className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

/**
 * Centered content container with consistent max-width and horizontal padding.
 * Use inside every section so their content edges align.
 */
export function Container<T extends ElementType = "div">({
	as,
	className = "",
	...props
}: ContainerProps<T>) {
	const Component = as ?? "div";
	return (
		<Component
			className={`mx-auto w-full max-w-6xl px-6 ${className}`}
			{...props}
		/>
	);
}
