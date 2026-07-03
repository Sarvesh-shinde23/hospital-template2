import Link from "next/link";

const DropdownToggleLink = (props: { [x: string]: any; title: any; className: any; }) => {
  const {
    title,
    className,
    ...others
  } = props;
  return <Link href="#" data-bs-toggle="dropdown" className={className || 'dropdown-item dropdown-toggle'} {...others}>
      {title}
    </Link>;
};

export default DropdownToggleLink;