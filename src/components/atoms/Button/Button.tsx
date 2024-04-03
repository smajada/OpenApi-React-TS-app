type Props = {
    /** Some description */
    variant: 'red' | 'yellow' | 'green';
};

/**
 * Hello world
 */

const Button = ({ variant = 'green' }: Props) => {
    return <div style={{ background: variant, borderRadius: '50%', width: 50, height: 50 }}></div>;
};

export default Button;
