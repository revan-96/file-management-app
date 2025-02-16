import { DetailedHTMLProps, ReactNode } from "react";

type ButtonProps = {
    type: string | undefined;
} & DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

function Button(props: { children: ReactNode } & ButtonProps) {
    return <button {...props}>
        {props.children}
    </button>
}

export default Button;