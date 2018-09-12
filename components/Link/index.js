import Link from "next/link"

export default ({ href, ...rest }) => (
  <Link
    href={href}
    as={`${process.env.NODE_ENV === "production" ? "/next-static" : ""}${href}`}
    {...rest}
  />
)
