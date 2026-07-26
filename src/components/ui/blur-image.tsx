import { useState } from "react";

type BlurImageProps = {
	src: string;
	alt: string;
	/** Base64 blur-up placeholder shown until the full image loads. */
	blur?: string;
	/** Classes applied to the wrapper (sizing, rounding, etc.). */
	className?: string;
};

/**
 * Progressive "blur-up" image. Renders a tiny, heavily-compressed blurred
 * placeholder instantly (SSR-friendly, no network request), then fades the
 * full-resolution image in once it finishes downloading.
 */
export function BlurImage({ src, alt, blur, className }: BlurImageProps) {
	const [loaded, setLoaded] = useState(false);

	return (
		<div className={`relative overflow-hidden ${className ?? ""}`}>
			{blur ? (
				<img
					src={blur}
					alt=""
					aria-hidden="true"
					className={`absolute inset-0 h-full w-full scale-110 object-cover blur-lg transition-opacity duration-700 ease-out ${
						loaded ? "opacity-0" : "opacity-100"
					}`}
				/>
			) : null}
			<img
				src={src}
				alt={alt}
				loading="lazy"
				decoding="async"
				onLoad={() => setLoaded(true)}
				ref={(node) => {
					// Handle images already cached/complete before hydration.
					if (node?.complete) setLoaded(true);
				}}
				className={`relative h-full w-full object-cover transition-opacity duration-700 ease-out ${
					loaded ? "opacity-100" : "opacity-0"
				}`}
			/>
		</div>
	);
}
