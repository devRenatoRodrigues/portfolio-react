export type Buttons = {
    tittle: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined,
    type?: "button" | "submit" | "reset",
    className: string,
    onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}