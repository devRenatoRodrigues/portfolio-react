export type Buttons = {
    title: string,
    type?: "button" | "submit" | "reset",
    className: string,
    onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}