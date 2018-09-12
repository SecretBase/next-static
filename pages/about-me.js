import React from "react"
import Head from "next/head"
import Link from "../components/Link"

export default () => (
  <>
    <Head>
      <title>About Me</title>
    </Head>
    <h1>I love cat</h1>
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
    </nav>
  </>
)
