import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

function Hello({ name }: { name: string }) {
	return <h1>Hello {name}</h1>;
}

describe("Hello", () => {
	it("renders the name", () => {
		render(<Hello name="World" />);
		expect(screen.getByRole("heading")).toHaveTextContent("Hello World");
	});
});
