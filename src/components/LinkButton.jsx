import Link from 'next/link'

const LinkButton = ({
    link = "/",
    variant = "primary",
    children,
    classes = "",
    ...rest
  }) => {
    return (
      <Link passHref href={link} >
        <a
          className={`bg-zinc-200 text-secondary text-xl font-bold py-2 px-4 rounded min-w-[15rem] flex items-center justify-center ${classes}`}
          {...rest}
        >
          {children}
        </a>
      </Link>
    );
  };
export default LinkButton;